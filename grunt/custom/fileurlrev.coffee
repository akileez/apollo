#
# * grunt-cssurlrev
# * https://github.com/richardbolt/grunt-cssurlrev
# *
# * Copyright (c) 2013 Richard Bolt
# * Licensed under the MIT license.
#
"use strict"
module.exports = (grunt) ->
  grunt.registerMultiTask "urlrev", "Replace file urls in css and html files with urls that include revision hashes.", ->

    # Merge task-specific and/or target-specific options with these defaults.
    self = this
    options = self.options(assets: "") # Assets file - false or empty to use grunt.filerev.summary
    assets = undefined

    if options.assets and grunt.file.isFile(options.assets)
      assets = grunt.file.readJSON(options.assets)
    else

      # We must have run filerev in some manner if we're not
      # passing in an assets json file to use.
      unless grunt.filerev
        grunt.fail.fatal [
          "Could not find grunt.filerev.summary."
          "Run \"filerev\" first or provide a options.assets JSON file."
        ].join("\n")
      assets = grunt.filerev.summary

    self.filesSrc.forEach (file) ->
      css = grunt.file.read(file)
      original = css
      matches = css.match(/url\(\s*['"]?([^'"\)]+)['"]?\s*\)/g) or css.match(/(?:src|href)="(\S+)"/g)
      return  unless matches

      matches.forEach (item) ->
        for key of assets
          css = css.replace(key, assets[key])

      if original isnt css
        grunt.log.writeln "✔ ".green + file + (" was changed.").grey
        grunt.file.write file, css
