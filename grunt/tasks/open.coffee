module.exports =
  build:
    path: "http://localhost:<%= connect.build.options.port %>"
  dist:
    path: "http://localhost:<%= connect.dist.options.port %>"
  test:
    path: "<%= dir.open.test.path %>"
  stage:
    path: "<%= dir.open.stage.path %>"
  local:
    path: "<%= dir.open.local.path %>"
