module.exports =
  options:
    preserveComments: 'none'
    report: 'min'
    compress: false
    mangle: false

  custom:
    src: "<%= concat.buildcustom.dest %>"
    dest: "<%= dir.js %>/custom-min.js"

  vendor:
    src:  "<%= concat.buildvendor.dest %>"
    dest: "<%= dir.js %>/vendor-min.js"

  jquery:
    src:  "<%= concat.buildjs.dest %>"
    dest: "<%= dir.js %>/plugins-min.js"

  bootstrap:
    src: "<%= concat.buildboot.dest %>"
    dest: "<%= dir.js %>/bootstrap-min.js"

  scripts:
    src: "<%= concat.buildscripts.dest %>"
    dest: "<%= dir.js %>/scripts-min.js"
