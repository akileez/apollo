module.exports = (grunt) ->

  alias = (name, description, tasks) ->
    grunt.registerTask name, description, tasks

  # Aliases:
  # Default Task
  # --------------------------------------------------------------------------------
  alias 'default'    , 'Default task to build Assemble and start server', ['astrt']

  # Server Restarts
  # --------------------------------------------------------------------------------
  alias 'rstrt'      , 'Render Assemble files and restart server', [
    "initialize"
    "shell:synccss"
    "shell:syncjs"
    "assem"
    "connect:build"
    "watch"
  ]
  alias 'pstrt'      , 'Quick restart of server', [
    "connect:build"
    "watch"
  ]
  alias 'serve'      , 'Restart dist server', [
    "connect:dist"
    "open:dist"
    "watch"
  ]
  alias 'astrt'      , 'Build Assemble and start server', [
    "abuild"
    "connect:build"
    "open:build"
    "watch"
  ]

  # Project initalization
  # --------------------------------------------------------------------------------
  alias 'abuild'     , 'Initialize Assemble and prepare build', [
    "initialize"
    "prepbuild"
    "assem"
    "assemble:error"
    "assemble:sitemap"
  ]
  alias 'initialize' , 'Prepare config, css, and javascript files. Make manifest.', [
    "cson"
    "sortJSON"
    "allbutless"
    "y2j"
    "manifest"
    "manifiles"
    "tree-dev"
    # "tree-proj"
  ]
  alias 'allbutless'     , 'Compile, concat and uglify css files.', [
   "less:compile"
   "less:bootstrap"
   "less:theme"
   "less:vendor"
  ]

  # Core Assemble
  # --------------------------------------------------------------------------------
  alias 'assem'      , 'Render Assemble', [
    "assemble:views"
    "assemble:articles"
    "assemble:blog"
    "assemble:posts"
    "assemble:styleguide"
  ]
  alias 'sitemap'    , 'Generate sitemap.xml', [
    "y2j:all"
    "assemble:sitemap"
  ]
  alias 'error'    , 'Generate error pages', [
    "assemble:error"
  ]
  alias 'styleguide'    , 'Generate styleguide', [
    "assemble:styleguide"
  ]
  alias 'blog'    , 'Generate blog index', [
    "assemble:blog"
  ]
  alias 'posts'    , 'Generate blog posts', [
    "assemble:posts"
  ]
  alias 'sitepages'    , 'Generate human.txt, robots.txt and crossdomain.xml pages', [
    "assemble:docs"
    "assemble:siteTXT"
    "assemble:siteXML"
    "assemble:siteHTA"
    "assemble:sitePHP"
  ]

  # Prepare build directories
  # --------------------------------------------------------------------------------
  alias 'prepbuild'     , 'Clean build directory, Copy files to.', [
    "clean:build"
    "copy:build"
    "shell:renameDotfileBuild"
  ]
  alias 'prepstage'     , 'Clean build directory, Copy files to.', [
    "clean:stage"
    "copy:tostage"
  ]
  alias 'prepdist'      , 'Clean dist directory, Copy files to.',  [
    "clean:dist"
    "copy:dist"
  ]
  alias 'syncstatic'      , 'Clean dist directory, Copy files to.',  [
    "shell:syncfonts"
    "shell:syncimg"
    "shell:syncico"
    "shell:syncpdf"
    "shell:syncdata"
    "shell:syncphp"
  ]

  # Helpers
  # --------------------------------------------------------------------------------
  alias 'icons'      , 'Some task description here.', ["favicons"]
  alias 'svg-min'    , 'Some task description here.', ["svgmin"]
  alias 'pretty'     , 'Some task description here.', ["prettify:build"]
  alias 'bower'      , 'Some task description here.', ["genStaticConfig", "bowercopy"]

  # Manifests
  # --------------------------------------------------------------------------------
  alias 'yaml2json'     , 'Generate json from yfm of build files', ["y2j"]
  alias 'manibs'        , 'Generate json files from filesystem directory elements', ["manifest:bs"]
  alias 'manibootstrap' , 'Generate json files from filesystem directory elements', ["manifest:bootstrap"]
  alias 'manijquery'    , 'Generate json files from filesystem directory elements', ["manifest:jquery"]
  alias 'manicustom'    , 'Generate json files from filesystem directory elements', ["manifest:custom"]
  alias 'manivendor'    , 'Generate json files from filesystem directory elements', ["manifest:vendor"]
  alias 'manijs'        , 'Generate json files from filesystem directory elements', [
    "manicustom"
    "manivendor"
    "manibootstrap"
    "manijquery"
  ]
  alias 'manifiles'     , 'Generate lists of files for automation in json format.', [
    "frep:json"
    "merge-json:layout"
  ]
  alias 'tree-dev'   , 'Generate json manifest for Assemble assets.', [
    "tree:modules"
    "tree:img"
    "tree:css"
    "tree:js"
  ]
  alias 'tree-src'   , 'Generate json manifest files for project.', [
    "tree:assemble"
    "tree:assets"
    "tree:scripts"
    "tree:stylescss"
    "tree:stylesless"
  ]
  alias 'tree-proj'  , 'Concatenate proj json file.', [
    "tree-src"
    "merge-json:project"
  ]

  # CSS Lints: Autoprefixer and Recess
  # --------------------------------------------------------------------------------
  alias 'fixtheme'    , 'Some task description here.', [
    "autoprefixer:theme"
    "recess:theme"
  ]
  alias 'fixvendor'    , 'Some task description here.', [
    "autoprefixer:vendor"
    "recess:vendor"
  ]
  alias 'fixbootstrap'    , 'Some task description here.', [
    "autoprefixer:bootstrap"
    "recess:bootstrap"
  ]
  alias 'fixstyles'    , 'Some task description here.', [
    "autoprefixer:build"
    "recess:build"
  ]

  # HTML inspection and validation
  # --------------------------------------------------------------------------------
  alias 'inspect'    , 'HTML-Inspector via command line', [
    "shell:hi:index"
  ]
  alias 'validate'   , 'HTML validation via grunt', [
    "prodprep"
    "validation"
  ]
  alias 'testprod'   , 'Some task description here.', [
    "genStaticConfig"
    "assem"
    "sitemap"
  ]

  # Production Preparation Stage
  # --------------------------------------------------------------------------------
  alias 'testprep'   , 'Some task description here.', [
    "testinit"
    "prepbuild"
  ]
  alias 'testinit'   , 'Some task description here.', [
    "cson"
    "styles"
    "scripts"
    "y2j:all"
    "tree-dev"
  ]
  alias 'prodinit'   , 'Initialize files and settings for Production Distribution', [
    "cson"
    "less:compile"
    "fixstyles"
    "cssmin:build"
    "concat:buildscripts"
    "uglify:scripts"
    "clean:devfiles"
    "y2j:all"
    "tree-dev"
  ]
  alias 'styles'     , 'Compile, concat and uglify css files.', [
    "allbutless"
    "fixtheme"
    "fixvendor"
    "fixbootstrap"
    "fixstyles"
    "cssmin:build"
    "cssmin:views"
  ]
  alias 'scripts'    , 'Compile, concat and uglify javascript files', [
    "concat:buildboot"
    "concat:buildjs"
    "concat:buildcustom"
    "concat:vendor"
    "uglify:bootstrap"
    "uglify:jquery"
    "uglify:custom"
    "uglify:vendor"
  ]
  alias 'csstest'    , 'Some task description here.', [
    "testprep"
    "genStagedConfig"
    "assemble:all"
    "assemble:blog"
    "assemble:sitemap"
    "prepstage"
    "frep:foo"
    "uncss"
  ]

  # Production Build Stage
  # --------------------------------------------------------------------------------
  alias 'prodprep'   , 'Prepare for a Production Distribution', [
    "prodinit"
    "prepbuild"
    "genStaticConfig"
    "assem"
    "error"
    "sitemap"
    "sitepages"
    "prepstage"
    "clean:devstage"
  ]
  alias 'rev2'       , 'Hash files for cache busting', [
    # "copy:uncss"
    "clean:hash"
    "filerev:all"
    "filerev_assets"
    "urlrev"
  ]
  alias 'prod'       , 'Build a Production Distribution.', [
    "prodprep"
    "rev2"
    "prepdist"
    "shell:zipit"
    "serve"
    # "shell:deploydist"
    # "open:dist"
    # "shell:deploystage"
    # "open:stage"
  ]

  # Misc
  # --------------------------------------------------------------------------------
  alias 'readme'     , "Generation of README docs", [
    "assemble:readme"
    "shell:toc"
  ]
  alias 'tasks'      , "Listing of Grunt Tasks", [
    "availabletasks:tasks"
  ]
  alias 'jobs'      , "Listing of Grunt Aliases", [
    "availabletasks:jobs"
  ]
