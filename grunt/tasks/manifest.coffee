module.exports =
  custom:
    options:
      metadata: []
      exclude: ["main"]
      collections:
        custom: ['js']
    files:
      '<%= dir.tmp %>/convert/json/jsCustom.json': ['<%= dir.jsviews %>/custom/*.js']

  vendor:
    options:
      metadata: []
      exclude: ["main"]
      collections:
        vendor: ['js']
    files:
      '<%= dir.tmp %>/convert/json/jsVendor.json': ['<%= dir.jsvendor %>/*.js']

  jquery:
    options:
      metadata: []
      exclude: ["main"]
      collections:
        jquery: ['js']
    files:
      '<%= dir.tmp %>/convert/json/jsjQuery.json': ['<%= dir.jsplugins %>/*.js']

  bootstrap:
    options:
      metadata: []
      exclude: ["main"]
      collections:
        bootstrapJS: ['js']
    files:
      '<%= dir.tmp %>/convert/json/jsBootstrap.json': ['<%= set.bootstrapJS.src %>']

  bs:
    options:
      metadata: []
      exclude: ["main"]
      collections:
        bootstrapCSS: ['css']
    files:
      '<%= dir.tmp %>/convert/json/cssBoot.json': ['<%= set.bootstrapCSS.src %>']
