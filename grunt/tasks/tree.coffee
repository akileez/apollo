module.exports =
  img:
    options:
      type: ['jpeg', 'jpg', 'png', 'gif', 'svg', 'ico', 'pdf']
      format: true
      ext:
        level: 3
        hyphen: '-'
    files: [
      src:  "<%= dir.static %>"
      dest: "<%= dir.json %>/manifests/img.json"
    ]

  css:
    options:
      type: ['css']
      format: true
    files: [
      src:  "<%= dir.styles %>"
      dest: "<%= dir.json %>/manifests/css.json"
    ]

  js:
    options:
      type: ['js']
      format: true
    files: [
      src:  "<%= dir.scripts %>"
      dest: "<%= dir.json %>/manifests/js.json"
    ]

  assemble:
    files: [
      src: "<%= dir.assemble %>"
      dest: "<%= dir.tmp %>/tree/assemble.json"
    ]

  pages:
    files: [
      src: "<%= dir.views %>"
      dest: "<%= dir.json %>/manifests/views.json"
    ]

  stylescss:
    files: [
      src: "<%= dir.css %>"
      dest: "<%= dir.tmp %>/tree/styles-css.json"
    ]

  stylesless:
    files: [
      src: "<%= dir.less %>"
      dest: "<%= dir.tmp %>/tree/styles-less.json"
    ]

  scripts:
    files: [
      src: "<%= dir.js %>"
      dest: "<%= dir.tmp %>/tree/scripts-js.json"
    ]

  assets:
    files: [
      src: "<%= dir.static %>"
      dest: "<%= dir.tmp %>/tree/assets.json"
    ]

  modules:
    options:
      format: true
    files: [
      src: "<%= dir.modules %>"
      dest: "<%= dir.json %>/manifests/module.json"
    ]
