module.exports =
  lint:
    options:
      compile:  true
    files: [
      expand: true
      cwd:    "<%= dir.tmp %>/css"
      src:    ['splash.css']
      dest:   "<%= dir.tmp %>"
      ext:    '-fix.css'
    ]

  build:
    options:
      compile:  true
    files: [
      expand: true
      cwd:    "<%= dir.css %>"
      src:    ['styles.css']
      dest:   "<%= dir.css %>"
    ]

  theme:
    options:
      compile:  true
    files: [
      expand: true
      cwd:    "<%= dir.css %>"
      src:    ['_theme.css']
      dest:   "<%= dir.css %>"
    ]

  vendor:
    options:
      compile:  true
    files: [
      expand: true
      cwd:    "<%= dir.css %>"
      src:    ['_vendor.css']
      dest:   "<%= dir.css %>"
    ]

  bootstrap:
    options:
      compile:  true
    files: [
      expand: true
      cwd:    "<%= dir.css %>"
      src:    ['_bs*.css']
      dest:   "<%= dir.css %>"
    ]

  test:
    options:
      compile:  true
    files: [
      expand: true
      cwd:    "<%= dir.css %>/development/dev/testprefix"
      src:    ['test.css']
      dest:   "<%= dir.css %>/development/dev/testprefix"
    ]
