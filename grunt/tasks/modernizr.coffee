module.exports =
  dev:
    devFile:    "<%= dir.jsdev %>/modernizr-dev.js"
    outputFile: "<%= dir.js %>/modernizr.js"
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
    uglify: false
    tests: ['backgroundsize', 'csscolumns', 'canvastext', 'csstransforms3d', 'flexbox',
      'cssgradients', 'opacity', 'borderimage', 'borderradius', 'boxshadow', 'cssanimations',
      'csscolumns', 'cssreflections', 'csstransitions', 'testallprops', 'prefixed', 'csstransforms',
      'svg', 'inlinesvg', 'input', 'inputtypes', 'touch', 'fontface', 'testbundle',
      'css_backgroundrepeat', 'css_backgroundsizecover', 'css_boxsizing'
    ]
    parseFiles: true
    files:
      src: ["<%= dir.css %>/*.css", "<%= dir.js %>/**/*.js"]
    excludeFiles: ["<%= dir.jsdev %>/modernizr-dev.js", "<%= dir.js %>/modernizr.js"]
    matchCommunityTests: false
    # customTests: []

  dist:
    devFile:    "<%= dir.jsdev %>/modernizr-dev.js"
    outputFile: "<%= dir.js %>/modernizr.js"
    extra:
      shiv: true
      printshiv: false
      load: true
      mq: false
      cssclasses: true
    extensibility:
      addtest: false
      prefixed: true
      teststyles: false
      testprops: false
      testallprops: false
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
    files:
      src: ["<%= dir.css %>/*.css", "<%= dir.js %>/**/*.js"]
    excludeFiles: ["<%= dir.jsdev %>/modernizr-dev.js", "<%= dir.js %>/modernizr.js"]
    matchCommunityTests: false
    # customTests: []