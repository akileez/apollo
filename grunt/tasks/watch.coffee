module.exports =
  # Task level options
  options:
    livereload: true
  # Target level options

  #------------------------------------------------------------------------------------------------------
  #  Assemble
  # ------------------------------------------------------------------------------------------------------
  helpers:
    files:    ["<%= dir.helpers %>/**/*.js"]
    tasks:    ['assem']
    options:
      event:  ['changed', 'deleted']
      spawn: true

  partials:
    files:    ["<%= dir.partials %>/**/*.{html,hbs}"]
    tasks:    ['assem']
    options:
      event:  ['changed', 'deleted']
      spawn: false

  modules:
    files:    [ "<%= dir.modules %>/**/*.{html,hbs}"]
    tasks:    ['tree:modules', 'assem']
    options:
      event:  ['changed', 'deleted', 'added']
      spawn: false

  views:
    files:    ["<%= dir.views %>/*.{html,hbs}"]
    tasks:    ['y2j:all', 'assemble:views']
    options:
      event:  ['changed', 'deleted']
      spawn: false

  errorpages:
    files:    ["<%= dir.error %>/**/*.{html,hbs}"]
    tasks:    ['error']
    options:
      event:  ['changed', 'deleted']
      spawn: false

  articles:
    files:    ["<%= dir.articles %>/**/*.{html,hbs}"]
    tasks:    ['y2j:all', 'assemble:articles']
    options:
      event:  ['changed', 'deleted']
      spawn: false

  docs:
    files:    ["<%= dir.docs %>/**/*.{html,hbs}"]
    tasks:    ['y2j:all', 'assemble:docs']
    options:
      event:  ['changed', 'deleted']
      spawn: false

  styleguide:
    files:    ["<%= dir.styleguide %>/**/*.{html,hbs}"]
    tasks:    ['styleguide']
    options:
      event:  ['changed', 'deleted']
      spawn: false

  blog:
    files:    ["<%= dir.blog %>/**/*.{html,hbs}"]
    tasks:    ['y2j:all', 'y2j:blog', 'blog', 'posts']
    options:
      event:  ['changed', 'deleted']
      spawn: false

  sitemap:
    files:    ["<%= dir.sitemap %>/sitemap.{html,hbs}"]
    tasks:    ['sitemap']
    options:
      event:  ['changed', 'deleted']
      spawn: false

  #------------------------------------------------------------------------------------------------------
  #  CSON to JSON
  # ------------------------------------------------------------------------------------------------------

  cson_assemble:
    files:    [
                "<%= dir.cson %>/**/*.cson"
                "!<%= dir.cson %>/_grunt/**"
                "!<%= dir.cson %>/_less/**"
              ]
    tasks:    ['newer:cson:assemble', 'sortJSON', 'assem']
    options:
      events: ['changed', 'deleted']
      spawn:  false

  cson_grunt:
    files:    ["<%= dir.cson %>/_grunt/**/*.cson"]
    tasks:    ['newer:cson:grunt']
    options:
      events: ['changed', 'deleted']
      spawn:  false

  #------------------------------------------------------------------------------------------------------
  #  LESS to CSS
  # ------------------------------------------------------------------------------------------------------

  lessVendor:
    files:    ["<%= dir.less %>/vendor/**/*.less"]
    tasks:    [ 'less:vendor'
                'less:compile'
                'fixvendor'
                "tree:css"
                "shell:synccss"
              ]
    options:
      spawn:  true

  lessTheme:
    files:    [ "<%= dir.less %>/utilities/**/*.less"
                "<%= dir.less %>/theme/**/*.less"
                "<%= dir.less %>/components/**/*.less"
                "<%= dir.less %>/_theme.less"
              ]
    tasks:    [ 'less:theme'
                'less:compile'
                'fixtheme'
                "tree:css"
                "shell:synccss"
              ]
    options:
      spawn:  true

  lessConfig:
    files:    [ "<%= dir.less %>/settings/**/*.less"
                "<%= dir.less %>/framework/**/*.less"
              ]
    tasks:    [ 'allbutless'
                "tree:css"
                "shell:synccss"
              ]
    options:
      spawn:  true

  lessBootstrap:
    files:    [ "<%= dir.less %>/overrides/**/*.less"
                "<%= dir.less %>/bootstrap/**/*.less"
                "<%= dir.less %>/assets/**/*.less"
                "<%= dir.less %>/_bs-*.less"
                "<%= dir.less %>/_bs.less"
              ]
    tasks:    [ 'less:bootstrap'
                'fixbootstrap'
                'manibs'
                'manifiles'
                "tree:css"
                "shell:synccss"
              ]
    options:
      spawn:  true

  #------------------------------------------------------------------------------------------------------
  #  Static Assets
  # ------------------------------------------------------------------------------------------------------

  css:
    files:    ["<%= dir.css %>/development/**/*.css"]
    tasks:    ['cssmin:views', 'tree:css', 'shell:synccss']
    options:
      spawn:  false

  coffee:
    files:    ["<%= dir.coffee %>/**/*.coffee"]
    tasks:    ['coffee']

  js:
    files:    ["<%= dir.js %>/**/*.js"]
    tasks:    ['manijs', 'manifiles', 'tree:js', 'shell:syncjs', 'assem']
    options:
      spawn:  false

  assetsPDF:
    files:    ["<%= dir.pdf %>/**/*"]
    tasks:    ['tree:img', 'shell:syncpdf']
    options:
      spawn:  false

  assetsICO:
    files:    ["<%= dir.favicon %>/**/*"]
    tasks:    ['tree:img', 'shell:syncico']
    options:
      spawn:  false

  assetsIMG:
    files:    ["<%= dir.img %>/**/*"]
    tasks:    ['tree:img', 'shell:syncimg']
    options:
      spawn:  false

  assetsDATA:
    files:    ["<%= dir.data %>/**/*"]
    tasks:    ['shell:syncdata']
    options:
      spawn:  false

  assetsFONTS:
    files:    ["<%= dir.font %>/**/*"]
    tasks:    ['shell:syncfonts']
    options:
      spawn:  false
