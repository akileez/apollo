module.exports =
  options:
    encoding: 'utf8'
    algorithm: 'md5'
    length: 8

  all:
    src: [
      '<%= dir.stage %>/assets/img/**/*.{jpg,jpeg,gif,png}',
      '<%= dir.stage %>/assets/css/**/*.css',
      '<%= dir.stage %>/assets/js/**/*.js'
    ]
