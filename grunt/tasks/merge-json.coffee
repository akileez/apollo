module.exports =
  project:
    files: '<%= dir.proj %>/tree/project-files.json': [
      '<%= dir.proj %>/tree/assemble.json',
      '<%= dir.proj %>/tree/scripts.json',
      '<%= dir.proj %>/tree/styles-css.json',
      '<%= dir.proj %>/tree/styles-less.json',
      '<%= dir.proj %>/tree/assets.json',
      '<%= dir.proj %>/tree/serve.json'
    ]

  layout:
    files: '<%= dir.json %>/manifests/files.json': [
      '<%= dir.tmp %>/convert/json/jsCustom.json'
      '<%= dir.tmp %>/convert/json/jsVendor.json'
      '<%= dir.tmp %>/convert/json/jsjQuery.json'
      '<%= dir.tmp %>/convert/json/jsBootstrap.json'
      '<%= dir.tmp %>/convert/json/cssBoot.json'
    ]
