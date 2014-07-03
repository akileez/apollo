moment = require('moment')
glob   = require('glob')
_      = require('lodash')

module.exports = (grunt) ->
  grunt.log.write '%s - Loading grunt tasks...'.cyan, moment()

  require('grunt-timer').init grunt
  require('load-grunt-tasks') grunt,
    pattern: [
      'grunt-*'
      'assemble'
      '!grunt-timer'
    ],
    scope: [
      'devDependencies'
    ]

  grunt.log.writeln 'finished'.green
  grunt.log.write '%s - Loading custom tasks...'.cyan, moment()
  grunt.loadTasks   'grunt/custom'        # Loads aliases and custom tasks
  grunt.loadTasks   'grunt/environment'   # Loads configs for environment changes
  grunt.log.writeln 'finished'.green

  config =
    pkg  : grunt.file.readJSON('package.json')
    dir  : grunt.file.readJSON('grunt/config/paths.json')
    env  : process.env

  loadConfig = (path) ->
    object = {}
    key = undefined
    glob.sync('*',
      cwd: path
      ).forEach (option) ->
        key = option.replace(/\.coffee$/, '')
        object[key] = require(path + option)

      object

  _.merge config, loadConfig('./grunt/tasks/')


  grunt.initConfig config
