module.exports =
  options:
    plugins:
      removeViewBox: false

  build:
    files: [
      expand: true
      cwd: "<%= dir.img %>/svg"
      src: '**/*.svg'
      dest: "<%= dir.build %>/assets/img/svg"
    ]
