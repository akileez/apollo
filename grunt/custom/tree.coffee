#
# * grunt-tree
# * https://github.com/yss/grunt-tree
# *
# * Copyright (c) 2013 yansong
# * Licensed under the MIT license.
#

parseToTree = (obj, md5) ->
  key = undefined
  i = undefined
  arr = undefined
  len = undefined
  tmp = undefined
  fileArr = undefined
  tree = {}
  for key of obj
    tmp = tree
    arr = obj[key].split(path.sep)
    i = 0
    len = arr.length - 1

    while i < len
      tmp[arr[i]] = {}  unless tmp[arr[i]]
      tmp = tmp[arr[i]]
      i++

    # handle last one
    fileArr = arr[i].split(".")
    fileArr.pop()  if md5

    # if has postfix, remove it
    fileArr.pop()  if fileArr.length > 1

    # get the origin value
    tmp[fileArr.join(".")] = obj[key]
  tree

# file with lost postfix
getFileName = (filename, version) ->
  pos = filename.lastIndexOf(".")
  if version
    version = "." + version
    (if ~pos then filename.substring(0, pos) + version + filename.slice(pos) else filename + version)
  else
    (if ~pos then filename.substring(0, pos) else filename)

# get the prefix with subdir
getExtFileName = (subdir, ext, filename) ->
  prefix = undefined
  filename = getFileName(filename)
  if ext.level > 0 and subdir
    prefix = subdir.split("/")[ext.level - 1]
    filename = prefix + ext.hyphen + filename  if prefix
  filename

# get md5 version of file
getMd5Version = (str, encoding, len) ->
  str = str or Math.random().toString()
  str = crypto.createHash("md5").update(str).digest(encoding or "hex")
  (if len then str.slice(0, len) else str)
getMd5Name = (abspath, filename, md5) ->
  if md5
    len = (if typeof md5 is "number" then md5 else 0)
    version = getMd5Version(fs.readFileSync(abspath), "", len)
    return getFileName(filename, version)
  filename
"use strict"
path = require("path")
fs = require("fs")
crypto = require("crypto")
module.exports = (grunt) ->
  grunt.registerMultiTask "tree", "Parse a directory to a tree with json format.", ->
    options = @options(
      recurse: true

      # type: [],
      ext: {} # can be covered
      # level: 0,
      # hyphen: '-'
      md5: false
      cwd: "" # relative to the src directory
      format: false
    )
    typeReg = undefined
    options.ext.hyphen = "-"  unless options.ext.hyphen
    if options.ext.level > 0 and not options.format
      grunt.fail.fatal "For use the ext option, you must set \"format: true\" in your options."
      return
    if grunt.util.kindOf(options.type) is "array"
      typeReg = new RegExp("\\.(?:" + options.type.join("|") + ")$")
    else
      typeReg = false
    @files.forEach (f) ->
      toTree = (abspath, subdir, filename) ->
        extFileName = undefined

        # ensure subdir is not undefined
        subdir = subdir or ""

        # ignore hidden file

        # grunt.log.writeln('Ignore file: ' + filename);
        return  if filename.indexOf(".") is 0
        if grunt.file.isFile(abspath)

          # not the given type
          return  if typeReg and not typeReg.test(filename)
          if options.format
            extFileName = getExtFileName(subdir, options.ext, filename)
          else
            extFileName = getFileName(filename)
          tree[extFileName] = path.join(options.cwd, subdir, getMd5Name(abspath, filename, options.md5))
      tree = {}
      f.src.filter((filepath) ->
        unless grunt.file.exists(filepath)
          grunt.log.warn "Source file \"" + filepath + "\" not found."
          false
        else
          true
      ).forEach (filepath) ->
        filepath = path.join(filepath, options.cwd)  if options.cwd
        if options.recurse
          grunt.file.recurse filepath, (abspath, rootdir, subdir, filename) ->
            toTree abspath, subdir, filename

        else
          files = fs.readdirSync(filepath)
          files.forEach (filename) ->
            toTree path.join(filepath, filename), "./", filename


      tree = parseToTree(tree, options.md5)  unless options.format
      grunt.file.write f.dest, JSON.stringify(tree, null, 2)
      grunt.log.writeln "File \"" + f.dest + "\" created."
