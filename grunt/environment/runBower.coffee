module.exports = (grunt) ->

  # Multitasks
  # ----------------------------
  grunt.registerMultiTask "genStaticConfig", "Generate static configurations for environment changes", ->

    grunt.config "bowercopy.JQuery.options.runbower", true
    grunt.config "bowercopy.JQuery.options.destPrefix", "<%= dir.tmp %>/link"
    files = grunt.config("bowercopy.JQuery.files")
    grunt.config "bowercopy.JQuery.files", files

    grunt.config "bowercopy.jquery.options.runbower", true
    grunt.config "bowercopy.jquery.options.destPrefix", "<%= dir.tmp %>/link"
    files = grunt.config("bowercopy.jquery.files")
    grunt.config "bowercopy.jquery.files", files

    grunt.config "bowercopy.development.options.runbower", true
    grunt.config "bowercopy.development.options.destPrefix", "<%= dir.tmp %>/link"
    files = grunt.config("bowercopy.development.files")
    grunt.config "bowercopy.development.files", files

    grunt.config "bowercopy.bootstrap.options.runbower", true
    grunt.config "bowercopy.bootstrap.options.destPrefix", "<%= dir.tmp %>/link"
    files = grunt.config("bowercopy.bootstrap.files")
    grunt.config "bowercopy.bootstrap.files", files

    grunt.config "bowercopy.fontawesome.options.runbower", true
    grunt.config "bowercopy.fontawesome.options.destPrefix", "<%= dir.tmp %>/link"
    files = grunt.config("bowercopy.fontawesome.files")
    grunt.config "bowercopy.fontawesome.files", files

    grunt.config "bowercopy.flexslider.options.runbower", true
    grunt.config "bowercopy.flexslider.options.destPrefix", "<%= dir.tmp %>/link"
    files = grunt.config("bowercopy.flexslider.files")
    grunt.config "bowercopy.flexslider.files", files

    grunt.config "bowercopy.fuelux.options.runbower", true
    grunt.config "bowercopy.fuelux.options.destPrefix", "<%= dir.tmp %>/link"
    files = grunt.config("bowercopy.fuelux.files")
    grunt.config "bowercopy.fuelux.files", files

    grunt.config "bowercopy.greensock.options.runbower", true
    grunt.config "bowercopy.greensock.options.destPrefix", "<%= dir.tmp %>/link"
    files = grunt.config("bowercopy.greensock.files")
    grunt.config "bowercopy.greensock.files", files
