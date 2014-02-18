module.exports =
  build:
    options:
      port: 9000
      hostname: '*'
      base: "<%= dir.build %>"
  dist:
    options:
      port: 9001
      hostname: '*'
      base: "<%= dir.dist %>"
