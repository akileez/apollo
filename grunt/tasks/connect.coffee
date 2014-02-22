module.exports =
  build:
    options:
      port: 9000
      host: '*'
      base: "<%= dir.build %>"
  dist:
    options:
      port: 9001
      host: '*'
      base: "<%= dir.dist %>"