#
# * grunt-yfm2json
# * https://github.com/akileez/grunt-yfm2json
# *
# * Inspired by Scott Stanfield (markdown-to-json)
# * Copyright (c) 2013 Keith Williams
# * Licensed under the MIT license.
#
"use strict"
module.exports = (grunt) ->
  y2j = require("yfm2json")
  grunt.registerMultiTask "y2j", "YFM from files --> to single JSON file", ->
    options = @options(
      minify: false
      bdir: '',
      preview: false
    )
    grunt.verbose.writeflags options, "Options"

    # Iterate over file groups and parse the files
    @files.forEach (f) ->
      options.outfile = f.dest
      try
        y2j.parse f.src, options
        grunt.log.ok "Created " + options.outfile
      catch e
        grunt.log.error()
        grunt.verbose.error e
        grunt.fail.warn "yfm2json task failed."


# registerMultiTask
# module.exports
