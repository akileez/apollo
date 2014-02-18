module.exports =
  options:
    banner: ''
    stripBanners: false
    separator: ''

  buildboot:
    src: "<%= set.bootstrapJS.src %>"
    dest: "<%= dir.js %>/bootstrap.js"

  buildcustom:
    src: "<%= dir.jsviews %>/custom/custom-*.js"
    dest: "<%= dir.js %>/custom.js"

  buildjs:
    src: "<%= dir.jsplugins %>/*.js"
    dest: "<%= dir.js %>/plugins.js"

  buildvendor:
    src: "<%= dir.jsvendor %>/*.js"
    dest: "<%= dir.js %>/vendor.js"


  buildscriptsJQ:
    src: [
      "<%= dir.jquery %>/jquery.js"
      "<%= set.bootstrapJS.src %>"
      "<%= dir.jsplugins %>/*.js"
      "<%= dir.jsvendor %>/*.js"
      "<%= dir.jsviews %>/custom/custom-*.js"
    ]
    dest: "<%= dir.js %>/scripts.js"

  buildscripts:
    src: [
      "<%= dir.jquery %>/jquery.js"
      "<%= set.bootstrapJS.src %>"
      "<%= dir.jsplugins %>/*.js"
      "<%= dir.jsvendor %>/*.js"
      "<%= dir.jsviews %>/custom/custom-*.js"
    ]
    dest: "<%= dir.js %>/scripts.js"
