module.exports =
  tasks:
    options:
      dimmed: false
      filter: 'exclude'
      tasks: [
        'default', 'rstrt', 'pstrt', 'astrt', 'serve', 'abuild', 'initialize',
        'allbutless', 'assem', 'sitemap', 'error', 'styleguide', 'blog', 'prepbuild',
        'prepstage', 'prepdist', 'syncstatic', 'icons', 'svg-min', 'pretty', 'bower',
        'yaml2json', 'manibs', 'manibootstrap', 'manijquery', 'manicustom', 'manijs', 'manifiles',
        'tree-dev', 'tree-src', 'tree-proj', 'fixtheme', 'fixvendor', 'fixbootstrap', 'inspect',
        'validate', 'test', 'testprod', 'testprep', 'testinit', 'prodinit', 'styles', 'scripts',
        'csstest', 'prodprep', 'rev2', 'prod', 'toc', 'tasks', 'jobs', 'assemble', 'any-newer', 'newer-clean',
        'newer-postrun', 'genStagedConfig', 'genStaticConfig', 'notify_hooks'
      ]


  jobs:
    options:
      dimmed: false
      sort: false
      filter: 'include'
      tasks: [
        'default', 'rstrt', 'pstrt', 'astrt', 'serve', 'abuild', 'initialize',
        'allbutless', 'assem', 'sitemap', 'error', 'styleguide', 'blog', 'prepbuild',
        'prepstage', 'prepdist', 'syncstatic', 'icons', 'svg-min', 'pretty', 'bower',
        'yaml2json', 'manibs', 'manibootstrap', 'manijquery', 'manicustom', 'manijs', 'manifiles',
        'tree-dev', 'tree-src', 'tree-proj', 'fixtheme', 'fixvendor', 'fixbootstrap', 'inspect',
        'validate', 'test', 'testprod', 'testprep', 'testinit', 'prodinit', 'styles', 'scripts',
        'csstest', 'prodprep', 'rev2', 'prod', 'toc', 'tasks', 'jobs'
      ]
      groups:
        '01. Default': ['default']
        '02. Server Restarts': ['rstrt', 'pstrt', 'astrt', 'serve']
        '03. Project Initalization': ['abuild', 'initialize', 'allbutless']
        '04. Core Assemble': ['assem', 'sitemap', 'error', 'styleguide', 'blog']
        '05. Build Preparation': ['prepbuild', 'prepstage', 'prepdist', 'syncstatic']
        '06. Helpers': ['icons', 'svg-min', 'pretty', 'bower']
        '07. Manifests': [
          'yaml2json', 'manibs', 'manibootstrap', 'manijquery', 'manicustom', 'manijs', 'manifiles',
          'tree-dev', 'tree-src', 'tree-proj'
        ]
        '08. CSS Linting': ['fixtheme', 'fixvendor', 'fixbootstrap']
        '09. HTML Inspection': ['inspect', 'validate']
        '10. Tests': ['test', 'testprod']
        '11. Production Preparation Process': ['testprep', 'testinit', 'prodinit', 'styles', 'scripts', 'csstest']
        '12. Production Build Process': ['prodprep', 'rev2', 'prod']
        '13. Misc': ['toc', 'tasks', 'jobs']
