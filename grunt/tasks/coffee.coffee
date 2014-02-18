# Configure grunt tasks for CoffeeScript compilation

module.exports =

  compile:
    files: [
      expand: true
      cwd:    "<%= dir.coffee %>"
      src:    ['*.coffee']
      dest:   "<%= dir.js %>"
      ext:    '.js'
    ]
