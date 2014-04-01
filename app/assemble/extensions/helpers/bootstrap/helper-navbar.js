var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  helpers.navbody = function (navid,  body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var element = createElement('div', true, extend({class: 'navbar-collapse collapse ' + navid}), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.navhead = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var element = createElement('div', true, extend({class: 'navbar-header'}), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.navbar = function (kind, modifier, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    if (typeof modifier === 'object') {modifier = '';}
    else {options.hash.class = modifier;}

    var navbar;
    var container = createElement('div', true, extend({class: 'container'}), body);

    switch (kind) {
      case 'default' : navbar = createElement('div', true, extend({class: 'navbar navbar-default'}), container); break;
      case 'fixed'   : navbar = createElement('div', true, extend({class: 'navbar navbar-default navbar-fixed-top'}), container); break;
      case 'static'  : navbar = createElement('div', true, extend({class: 'navbar navbar-default navbar-static-top'}), container); break;
      case 'inverse' : navbar = createElement('div', true, extend({class: 'navbar navbar-inverse'}), container); break;
    }

    var element = createElement('nav', true, extend({role: 'navigation'}, options.hash), navbar);
    return options.fn ? element : new Handlebars.SafeString(element);

  };

  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};