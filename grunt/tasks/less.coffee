module.exports =

  options:
    report: 'min'


  compile:
    files: [
      expand: true
      cwd: '<%= dir.less %>'
      src: ['styles.less']
      dest: '<%= dir.css %>'
      ext: '.css'
    ]

  bootstrap:
    files: [
      expand: true
      cwd: '<%= dir.less %>'
      src: ['_bs.less']
      dest: '<%= dir.css %>'
      ext: '.css'
    ,
      expand: true
      cwd: '<%= dir.less %>/bootstrap'
      src: ['_bs-*.less']
      dest: '<%= dir.css %>'
      ext: '.css'
    ]

  theme:
    files: [
      expand: true
      cwd: '<%= dir.less %>'
      src: ['_theme.less']
      dest: '<%= dir.css %>'
      ext: '.css'
    ]

  vendor:
    files: [
      expand: true
      cwd: '<%= dir.less %>'
      src: ['_vendor.less']
      dest: '<%= dir.css %>'
      ext: '.css'
    ]

  single:
    files: [
      expand: true
      cwd:    "<%= dir.less %>/assets"
      src:    ['bs-normalize.less', 'bs-print.less', 'bs-scaffolding.less', 'bs-type.less', 'bs-code.less', 'bs-grid.less', 'bs-tables.less', 'bs-forms.less', 'bs-input-groups.less', 'bs-buttons.less', 'bs-button-labels.less' ]
      dest:   "<%= dir.css %>/development/prod"
      ext:    '.css'
    ,
      expand: true
      cwd:    "<%= dir.less %>/assets"
      src:    ['bs-component-animations.less', 'bs-glyphicons.less', 'bs-dropdowns.less', 'bs-list-group.less', 'bs-panels.less', 'bs-wells.less', 'bs-close.less']
      dest:   "<%= dir.css %>/development/prod"
      ext:    '.css'
    ,
      expand: true
      cwd:    "<%= dir.less %>/assets"
      src:    ['bs-navs.less', 'bs-navbar.less', 'bs-button-groups.less', 'bs-breadcrumbs.less', 'bs-pagination.less', 'bs-pager.less']
      dest:   "<%= dir.css %>/development/prod"
      ext:    '.css'
    ,
      expand: true
      cwd:    "<%= dir.less %>/assets"
      src:    ['bs-modals.less', 'bs-tooltip.less', 'bs-popovers.less']
      dest:   "<%= dir.css %>/development/prod"
      ext:    '.css'
    ,
      expand: true
      cwd:    "<%= dir.less %>/assets"
      src:    ['bs-alerts.less', 'bs-thumbnails.less', 'bs-media.less', 'bs-labels.less', 'bs-badges.less', 'bs-progress-bars.less', 'bs-carousel.less', 'bs-jumbotron.less']
      dest:   "<%= dir.css %>/development/prod"
      ext:    '.css'
    ,
      expand: true
      cwd:    "<%= dir.less %>/assets"
      src:    ['bs-utilities.less', 'bs-responsive-utilities.less']
      dest:   "<%= dir.css %>/development/prod"
      ext:    '.css'
    ]
