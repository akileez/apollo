module.exports =
  build:
    options:
      quiet: false
      maxRules: 4096
      maxFileSize:  10240000
    src: [
      "<%= dir.css %>/*.css"
    ]
