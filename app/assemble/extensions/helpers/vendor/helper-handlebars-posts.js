/**
 * Handlebars Helper: {{compose}}
 * https://github.com/helpers/handlebars-helper-compose
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * https://github.com/jonschlinkert
 * Licensed under the MIT license.
 */

// Node.js modules
var path = require('path');

// node_modules
var file = require('fs-utils');
var glob = require('globule');
var matter = require('gray-matter');
var _str = require('underscore.string');
var _ = require('lodash');


module.exports.register = function (Handlebars, options, params) {

  'use strict';

  var grunt = params.grunt;
  var opts = options || {};
  opts.posts = opts.posts || {};

  Handlebars.registerHelper('posts', function(source, context, options) {
    options = _.extend({}, context, options);
    options.hash = options.hash || {};

    // Default options
    options = _.extend({
      glob: {},
      sep: '\n',
    }, options, opts.posts, options.hash);

    var cwd = path.join.bind(null, options.cwd || '');
    var i = 0;
    var result = '';
    var data;

    // if (_.isFunction(options)) {
    //   options = options.call(this);
    // }

    /**
     * Accepts two objects (a, b),
     * @param  {Object} a
     * @param  {Object} b
     * @return {Number} returns 1 if (a >= b), otherwise -1
     */
    var compareFn = function (a, b) {
      var opts = _.extend({sortOrder: 'asc', sortBy: 'index'}, options);

      a = a.data[opts.sortBy];
      b = b.data[opts.sortBy];

      var result = 0;
      result = a > b ? 1 : a < b ? -1 : 0;
      if(opts.sortOrder.toLowerCase() === 'desc') {
        return result * -1;
      }
      return result;
    };

    // var compareFn = function (a, b) {
    //   // Sort by a property in the context
    //   a = a.data[options.sortBy];
    //   b = b.data[options.sortBy];

    //   var result = 0;
    //   if (a === b) {
    //     result = 0;
    //   } else if (a > b) {
    //     result = 1;
    //   } else {
    //     result = -1;
    //   }
    //   // Sort order
    //   if(options.sortOrder === 'desc'.toLowerCase()) {
    //     return result * -1;
    //   }
    //   return result;
    // };


    var patterns = source;
    if(!Array.isArray(patterns)) {
       patterns = [patterns];
    }

    patterns.forEach(function (pattern) {
      var files = glob.find(cwd(pattern), options.glob);

      if(opts.filter) {
        files = opts.filter(files);
      }

      var src = files.map(function (filepath) {
        // console.log('>> Inserting:', filepath);

        i += 1;

        // Process context, using YAML front-matter, grunt config and Assemble options.data
        var content = matter.read(filepath).content || {};
        var metadata = matter.read(filepath).context || {};

        // `context`           = the given context (second parameter)
        // `metadata`          = YAML front matter of the partial
        // `opts.data[name]`   = JSON/YAML data file defined in Assemble options.data
        //                       with a basename matching the name of the partial, e.g
        //                       {{include 'foo'}} => foo.json
        // `this`              = Typically either YAML front matter of the "inheriting" page,
        //                       layout, block expression, or "parent" helper wrapping this helper
        // `opts`              = Custom properties defined in Assemble options
        // `grunt.config.data` = Data from grunt.config.data
        //                       (e.g. pkg: grunt.file.readJSON('package.json'))

        var ctx = _.extend({}, grunt.config.data, opts, this, opts.data[filepath], metadata, context);
        // ctx = grunt.config.process(ctx);

        if (ctx.data) {
          data = Handlebars.createFrame(ctx.data);
        }

        data.title    = ctx.title;
        data.filepath = filepath;
        data.basename = file.basename(filepath);
        data.filename = file.filename(filepath);
        data.pagename = file.filename(filepath);
        data.slug     = _str.slugify(data.basename);
        data.id       = data.slug;

        data.index  = i;
        data.number = i + 1;
        data.first  = (i === 0);
        data.prev   = i - 1;
        data.next   = i + 1;
        data.last   = (i === (files.length - 1));

        var glob_fn = Handlebars.compile(content);
        data.content = glob_fn(ctx).replace(/^\s+/, '');

        var output = options.fn(ctx, {data: data});

        return {
          data: data,
          content: output
        };
      }).sort(options.compare || compareFn).map(function (obj) {
        // Return content from src files
        return obj.content;
      }).join(options.sep);

      result += src;
    });
    return new Handlebars.SafeString(result);
  });
};
