module.exports =
  devFile:    "<%= dir.js %>/development/modernizr-dev.js"
  outputFile: "<%= dir.js %>/js/modernizr.js"
  extra:
    shiv: true
    printshiv: true
    load: true
    mq: true
    cssclasses: true
  extensibility:
    addtest: false
    prefixed: true
    teststyles: true
    testprops: true
    testallprops: true
    hasevents: true
    prefixes: true
    domprefixes: true
  uglify: true
  tests: ['backgroundsize', 'csscolumns', 'canvastext', 'csstransforms3d', 'flexbox',
    'cssgradients', 'opacity', 'borderimage', 'borderradius', 'boxshadow', 'cssanimations',
    'csscolumns', 'cssreflections', 'csstransitions', 'testallprops', 'prefixed', 'csstransforms',
    'svg', 'inlinesvg', 'input', 'inputtypes', 'touch', 'fontface', 'testbundle',
    'css_backgroundrepeat', 'css_backgroundsizecover', 'css_boxsizing'
  ]
  parseFiles: true
  files: ["<%= dir.css %>/**/*", "<%= dir.js %>/**/*", "<%= dir.assets %>/css/**/*", "<%= dir.assets %>/js/**/*"]
  excludeFiles: ["<%= dir.assets %>/js/modernizr-custom.js", "<%= dir.js %>/development/modernizr-dev.js"]
  matchCommunityTests: false
  # customTests: []
