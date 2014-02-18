module.exports =
  html:
    files:
      list: ['<%= dir.build %>/**/*.html']

  css:
    files:
      list: ['<%= dir.build %>/**/*.css']

  js:
    files:
      list: ['<%= dir.build %>/**/*.js']

  fonts:
    files:
      list: ['<%= dir.build %>/assets/fonts/*.*']

  img:
    files:
      list: ['<%= dir.build %>/assets/img/**/*']
