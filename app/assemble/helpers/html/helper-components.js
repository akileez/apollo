var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  helpers.flexslider = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var element, list;

    list = createElement('ul', true, extend({class: 'slides list-unstyled'}), body);
    element = createElement('div', true, extend({class: options.hash.class}), list);

    return element;
  };

  helpers.sidenav = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var top = options.hash.top || '625';
    var bottom = options.hash.bottom || '625';

    var list = createElement('ul', true, extend({
      class: 'nav bs-sidenav'
    }), body);
    var element = createElement('div', true, extend({
      id: 'bsSidebar',
      class: 'bs-sidebar hidden-print',
      'data-spy': 'affix',
      'data-offset-top': top,
      'data-offset-bottom': bottom
    }, options.hash), list);
    return element;
  };

  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};
