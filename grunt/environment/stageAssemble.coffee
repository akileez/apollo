module.exports = (grunt) ->

# Multitasks
  # ----------------------------
  grunt.registerMultiTask "genStaticConfig", "Generate static configurations for environment changes", ->
    grunt.config "assemble.options.dev", false
    grunt.config "assemble.options.buildenv", "production"
    grunt.config "assemble.options.assets", "<%= dir.build %>/assets"
    files = grunt.config("assemble.views.files")
    files[0].dest = "<%= dir.build %>/"
    grunt.config "assemble.views.files", files

    grunt.config "assemble.options.dev", false
    grunt.config "assemble.options.buildenv", "production"
    grunt.config "assemble.options.assets", "<%= dir.build %>/assets"
    files = grunt.config("assemble.articles.files")
    files[0].dest = "<%= dir.build %>/articles"
    grunt.config "assemble.articles.files", files

    grunt.config "assemble.options.dev", false
    grunt.config "assemble.options.buildenv", "production"
    grunt.config "assemble.options.assets", "<%= dir.build %>/assets"
    files = grunt.config("assemble.sitemap.files")
    files[0].dest = "<%= dir.build %>/"
    grunt.config "assemble.sitemap.files", files

    grunt.config "assemble.options.dev", false
    grunt.config "assemble.options.buildenv", "production"
    grunt.config "assemble.options.assets", "<%= dir.build %>/assets"
    files = grunt.config("assemble.styleguide.files")
    files[0].dest = "<%= dir.build %>/styleguide"
    grunt.config "assemble.styleguide.files", files

    grunt.config "assemble.options.dev", false
    grunt.config "assemble.options.buildenv", "production"
    grunt.config "assemble.options.assets", "<%= dir.build %>/assets"
    files = grunt.config("assemble.error.files")
    files[0].dest = "<%= dir.build %>/error"
    grunt.config "assemble.error.files", files

    grunt.config "assemble.options.dev", false
    grunt.config "assemble.options.buildenv", "production"
    grunt.config "assemble.options.assets", "<%= dir.build %>/assets"
    files = grunt.config("assemble.blog.files")
    files[0].dest = "<%= dir.build %>/blog"
    grunt.config "assemble.blog.files", files
