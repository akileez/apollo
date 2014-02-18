module.exports =
  options:
    report:   'min'
    keepBreaks: false

  build:
    files: [
      expand: true
      cwd:    "<%= dir.css %>"
      src:    'styles.css'
      dest:   "<%= dir.css %>"
      ext:    '-min.css'
    ]

  views:
    options:
      keepBreaks: true
    files: [
      expand: true
      cwd:    "<%= dir.css %>/development/pageviews"
      src:    ['*.css']
      dest:   "<%= dir.css %>/pages"
      ext:    '-min.css'
    ]
