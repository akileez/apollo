module.exports =

  #   .d8888b.
  #  d88P  Y88b
  #  888    888
  #  888         .d88b.  88888b.  888  888
  #  888        d88""88b 888 "88b 888  888
  #  888    888 888  888 888  888 888  888
  #  Y88b  d88P Y88..88P 888 d88P Y88b 888
  #   "Y8888P"   "Y88P"  88888P"   "Y88888
  #                      888           888
  #                      888      Y8b d88P
  #                      888       "Y88P"
  build:
    files: [
      expand: true
      cwd:    "<%= dir.static %>"
      src:    ['fonts/**', 'img/**', 'ico/**', 'pdf/**', 'data/**', 'php/**']
      dest:   "<%= dir.build %>/assets"
    ,
      expand: true
      cwd:    "<%= dir.css %>"
      src:    ['**/*.css']
      dest:   "<%= dir.build %>/assets/css"
    ,
      expand: true
      cwd:    "<%= dir.js %>"
      src:    ['**/*']
      dest:   "<%= dir.build %>/assets/js"
    ]

  dist:
    files: [
      expand: true
      cwd:    "<%= dir.stage %>"
      src:    ['**/*']
      dest:   "<%= dir.dist %>"
    ,
      expand: true
      cwd:    "<%= dir.stage %>"
      src:    ['.htaccess']
      dest:   "<%= dir.dist %>"
    ]

  tostage:
    files: [
      expand: true
      cwd:    "<%= dir.build %>"
      src:    ['**/*']
      dest:   "<%= dir.stage %>"
    ,
      expand: true
      cwd:    "<%= dir.build %>"
      src:    ['.htaccess']
      dest:   "<%= dir.stage %>"
    ]

  test:
    files: [
      expand: true
      cwd:    "<%= dir.build %>/assets/css"
      src:    ['**/*.css']
      dest:   "<%= dir.test %>"
    ]

  uncss:
    files: [
      src: '<%= dir.tmp %>/rev/styles-min.css'
      dest: '<%= dir.stage %>/assets/css/styles-min.css'
    ]
