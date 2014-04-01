var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  function tablegen (tag, body, options) {
    var element;
    element = createElement(tag, true, extend({}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  }

  helpers.table = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return tablegen('table', body, options);
  };

  helpers.thead = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return tablegen('thead', body, options);
  };

  helpers.tbody = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return tablegen('tbody', body, options);
  };

  helpers.tr = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return tablegen('tr', body, options);
  };

  helpers.th = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return tablegen('th', body, options);
  };

  helpers.td = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return tablegen('td', body, options);
  };

  for(var index in helpers){
    Handlebars.registerHelper(index, helpers[index]);
  }

  return this;

};