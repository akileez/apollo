module.exports =
  foo:
    options:
      replacements: [
        pattern: /\.\.\/assets/g
        replacement: 'assets'
      ]
    files: [
      expand: true
      cwd: '<%= dir.stage %>'
      src: ['*.html']
      dest: '<%= dir.stage %>'
    ,
      expand: true
      cwd: '<%= dir.stage %>/blog'
      src: ['*.html']
      dest: '<%= dir.stage %>/blog'
    ]

  pages:
    options:
      replacements: [
        pattern: /\.hbs/g
        replacement: '.html'
      ]
    files: [
      expand: true
      cwd: '<%= dir.tmp %>/tree'
      src: ['pages.json']
      dest: '<%= dir.tmp %>/tree'
    ,
      expand: true
      cwd: '<%= dir.json %>/manifests'
      src: ['pages.json']
      dest: '<%= dir.json %>/manifests'
    ]

  json:
    options:
      replacements: [
        pattern: /app\/scripts\//g
        replacement: ''
      ,
        pattern: /app\/styles\//g
        replacement: ''
      ]
    files: [
      expand: true
      cwd: '<%= dir.tmp %>/convert/json'
      src: ['*.json']
      dest: '<%= dir.tmp %>/convert/json'
    ]
