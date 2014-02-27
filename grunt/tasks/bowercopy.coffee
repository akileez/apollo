module.exports =

  development:
    options:
      runbower: false
    files:
      '<%= dir.jsdev %>/holder.js'              : 'holderjs/holder.js'
      '<%= dir.jsdev %>/helium.js'              : 'helium-css/helium.js'
      '<%= dir.jsdev %>/html-inspector.js'      : 'html-inspector/dist/html-inspector.js'
      '<%= dir.jsdev %>/prettify.js'            : 'google-code-prettify/src/prettify.js'

  JQuery:
    options:
      runbower: false
    files:
      '<%= dir.js %>/jquery/jquery.js'    : 'jquery/jquery.js'

  jquery:
    options:
      runbower: false
    files:
      '<%= dir.jsdev %>/plugins/fittext.js'   : 'FitText.js/jquery.fittext.js'
      '<%= dir.jsdev %>/plugins/nod.js'       : 'jquery-nod/nod.js'
      '<%= dir.jsdev %>/plugins/easing.js'    : 'jquery.easing/js/jquery.easing.js'
      '<%= dir.jsdev %>/plugins/scrollup.js'  : 'scrollup/js/jquery.scrollUp.js'

  bootstrap:
    options:
      runbower: false
    files:
      '<%= dir.less %>/bootstrap'                    : 'bootstrap/less'
      # Jasny Bootstrap
      '<%= dir.less %>/bootstrap/button-labels.less' : 'bootstrap-jasny/less/button-labels.less'
      # Bootstrap Javascripts
      '<%= dir.js %>/jquery/bootstrap'               : 'bootstrap/js'
      # Glyphicons
      '<%= dir.font %>'                              : 'bootstrap/dist/fonts'

  fontawesome:
    options:
      runbower: false
    files:
      # Font Awesome
      '<%= dir.less %>/vendor/font-awesome' : 'font-awesome/less'
      '<%= dir.font %>'                     : 'font-awesome/fonts'

  flexslider:
    options:
      runbower: false
    files:
      # Flexslider
      '<%= dir.less %>/vendor/flexslider/flexslider.less' : 'flexslider/flexslider.css'
      '<%= dir.jsdev %>/plugins/flexslider.js'                : 'flexslider/jquery.flexslider.js'
      '<%= dir.font %>'                                   : 'flexslider/fonts'

  greensock:
    options:
      runbower: false
    files:
      # Core files
      '<%= dir.jsdev %>/vendor/greensock'         : 'greensock/src/uncompressed'
      # Easing
      '<%= dir.jsdev %>/vendor/greensock/easing'  : 'greensock/src/uncompressed/easing'
      # Plugins
      '<%= dir.jsdev %>/vendor/greensock/plugins' : 'greensock/src/uncompressed/plugins'
      # Utils
      '<%= dir.jsdev %>/vendor/greensock/utils'   : 'greensock/src/uncompressed/utils'

  fuelux:
    options:
      runbower: false
    files:
      # FuelUX less files
      '<%= dir.less %>/vendor/fuelux/checkbox.less'             : 'fuelux/src/less/checkbox.less'
      '<%= dir.less %>/vendor/fuelux/combobox.less'             : 'fuelux/src/less/combobox.less'
      '<%= dir.less %>/vendor/fuelux/datagrid.less'             : 'fuelux/src/less/datagrid.less'
      '<%= dir.less %>/vendor/fuelux/datepicker.less'           : 'fuelux/src/less/datepicker.less'
      '<%= dir.less %>/vendor/fuelux/intelligent-dropdown.less' : 'fuelux/src/less/intelligent-dropdown.less'
      '<%= dir.less %>/vendor/fuelux/pillbox.less'              : 'fuelux/src/less/pillbox.less'
      '<%= dir.less %>/vendor/fuelux/preloader.less'            : 'fuelux/src/less/preloader.less'
      '<%= dir.less %>/vendor/fuelux/radio.less'                : 'fuelux/src/less/radio.less'
      '<%= dir.less %>/vendor/fuelux/scheduler.less'            : 'fuelux/src/less/scheduler.less'
      '<%= dir.less %>/vendor/fuelux/search.less'               : 'fuelux/src/less/search.less'
      '<%= dir.less %>/vendor/fuelux/select.less'               : 'fuelux/src/less/select.less'
      '<%= dir.less %>/vendor/fuelux/spinner.less'              : 'fuelux/src/less/spinner.less'
      '<%= dir.less %>/vendor/fuelux/tree.less'                 : 'fuelux/src/less/tree.less'
      '<%= dir.less %>/vendor/fuelux/variables.less'            : 'fuelux/src/less/variables.less'
      '<%= dir.less %>/vendor/fuelux/wizard.less'               : 'fuelux/src/less/wizard.less'
      # FuelUX javascript files
      '<%= dir.jsdev %>/fuelux/fuel-checkbox.js'                   : 'fuelux/src/checkbox.js'
      '<%= dir.jsdev %>/fuelux/fuel-combobox.js'                   : 'fuelux/src/combobox.js'
      '<%= dir.jsdev %>/fuelux/fuel-datagrid.js'                   : 'fuelux/src/datagrid.js'
      '<%= dir.jsdev %>/fuelux/fuel-datepicker.js'                 : 'fuelux/src/datepicker.js'
      '<%= dir.jsdev %>/fuelux/fuel-intelligent-dropdown.js'       : 'fuelux/src/intelligent-dropdown.js'
      '<%= dir.jsdev %>/fuelux/fuel-loader.js'                     : 'fuelux/src/loader.js'
      '<%= dir.jsdev %>/fuelux/fuel-pillbox.js'                    : 'fuelux/src/pillbox.js'
      '<%= dir.jsdev %>/fuelux/fuel-radio.js'                      : 'fuelux/src/radio.js'
      '<%= dir.jsdev %>/fuelux/fuel-scheduler.js'                  : 'fuelux/src/scheduler.js'
      '<%= dir.jsdev %>/fuelux/fuel-search.js'                     : 'fuelux/src/search.js'
      '<%= dir.jsdev %>/fuelux/fuel-select.js'                     : 'fuelux/src/select.js'
      '<%= dir.jsdev %>/fuelux/fuel-spinner.js'                    : 'fuelux/src/spinner.js'
      '<%= dir.jsdev %>/fuelux/fuel-tree.js'                       : 'fuelux/src/tree.js'
      '<%= dir.jsdev %>/fuelux/fuel-util.js'                       : 'fuelux/src/util.js'
      '<%= dir.jsdev %>/fuelux/fuel-wizard.js'                     : 'fuelux/src/wizard.js'
      # FuelUX fonts
      # '<%= dir.font %>/fuelux-preloader.svg'            : 'fuelux/src/fonts/fuelux-preloader.svg'
      # '<%= dir.font %>/fuelux-preloader.eot'            : 'fuelux/src/fonts/fuelux-preloader.eot'
      # '<%= dir.font %>/fuelux-preloader.ttf'            : 'fuelux/src/fonts/fuelux-preloader.ttf'
      # '<%= dir.font %>/fuelux-preloader.woff'           : 'fuelux/src/fonts/fuelux-preloader.woff'
      # FuelUX images
      # '<%= dir.img %>/fuelux/form.png'                   : 'fuelux/src/img/form.png'




