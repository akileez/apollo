module.exports =
  compile:
    files: [
      expand: true
      cwd:    "<%= dir.tmp %>/convert/js2coffee"
      src:    '*.js'
      dest:   "<%= dir.tmp %>/convert/js2coffee"
      ext:    '.coffee'
    ]
