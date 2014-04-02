module.exports =
  toc:
    options:
      stdout: true
    command: [
        'md-toc-filter README.md > README2.md',
        'mv README2.md README.md'
    ].join('&&')

  # This is a test. Not ready for production in any shape or form.
  changelog:
    options:
      stdout: true
    command: 'changelog akileez/HTML5-Handlebars -m all > CHANGELOG.md'

  # replaces grunt-rename
  # Moving js files from development to production. Per file basis.
  jsmove:
    options:
      stdout: true
      stderr: true
      execOptions:
        cwd: 'app/scripts/js'
    command: (dir, file) ->
      src = "development/"
      dest = "production/"
      "mv " + src + dir + "/" + file + " " + dest + dir + "/" + file

  # Radical! gzip files in distribution directory
  # replaces grunt-compress
  compress:
    options:
      stdout: true
      stderr: true
      execOptions:
        cwd: 'build/dist'
    command: "/usr/bin/gzip -nkv **/*.{html,css,js}"

  # Using script to call "/usr/bin/gzip -nkv **/*.{html,css,js}" in order
  # to exploit zsh globbing. grunt-shell chokes on this.
  # gzip using Apple version opposed to gnu
  zipit:
    options:
      stdout: true
      stderr: true
      execOptions:
        cwd: 'build/dist'
    command: "zipit"

  # HTML-Inspector using node and phantomjs via command line
  # replaces grunt-html-inspector
  # usage: grunt shell:hi:index
  # usage: htmlinspector path/to/file/index.html
  hi:
    options:
      stdout: true
    command:  (src) ->
      'htmlinspector <%= dir.stage %>/' + src + '.html';

  # eslint using command line
  # replaces grunt-eslint and grunt-stylish
  # usage: g shell:eslint:html:code
  # --config <%= dir.grunt %>/config/eslint.json
  # 'eslint  <%= dir.helpers %>/' + dir + '/helper-' + src + '.js';
  eslint:
    options:
      stdout: true
      stderr: true
    command:  (dir, src) ->
      'lint ' + dir + ' ' + src;

  # csscomb using command line
  # replaces grunt-csscomb and grunt-recess
  csscomb:
    options:
      stdout: true
      stderr: true
    command:  (src) ->
      'csscomb -v -c grunt/config/csscomb.json <%= dir.css %>/' + src;

  combtheme:
    options:
      stdout: true
      stderr: true
    command: 'csscomb -v -c grunt/config/csscomb.json <%= dir.css %>/_theme.css'

  combvendor:
    options:
      stdout: true
      stderr: true
    command: 'csscomb -v -c grunt/config/csscomb.json <%= dir.css %>/_vendor.css'

  combboot:
    options:
      stdout: true
      stderr: true
    command: 'csscomb -v -c grunt/config/csscomb.json <%= dir.css %>/_bs*.css'

  combbuild:
    options:
      stdout: true
      stderr: true
    command: 'csscomb -v -c grunt/config/csscomb.json <%= dir.css %>/styles.css'

  uncss:
    options:
      stdout: true
      stderr: true
    command: 'uncss -s <%= css %>/styles.css <%= build %>/**/*.html > <%= css %>/clean.css'

  # Rsync - ssh to inhouse development machines for testing web pages
  # replaces grunt-rsync
  deploystage:
    options:
      stdout: true
    command: 'rsync <%= dir.dist %> <%= opt.rsync.stage.host %>:<%= opt.rsync.stage.dest %>
              --rsh ssh
              --recursive
              --delete
              --verbose
              --delete-excluded'

  deploydist:
    options:
      stdout: true
    command: 'rsync <%= dir.dist %> <%= opt.rsync.dist.host %>:<%= opt.rsync.dist.dest %>
              --rsh ssh
              --recursive
              --delete
              --verbose
              --delete-excluded'

  deploylocal:
    options:
      stdout: true
    command: 'rsync <%= dir.dist %> <%= opt.rsync.local.dest %>
              --recursive
              --delete
              --verbose
              --delete-excluded'

  # Rsync - folder syncs between dev env and build destinations
  # replaces grunt-sync
  syncjs:
    options:
      stdout: true
    command: 'rsync <%= dir.js %>/ <%= dir.build %>/assets/js
              --recursive
              --delete-before
              --verbose
              --update
              --prune-empty-dirs
              --exclude=".DS_Store"'

  synccss:
    options:
      stdout: true
    command: 'rsync <%= dir.css %>/ <%= dir.build %>/assets/css
              --recursive
              --delete-before
              --verbose
              --update
              --prune-empty-dirs
              --exclude=".DS_Store"'

  syncfonts:
    options:
      stdout: true
    command: 'rsync <%= dir.font %>/ <%= dir.build %>/assets/fonts
              --recursive
              --delete-before
              --verbose
              --update
              --prune-empty-dirs
              --exclude=".DS_Store"'

  syncimg:
    options:
      stdout: true
    command: 'rsync <%= dir.img %>/ <%= dir.build %>/assets/img
              --recursive
              --delete-before
              --verbose
              --update
              --prune-empty-dirs
              --exclude=".DS_Store"'

  syncico:
    options:
      stdout: true
    command: 'rsync <%= dir.favicon %>/ <%= dir.build %>/assets/ico
              --recursive
              --delete-before
              --verbose
              --update
              --prune-empty-dirs
              --exclude=".DS_Store"'

  syncpdf:
    options:
      stdout: true
    command: 'rsync <%= dir.pdf %>/ <%= dir.build %>/assets/pdf
              --recursive
              --delete-before
              --verbose
              --update
              --prune-empty-dirs
              --exclude=".DS_Store"'

  syncdata:
    options:
      stdout: true
    command: 'rsync <%= dir.data %>/ <%= dir.build %>/assets/data
              --recursive
              --delete-before
              --verbose
              --update
              --prune-empty-dirs
              --exclude=".DS_Store"'

  syncphp:
    options:
      stdout: true
    command: 'rsync <%= dir.php %>/ <%= dir.build %>/assets/php
              --recursive
              --delete-before
              --verbose
              --update
              --prune-empty-dirs
              --exclude=".DS_Store"'