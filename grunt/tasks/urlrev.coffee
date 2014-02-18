module.exports =

  options:
    assets: '<%= dir.tmp %>/tree/hash.json'

  stage:
    src: ['build/stage/assets/css/*.css',
          'build/stage/**/*.html'
    ]
