/**
 * Handlebars Helper: {{post}}
 * https://github.com/helpers/handlebars-helper-post
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

// Node.js
var path = require('path');
var fs   = require('fs');

// node_modules
var matter = require('gray-matter');
var hljs   = require('highlight.js');
var marked = require('marked');
var _      = require('lodash');


// Export helpers
module.exports.register = function (Handlebars, options, params) {

  'use strict';

  var opts     = options || {};
  var grunt    = params.grunt;
  var assemble = params.assemble;

  /**
   * {{post}}
   * Render a post, or list of posts.
   * @param  {[type]} src     [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  Handlebars.registerHelper('post', function (src, options, compare_fn) {

    options = options || {};
    options.hash = options.hash || {};

    var defaults = {
      cwd: '',
      convert: 'after',
      sortBy: 'basename',
      sortOrder: 'asc',
      sep: '<!-- Post -->\n',
      glob: {}
    };

    marked.setOptions(_.extend({}, markedOptions, opts.markdown));

    // Extend default options with options from assemble.options.posts
    // and the helper's options hash.
    options = _.extend({}, defaults, opts.posts, options, options.hash);
    grunt.verbose.ok("options:".yellow, options);

    /**
     * Accepts two objects (a, b),
     * @param  {Object} a
     * @param  {Object} b
     * @return {Number} returns 1 if (a >= b), otherwise -1
     */
    var compareFn = function (a, b) {
      // Sort by a property in the context
      a = a.context[options.sortBy];
      b = b.context[options.sortBy];

      var result = 0;
      if (a === b) {
        result = 0;
      } else if (a > b) {
        result = 1;
      } else {
        result = -1;
      }
      // Sort order
      if(options.sortOrder === 'desc'.toLowerCase()) {
        return result * -1;
      }
      return result;
    };

    // Join path to 'cwd' if defined in the helper's options
    var cwd = path.join.bind(null, options.cwd);
    grunt.verbose.ok("options:".yellow, options);

    // Sorting
    var index = 0;
    compare_fn = ((compareFn || compare_fn) || options.compare);

    var html = grunt.file.expand(options.glob, cwd(src)).map(function (filepath) {
      // var localContext = yfm.extract(filepath).context;
      var context = matter.read(filepath).context;
      // var context = processContext(grunt, localContext);
      var content = matter.read(filepath).content;

      index += 1;
      return {
        index: index,
        path: filepath,
        context: _.extend(grunt.config.data ,context),
        content: content
      };
    }).sort(compare_fn).map(function (obj) {

      obj.context.basename = path.basename(obj.path, path.extname(obj.path));
      grunt.verbose.ok("obj.context:".yellow, obj.context);

      if(options.convert === 'before') {
        obj.content = marked(obj.content); // .replace(/&#39;/g, '\'');
      } else {
        obj.content = obj.content;
      }

      // Compile any Handlebars templates in the content.
      var output = Handlebars.compile(obj.content)(obj.context);

      // If "convert: before" is defined, then this is already HTML,
      // so return the output. Otherwise it's still markdown, so
      // convert it to HTML first, then return the result.
      if(options.convert === 'before' || options.convert === false) {
        return output;
      } else {
        return marked(output);
      }

    }).join(options.sep);
    return new Handlebars.SafeString(html);
  });


  // Highlight.js
  var markedOptions = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    silent: false,
    smartLists: true,
    langPrefix: 'lang-',
    highlight: function (code, lang) {
      var res = void 0;
      if (!lang) {
        return code;
      }
      if(lang === 'js') {
        lang = 'javascript';
      }
      try {
        return res = hljs.highlight(lang, code).value;
      } finally {
        return res || code;
      }
    }
  };


  /**
   * Process templates using grunt config data and context
   * @param  {Object} grunt   Pass in Grunt to get config.data
   * @param  {Object} context Pass in a context object
   * @return {Object}         Return context with processed config.data
   */
  var processContext = function(grunt, context) {
    grunt.config.data = _.defaults(context || {}, _.cloneDeep(grunt.config.data));
    return grunt.config.process(grunt.config.data);
  };

  /**
   * The path to the current working directory defined in the options.
   * @param  {Function} filepath  Calculated path to the cwd.
   * @return {String}             The full path to the specified file.
   * @example: cwd('foo.md') => content/posts/foo.md
   */
  var cwd = function(filepath) {
    return path.join.bind(null, __dirname, '')(filepath).replace(/\\/, '/');
  };
};
