module.exports =
  # // Task-level options
  # # -----------------------------------------------------------------------------
  options:
    data:       '<%= dir.json %>/**/*.{json,ymal}'
    assets:     '<%= dir.assets %>'
    partials:   [
      '<%= dir.sections %>/**/*.{html,hbs}'
      '<%= dir.base %>/*.{html,hbs}'
      '<%= dir.blocks %>/*.{html,hbs}'
      '<%= dir.bricks %>/*.{html,hbs}'
    ]
    layoutdir:  '<%= dir.layouts %>'
    layoutext:  '.hbs'
    flatten:    false
    helpers:    [
      '<%= dir.helpers %>/**/helper-*.js'
    ]
    # // Helper options
    # -----------------------------------------------------------------------------
    compose:
      cwd     : '<%= dir.modules %>/'
    less:
      destdir : '<%= dir.css %>/development/views'
    marked:
      cwd: '<%= dir.modules %>/'
      breaks: false
      gfm: true
      pedantic: false
      sanitize: false
      smartLists: true
      smartypants: true
      tables: true
    minify:
      collapseBooleanAttributes: false,
      collapseWhitespace: true,
      removeAttributeQuotes: false,
      removeCDATASectionsFromCDATA: false,
      removeComments: false,
      removeCommentsFromCDATA: false,
      removeEmptyAttributes: false,
      removeEmptyElements: false,
      removeOptionalTags: false,
      removeRedundantAttributes: false,
      useShortDoctype: false
    prettify:
      condense: true
      indent: 2
      indent_size: 2
      indent_char: ' '
      indent_handlebars: true
      indent_inner_html: true
      indent_scripts: 'normal'
      brace_style: 'collapse'
      wrap_line_length: 0
      preserve_newlines: true
      max_preserve_newlines: 0
      padcomments: false
      # unformatted: ['code', 'pre', 'em', 'strong', 'i', 'b', 'u', 'sub', 'sup', 'a']
      unformatted:  [
        'a'
        'abbr'
        'acronym'
        'address'
        'b'
        'bdo'
        'big'
        'cite'
        'code'
        'del'
        'dfn'
        'dt'
        'em'
        'font'
        'i'
        'ins'
        'kbd'
        'pre'
        'q'
        's'
        'samp'
        'small'
        'span'
        'strike'
        'strong'
        'sub'
        'sup'
        'tt'
        'u'
        'var'
      ]
      js:
        brace_style: 'collapse'
        break_chained_methods: false
        eval_code: false
        indent: 2
        indent_char: ' '
        indent_level: 0
        indent_size: 2
        indent_with_tabs: false
        jslint_happy: false
        keep_array_indentation: false
        keep_function_indentation: false
        max_preserve_newlines: 0
        preserve_newlines: false
        space_before_conditional: true
        unescape_strings: false
        wrap_line_length: 0
      css:
        end_with_newline: false
        indent: 2
        indent_char: ' '
        indent_size: 2
        selector_separator: ""

    # // Custom options
    # -----------------------------------------------------------------------------
    # build stages: test/dev/prod/dist
    buildstage : "dev"
    # build environments: development/production
    buildenv   : "development"
    codeSrcDir : '<%= dir.scripts %>'


  # // Core Assemble Processing --Development and Production
  # -----------------------------------------------------------------------------
  views:
    files: [
      expand : true
      cwd    : "<%= dir.views %>"
      src    : ['*.{html,hbs}']
      dest   : "<%= dir.build %>/"
    ]
  articles:
    files: [
      expand : true
      cwd    : "<%= dir.articles %>"
      src    : ['**/*.{html,hbs}']
      dest   : "<%= dir.build %>/articles"
    ]
  styleguide:
    files: [
      expand : true
      cwd    : "<%= dir.styleguide %>"
      src    : ['**/*.{html,hbs}']
      dest   : "<%= dir.build %>/styleguide"
    ]
  docs:
    files: [
      expand : true
      cwd    : "<%= dir.docs %>"
      src    : ['**/*.{html,hbs}']
      dest   : "<%= dir.build %>/docs"
    ]

  # Root Level Support Pages --Development and Production
  # -----------------------------------------------------------------------------
  sitemap:
    options:
      layout : 'sitemap.xml'
      ext    : '.xml'
    files: [
      expand : true
      cwd    : "<%= dir.sitemap %>"
      src    : ['sitemap.hbs']
      dest   : "<%= dir.build %>/"
    ]
  siteMAP:
    options:
      layout : 'sitemap.xml'
      ext    : '.xml'
    files: [
      expand : true
      cwd    : "<%= dir.sitemap %>"
      src    : ['sitemap-*.hbs']
      dest   : "<%= dir.build %>/"
    ]
  siteTXT:
    options:
      ext: '.txt'
    files: [
      expand : true
      cwd    : "<%= dir.site %>"
      src    : ['humans.hbs', 'robots.hbs']
      dest   : "<%= dir.build %>"
    ]
  siteXML:
    options:
      ext: '.xml'
    files: [
      expand : true
      cwd    : "<%= dir.site %>"
      src    : ['crossdomain.hbs']
      dest   : "<%= dir.build %>"
    ]
  siteHTA:
    options:
      ext: ''
    files: [
      expand : true
      cwd    : "<%= dir.site %>"
      src    : ['.htaccess']
      dest   : "<%= dir.build %>"
    ]
  sitePHP:
    options:
      ext: '.php'
    files: [
      expand : true
      cwd    : "<%= dir.site %>"
      src    : ['email3.hbs']
      dest   : "<%= dir.build %>"
    ]
  error:
    files: [
      expand : true
      cwd    : "<%= dir.error %>"
      src    : ['**/*.{html,hbs}']
      dest   : "<%= dir.build %>/error/"
    ]

  # Blog - Still Developing
  # -----------------------------------------------------------------------------
  blog:
    options:
      plugins:    ['<%= dir.plugins %>/**/*.js']

      # // Permalinks
      permalinks:
        structure:  ':title:ext'
        replacements:
          structure: ':title'
          replacement: '<%= _.slugify(title) %>'

      # // Compose and Aggregate
      posts:
        cwd:      "<%= dir.blog %>/posts/"
        sortBy: 'slug'
        sortOrder: 'desc'

      post:
        convert: false
        cwd:      "<%= dir.blog %>/posts"
        sortBy: 'slug'
        sortOrder: 'desc'

    files: [
      expand: true
      cwd:    "<%= dir.blog %>"
      src:    ['**/*.{html,hbs}', '!posts/**/*.{html,hbs}']
      dest:   "<%= dir.build %>/blog"
    # ,
    #   expand: true
    #   cwd:    "<%= dir.blog %>"
    #   src:    ['**/post*.{html,hbs}']
    #   dest:   "<%= dir.build %>/blog"
    ]

  # Posts - Still Developing
  # Section separate from Blog for unique processing of ...
  # permalinks, paginator, posts and other custom helpers
  # -----------------------------------------------------------------------------
  posts:
    options:
      plugins:    ['<%= dir.plugins %>/**/*.js']

      # // Permalinks
      permalinks:
        structure:  ':title:ext'
        replacements:
          structure: ':title'
          replacement: '<%= _.slugify(title) %>'

      # // Compose and Aggregate
      posts:
        cwd:      "<%= dir.blog %>/posts/"
        sortBy: 'slug'
        sortOrder: 'desc'

      post:
        convert: false
        cwd:      "<%= dir.blog %>/posts"
        sortBy: 'slug'
        sortOrder: 'desc'

    files: [
      expand: true
      cwd:    "<%= dir.blog %>/posts"
      src:    ['**/*.{html,hbs}']
      dest:   "<%= dir.build %>/blog/posts"
    ]

  # // All Files - Still Testing
  # -----------------------------------------------------------------------------
  all:
    options:
      flatten: false
      # plugins: ['assemble-contrib-lunr']
      # lunr:
      #   dataPath: "<%= dir.build %>/assets/data/searh_data.json"
    files: [
      expand : true
      cwd    : "<%= dir.views %>"
      src    : ['**/*.{html,hbs}']
      dest   : "<%= dir.build %>/"
    ,
      expand : true
      cwd    : "<%= dir.error %>"
      src    : ['**/*.{html,hbs}']
      dest   : "<%= dir.build %>/error/"
    ,
      expand : true
      cwd    : "<%= dir.articles %>"
      src    : ['**/*.{html,hbs}']
      dest   : "<%= dir.build %>/articles"
    ,
      expand : true
      cwd    : "<%= dir.styleguide %>"
      src    : ['**/*.{html,hbs}']
      dest   : "<%= dir.build %>/styleguide"
    ]

  # // Markdown to Markdown - Still Testing
  # -----------------------------------------------------------------------------
  readme:
    options:
      ext:    '.md'
      engine: 'handlebars'
      layout: 'default'
      partials: ["<%= dir.readme %>/docs/**/*.md"]
      marked:
        breaks: true
        gfm: true
        pedantic: false
        sanitize: false
        smartLists: true
        smartypants: true
        tables: true
    files: [
      expand: true
      cwd:    "<%= dir.readme %>/docs"
      src:    ['*.tmpl']
      dest:   "<%= dir.root %>"
    ]
