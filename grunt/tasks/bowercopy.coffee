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
      '<%= dir.jsprod %>/jquery/jquery.js'    : 'jquery/jquery.js'

  jquery:
    options:
      runbower: false
    files:
      '<%= dir.jsplugins %>/fittext.js'   : 'FitText.js/jquery.fittext.js'
      '<%= dir.jsplugins %>/nod.js'       : 'jquery-nod/nod.js'
      '<%= dir.jsplugins %>/easing.js'    : 'jquery.easing/js/jquery.easing.js'
      '<%= dir.jsplugins %>/scrollup.js'  : 'scrollup/js/jquery.scrollUp.js'

  bootstrap:
    options:
      runbower: false
    files:
      '<%= dir.less %>/bootstrap'                    : 'bootstrap/less'
      # Jasny Bootstrap
      '<%= dir.less %>/bootstrap/button-labels.less' : 'bootstrap-jasny/less/button-labels.less'
      # Bootstrap Javascripts
      '<%= dir.jsprod %>/jquery/bootstrap'               : 'bootstrap/js'
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
      '<%= dir.jsplugins %>/flexslider.js'                : 'flexslider/jquery.flexslider.js'
      '<%= dir.font %>'                                   : 'flexslider/fonts'

  greensock:
    options:
      runbower: false
    files:
      # Core files
      '<%= dir.jsdev %>/views/vendor/greensock'         : 'greensock/src/uncompressed'
      # Easing
      '<%= dir.jsdev %>/views/vendor/greensock/easing'  : 'greensock/src/uncompressed/easing'
      # Plugins
      '<%= dir.jsdev %>/views/vendor/greensock/plugins' : 'greensock/src/uncompressed/plugins'
      # Utils
      '<%= dir.jsdev %>/views/vendor/greensock/utils'   : 'greensock/src/uncompressed/utils'

  fuelux:
    options:
      runbower: false
    files:
      # FuelUX less files
      '<%= dir.less %>/vendor/fuelux/checkbox.less'             : 'fuelux/dist/less/checkbox.less'
      '<%= dir.less %>/vendor/fuelux/combobox.less'             : 'fuelux/dist/less/combobox.less'
      '<%= dir.less %>/vendor/fuelux/datagrid.less'             : 'fuelux/dist/less/datagrid.less'
      '<%= dir.less %>/vendor/fuelux/datepicker.less'           : 'fuelux/dist/less/datepicker.less'
      '<%= dir.less %>/vendor/fuelux/intelligent-dropdown.less' : 'fuelux/dist/less/intelligent-dropdown.less'
      '<%= dir.less %>/vendor/fuelux/pillbox.less'              : 'fuelux/dist/less/pillbox.less'
      '<%= dir.less %>/vendor/fuelux/preloader.less'            : 'fuelux/dist/less/preloader.less'
      '<%= dir.less %>/vendor/fuelux/radio.less'                : 'fuelux/dist/less/radio.less'
      '<%= dir.less %>/vendor/fuelux/scheduler.less'            : 'fuelux/dist/less/scheduler.less'
      '<%= dir.less %>/vendor/fuelux/search.less'               : 'fuelux/dist/less/search.less'
      '<%= dir.less %>/vendor/fuelux/select.less'               : 'fuelux/dist/less/select.less'
      '<%= dir.less %>/vendor/fuelux/spinner.less'              : 'fuelux/dist/less/spinner.less'
      '<%= dir.less %>/vendor/fuelux/tree.less'                 : 'fuelux/dist/less/tree.less'
      '<%= dir.less %>/vendor/fuelux/variables.less'            : 'fuelux/dist/less/variables.less'
      '<%= dir.less %>/vendor/fuelux/wizard.less'               : 'fuelux/dist/less/wizard.less'
      # FuelUX javascript files
      '<%= dir.jsdev %>/jquery/fuelux/fuel-checkbox.js'                   : 'fuelux/dist/checkbox.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-combobox.js'                   : 'fuelux/dist/combobox.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-datagrid.js'                   : 'fuelux/dist/datagrid.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-datepicker.js'                 : 'fuelux/dist/datepicker.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-intelligent-dropdown.js'       : 'fuelux/dist/intelligent-dropdown.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-loader.js'                     : 'fuelux/dist/loader.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-pillbox.js'                    : 'fuelux/dist/pillbox.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-radio.js'                      : 'fuelux/dist/radio.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-scheduler.js'                  : 'fuelux/dist/scheduler.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-search.js'                     : 'fuelux/dist/search.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-select.js'                     : 'fuelux/dist/select.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-spinner.js'                    : 'fuelux/dist/spinner.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-tree.js'                       : 'fuelux/dist/tree.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-util.js'                       : 'fuelux/dist/util.js'
      '<%= dir.jsdev %>/jquery/fuelux/fuel-wizard.js'                     : 'fuelux/dist/wizard.js'
      # FuelUX fonts
      # '<%= dir.font %>/fuelux-preloader.svg'            : 'fuelux/dist/fonts/fuelux-preloader.svg'
      # '<%= dir.font %>/fuelux-preloader.eot'            : 'fuelux/dist/fonts/fuelux-preloader.eot'
      # '<%= dir.font %>/fuelux-preloader.ttf'            : 'fuelux/dist/fonts/fuelux-preloader.ttf'
      # '<%= dir.font %>/fuelux-preloader.woff'           : 'fuelux/dist/fonts/fuelux-preloader.woff'
      # FuelUX images
      # '<%= dir.img %>/fuelux/form.png'                   : 'fuelux/dist/img/form.png'
