var _         = require('lodash');
var _str      = require('underscore.string');
var grunt     = require('grunt');
var matter    = require('gray-matter');
var minimatch = require('minimatch');
var file      = require('fs-utils');
var path      = require('path');

module.exports.register = function(Handlebars, options, params) {
  var assemble = params.assemble;
  var helpers = {};

  function debug(what,where){
    // console.log(what,where);
  }

  helpers.log = function (what, where) {
    console.log(what, where);
  }

  /**
   * Create relative path from here to target path
   * usage: {{relPath CurrentDestination TargetDestion}}
   *
   * @param  {[string || object]} from [Current page destination]
   * @param  {[string || object]} to   [Target page destination]
   * @return {[string]}      [Relative path between current page and target ]
   */
  helpers.relPath = function (from, to) {
    var relativePath;
    relativePath = path.relative(path.dirname(from), path.dirname(to));

    return path.join(relativePath, path.basename(to));
  };

  helpers.process = function (options) {
    var source = options.fn(this);
    var template = Handlebars.compile(source);
    var context = _.extend({}, this, options.hash);
    return new Handlebars.SafeString(template(context));
  };

  // condensed version of handlebars-helper-aggregate
  // https://github.com/helpers/handlebars-helper-aggregate
  // inspired by handlebars-helpers-compose
  helpers.composite = function (src, ctx, opts) {
    var pageObj, metadata, content, context, template;

    opts = Array.prototype.pop.call(arguments);
    src = options.compose.cwd + src;
    ctx = ctx || {};
    pageObj = matter.read(src) || {};
    metadata = pageObj.context || {};
    content = pageObj.content;
    context = _.extend({}, this, metadata, opts.hash, ctx);
    template = Handlebars.compile(content);

    return new Handlebars.SafeString(template(context));
  };

  // condensed version of handlebars-helper-compose
  // https://github.com/helpers/handlebars-helper-compose
  // inspired by handlebars-helpers-compose
  helpers.arrange = function (src, ctx, opts) {
    var pageObj, metadata, content, context, data, template, output;
    // var i = 0;
    opts = Array.prototype.pop.call(arguments);
    src = options.compose.cwd + src;
    ctx = ctx || {};
    pageObj = matter.read(src) || {};
    metadata = pageObj.context || {};
    content = pageObj.content || '';
    context = _.extend({}, this, metadata, opts.hash, ctx);
    if (context.data) {
      data = Handlebars.createFrame(context.data);
    }

    data.title    = context.title;

    template = Handlebars.compile(content);
    data.content = template(context);

    output = opts.fn(context, {data: data});

    return new Handlebars.SafeString(output);
  }

  // condensed version of handlebars-helper-partial
  // https://github.com/helpers/handlebars-helper-partial
  helpers.partial = function (src, ctx, opts) {
    var filepath, pageObj, metadata, context, template, fn;

    opts = Array.prototype.pop.call(arguments);

    if(!Array.isArray(assemble.partials)) {
      assemble.partials = [assemble.partials];
    }

    filepath = _.first(_.filter(assemble.partials, function(fp) {
      return path.basename(fp, path.extname(fp)) === src;
    }));

    ctx = ctx || {};
    pageObj = matter.read(filepath) || {};
    // metadata = matter.read(filepath).context;
    metadata = pageObj.context || {};
    context = _.extend({}, this, metadata, opts.hash, ctx);
    template = Handlebars.partials[src];

    // check to see if template has been compiled.
    // if so, use the template instead of recompiling.
    if (!_.isFunction(template)) {
      fn = Handlebars.compile(template);
    } else {
      fn = template;
    }

    return new Handlebars.SafeString(fn(context));
  };

  // {{include "template-partial" parentcontext=.. town=../town}}
  helpers.include = function(src, ctx, options) {
    var partial, template, context;

    ctx = ctx || {};
    options = Array.prototype.pop.call(arguments);
    partial = Handlebars.partials[String(src)];

    // check to see if template has been compiled.
    // if so, use the template instead of recompiling.
    if (!_.isFunction(partial)) {
      template = Handlebars.compile(partial);
    } else {
      template = partial;
    }
    // Added above section for check instead of below commented out section.
    // partial should be string already.
    // if ( typeof partial === "string") {
    //   template = Handlebars.compile(partial);
    // }
    context = _.extend({}, this, options.hash, ctx);
    return new Handlebars.SafeString(template(context));
  };

  helpers.inline = function (file) {
    file = options.compose.cwd + file;
    var inline = matter.read(file);
    return new Handlebars.SafeString(inline.content);
  }

  for(var index in helpers){
    Handlebars.registerHelper(index, helpers[index]);
  }
  return this;
};
