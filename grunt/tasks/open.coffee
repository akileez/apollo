module.exports =
  build:
    path: "http://localhost:<%= connect.build.options.port %>"
  dist:
    path: "http://localhost:<%= connect.dist.options.port %>"
  test:
    path: "<%= opt.open.test.path %>"
  stage:
    path: "<%= opt.open.stage.path %>"
  local:
    path: "<%= opt.open.local.path %>"
