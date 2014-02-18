module.exports =
  filerev_assets:
    options:
      dest: '<%= dir.tmp %>/tree/hash.json'
      cwd:  'build/stage/assets/'
      prettyPrint: true
