#
# * assemble-manifest
# * https://github.com/assemble/assemble-manifest
# *
# * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors.
# * Licensed under the MIT license.
#
module.exports = (grunt) ->

  # External libs.
  fs = require('graceful-fs')
  path = require('path')
  util = require('util')
  to = require('to')
  _ = require('lodash') # lodash

  # Internal lib
  _.mixin require('./lib/mixins').init(grunt)
  grunt.registerMultiTask 'manifest', 'Generates JSON or YAML manifests from given src files.', ->
    done = @async()
    pkg = {}

    # Default configuration options.
    options = @options(

      # Misc
      manifestrc: []
      debug: false

      # Formatting
      format: 'json'
      sorted: false
      indent: 2

      # Collections
      collections: {}

      # Metadata
      metadata: []
      exclude: []
      include: []
    )

    # Defaults
    # name: pkg.name,
    # description: pkg.description,
    # version: pkg.version,
    # repo: 'assemble/assemble',
    # dependencies: pkg.dependencies,
    # devDependencies: pkg.devDependencies,
    # peerDependencies: pkg.peerDependencies,
    # optionalDependencies: pkg.optionalDependencies

    ###
    Default objects and properties excluded from output.
    When debug is set to "true" these are shown.
    ###
    defaultOmissions = _.defaults([
      'collections'
      'debug'
      'exclude'
      'format'
      'include'
      'indent'
      'manifestrc'
      'metadata'
      'sorted'
    ])

    # Supply metadata from given file.
    _(options).merge _.readOptionalJSON(options.metadata)

    # Use .manifestrc file if one has been specified.
    _(options).merge _.readOptionalJSON(options.manifestrc)

    # Optional array of objs/props to exclude from output.
    options.exclude = _.mergeOptionsArrays(@target, 'exclude')
    options.include = _.mergeOptionsArrays(@target, 'include')

    # Default "collections"
    defaultCollections = main: _.union(options.main or [], [])

    # Build collection extension map
    extCollectionMap = {}
    if options.collections
      _.forOwn options.collections, (value, key) ->
        value = [value]  unless Array.isArray(value)
        _.each value, (ext) ->
          ext = '.' + ext  if ext.indexOf('.') isnt 0
          extCollectionMap[ext] = []  unless extCollectionMap[ext]
          extCollectionMap[ext].push key
          return


        # Add collection to defaultCollections
        defaultCollections[key] = _.union(options[key] or [], [])  unless defaultCollections[key]
        return

    @files.forEach (fp) ->
      dest = fp.dest
      collections = {}
      _.forOwn defaultCollections, (value, key) ->
        collections[key] = []
        return

      fp.src.forEach (src) ->
        switchCollection = (type, callback) ->
          grunt.verbose.writeln 'Adding ' + path.basename(src).red + ' to ' + collections[type].red + ' collection'
          addFileToCollection collections[type], src
        ext = path.extname(src)
        _.each extCollectionMap[ext], (colName) ->
          switchCollection colName
          return

        addFileToCollection collections.main, src
        return

      _.forOwn collections, (value, key) ->
        options[key] = _.union(collections[key], defaultCollections[key])
        return


      # grunt.verbose.writeln(util.inspect(this.files, 10, null));

      ###
      Debug: boolean. Shows all properies and objects in generated files,
      including those "excluded" by default or in the task
      Default: 'false'
      ###
      optionalOptions = undefined
      filteredOptions = _.omit(options, options.exclude, defaultOmissions)
      if options.debug is true
        optionalOptions = options
      else
        optionalOptions = filteredOptions

      ###
      Sorted: boolean. Sort objects and properties alphabetically
      Default: false
      ###
      finalOptions = (if options.sorted then _(optionalOptions).sortObject() else optionalOptions)

      ###
      Format: Generate files in either JSON or YAML format
      Default: 'json'
      ###
      stringifyFile = (opts, values, indent) ->
        YAML = to.format.yaml
        outputFormat = ((options.format).toLowerCase())
        if outputFormat is 'yaml' or outputFormat is 'yml'
          stringifyFile = YAML.stringify(opts, values, indent)
        else
          stringifyFile = JSON.stringify(opts, values, indent)
        stringifyFile


      # Generate files
      addCollection = stringifyFile(finalOptions, null, options.indent)
      grunt.file.write dest, addCollection
      grunt.log.write 'Creating "' + dest.magenta + '"...'
      grunt.log.ok()
      return


    # Print a success message.
    done()
    return

  # end of task
  addFileToCollection = (collection, file) ->
    collection.push file
    return

  return
