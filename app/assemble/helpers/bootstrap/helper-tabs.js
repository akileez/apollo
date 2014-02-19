  //  88888888888       888                      d88P 8888888b.  d8b 888 888
  //      888           888                     d88P  888   Y88b Y8P 888 888
  //      888           888                    d88P   888    888     888 888
  //      888   8888b.  88888b.  .d8888b      d88P    888   d88P 888 888 888 .d8888b
  //      888      "88b 888 "88b 88K         d88P     8888888P"  888 888 888 88K
  //      888  .d888888 888  888 "Y8888b.   d88P      888        888 888 888 "Y8888b.
  //      888  888  888 888 d88P      X88  d88P       888        888 888 888      X88
  //      888  "Y888888 88888P"   88888P' d88P        888        888 888 888  88888P'
  //
  //
  //
var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  helpers.tabs = function (kind, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var element, tag; var attr = {};
    switch (kind) {
      case 'above'       : tag = 'div'; attr.class = 'tabbable tabs-above'; break;
      case 'below'       : tag = 'div'; attr.class = 'tabbable tabs-below'; break;
      case 'right'       : tag = 'div'; attr.class = 'tabbable tabs-right'; break;
      case 'left'        : tag = 'div'; attr.class = 'tabbable tabs-left'; break;
      case 'content'     : tag = 'div'; attr.class = 'tab-content'; break;
      case 'pane active' : tag = 'div'; attr.class = 'tab-pane active'; break;
      case 'pane'        : tag = 'div'; attr.class = 'tab-pane'; break;
      case 'ul'          : tag = 'ul';  attr.class = 'nav nav-tabs'; break;
      default            : tag = 'div'; break;
    }
    element = createElement(tag, true, extend(attr, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.pills = function (kind, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var element;
    switch (kind) {
      case 'above'       : element = createElement('div', true, extend({class: 'tabbable pills-above'}, options.hash), body); break;
      case 'below'       : element = createElement('div', true, extend({class: 'tabbable pills-below'}, options.hash), body); break;
      case 'right'       : element = createElement('div', true, extend({class: 'tabbable pills-right'}, options.hash), body); break;
      case 'left'        : element = createElement('div', true, extend({class: 'tabbable pills-left'}, options.hash), body); break;
      case 'content'     : element = createElement('div', true, extend({class: 'pill-content'}, options.hash), body); break;
      case 'pane active' : element = createElement('div', true, extend({class: 'pill-pane active'}, options.hash), body); break;
      case 'pane'        : element = createElement('div', true, extend({class: 'pill-pane'}, options.hash), body); break;
      default            : element = createElement('div', true, extend({}, options.hash), body);
    }
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};