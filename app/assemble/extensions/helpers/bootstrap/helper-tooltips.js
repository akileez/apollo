var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  helpers.tooltip = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    // Defaults
    var trigger = options.hash.trigger || 'hover';
    var placement = options.hash.placement || 'top';
    var title = options.hash.title || 'I am a tooltip';
    var attr = {};

    if (options.hash.class) {
      attr.class = options.hash.class;
    }
    if (options.hash.container) {
      attr['data-container']  = options.hash.container ;
    }

    return new Handlebars.SafeString(createElement('a', true, extend({
      href: '#',
      'data-toggle': 'tooltip',
      'data-trigger': trigger,
      'data-placement': placement,
      'data-title': title
    }, attr), body));
  };

  helpers.popover = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    // Defaults
    var trigger = options.hash.trigger || 'hover';
    var placement = options.hash.placement || 'right';
    var title = options.hash.title || 'Hello World';
    var content = options.hash.content || 'I am a popover';
    var attr = {};

    if (options.hash.class) {
      attr.class = options.hash.class;
    }
    if (options.hash.container) {
      attr['data-container'] = options.hash.container ;
    }

    return new Handlebars.SafeString(createElement('a', true, extend({
      href: '#',
      'data-toggle': 'popover',
      'data-trigger': trigger,
      'data-placement': placement,
      'data-title': title,
      'data-content': content
    }, attr), body));
  };

  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};