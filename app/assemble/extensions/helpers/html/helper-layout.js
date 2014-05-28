var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  function sectionContainer (tag, body, options) {
    var element;

    element = createElement(tag, true, extend({}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  function makecolumn (col, size, body, options) {
    var element, push, pull, offset;

    if (options.hash.push) {
      push = options.hash.push;
      element = createElement(div, true, extend({
        class: 'col-' + size + '-' + col + ' col-' + size + '-push-' + push
      }, options.hash), body);
      return options.fn ? element : new Handlebars.SafeString(element);
    }

    if (options.hash.pull) {
      pull = options.hash.pull;
      element = createElement(div, true, extend({
        class: 'col-' + size + '-' + col + ' col-' + size + '-pull-' + pull
      }, options.hash), body);
      return options.fn ? element : new Handlebars.SafeString(element);
    }

    if (options.hash.offset) {
      offset = options.hash.offset;
      element = createElement(div, true, extend({
        class: 'col-' + size + '-' + col + ' col-' + size + '-offset-' + offset
      }, options.hash), body);
      return options.fn ? element : new Handlebars.SafeString(element);
    }

    element = createElement(div, true, extend({class: 'col-' + size + '-' + col}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.section = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return sectionContainer('section', body, options);
  };

  helpers.article = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return sectionContainer('article', body, options);
  };

  helpers.aside = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return sectionContainer('aside', body, options);
  };

  helpers.header = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return sectionContainer('header', body, options);
  };

  helpers.footer = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return sectionContainer('footer', body, options);
  };

  helpers.div = function (body, options) {
    if (typeof body === 'object') {
      body = '';
    }
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return sectionContainer('div', body, options);
  };

  helpers.container = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var element = createElement('div', true, extend({class: 'container'}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.row = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    var element = createElement('div', true, extend({class: 'row'}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.column = function (columns, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    var element = createElement('div', true, extend({class: 'col-' + columns}, options.hash), body);

    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.col1 = function (size, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return makecolumn(1, size, body, options);
  };

  helpers.col2 = function (size, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return makecolumn(2, size, body, options);
  };

  helpers.col3 = function (size, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return makecolumn(3, size, body, options);
  };

  helpers.col4 = function (size, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return makecolumn(4, size, body, options);
  };

  helpers.col5 = function (size, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return makecolumn(5, size, body, options);
  };

  helpers.col6 = function (size, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return makecolumn(6, size, body, options);
  };

  helpers.col7 = function (size, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return makecolumn(7, size, body, options);
  };

  helpers.col8 = function (size, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return makecolumn(8, size, body, options);
  };

  helpers.col9 = function (size, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return makecolumn(9, size, body, options);
  };

  helpers.col10 = function (size, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return makecolumn(10, size, body, options);
  };

  helpers.col11 = function (size, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return makecolumn(11, size, body, options);
  };

  helpers.col12 = function (size, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return makecolumn(12, size, body, options);
  };

  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};