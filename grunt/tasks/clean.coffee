module.exports =
  test:       ["<%= dir.test %>/**/*", "<%= dir.test %>/**/.*"]
  build:      ["<%= dir.build %>/**/*", "<%= dir.build %>/**/.*"]
  dist:       ["<%= dir.dist %>/**/*", "<%= dir.dist %>/**/.*"]
  stage:      ["<%= dir.stage %>/**/*", "<%= dir.stage %>/**/.*"]
  modernizr:  ["<%= dir.static %>/js/vendor/modernizr-custom.js"]
  rev:        ["<%= dir.tmp %>/rev/**/*"]
  bower:      ["<%= dir.tmp %>/bower/**/*"]
  link:      ["<%= dir.tmp %>/link/**/*"]
  html:      ["<%= dir.tmp %>/html/**/*"]
  hash:       ["<%= dir.proj %>/tree/hash.json"]

  devfiles: [
    "<%= dir.css %>/styles.css"
    "<%= dir.css %>/_bs*.css"
    "<%= dir.css %>/_theme.css"
    "<%= dir.css %>/_vendor.css"
    "<%= dir.js %>/bootstrap.js"
    "<%= dir.js %>/custom.js"
    "<%= dir.js %>/scripts.js"
    "<%= dir.js %>/vendor.js"
  ]

  devstage: [
    "<%= dir.stage %>/assets/css/development"
    "<%= dir.stage %>/assets/js/development"
    "<%= dir.stage %>/assets/js/views"
    "<%= dir.stage %>/assets/js/jquery"
  ]
