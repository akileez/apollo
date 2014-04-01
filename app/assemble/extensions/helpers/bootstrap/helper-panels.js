  //  8888888b.                            888
  //  888   Y88b                           888
  //  888    888                           888
  //  888   d88P 8888b.  88888b.   .d88b.  888 .d8888b
  //  8888888P"     "88b 888 "88b d8P  Y8b 888 88K
  //  888       .d888888 888  888 88888888 888 "Y8888b.
  //  888       888  888 888  888 Y8b.     888      X88
  //  888       "Y888888 888  888  "Y8888  888  88888P'
  //
  //
  //
var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';

  var helpers = {};

  helpers.panel = function (kind, body ,options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var element, tag; var attr = {};
    switch (kind) {
      case 'head'     : tag = 'div'; attr.class = 'panel-heading'; break;
      case 'body'     : tag = 'div'; attr.class = 'panel-body'; break;
      case 'foot'     : tag = 'div'; attr.class = 'panel-footer'; break;
      case 'primary'  : tag = 'div'; attr.class = 'panel panel-primary'; break;
      case 'success'  : tag = 'div'; attr.class = 'panel panel-success'; break;
      case 'info'     : tag = 'div'; attr.class = 'panel panel-info'; break;
      case 'warning'  : tag = 'div'; attr.class = 'panel panel-warning'; break;
      case 'danger'   : tag = 'div'; attr.class = 'panel panel-danger'; break;
      case 'inverse'  : tag = 'div'; attr.class = 'panel panel-inverse'; break;
      case 'special'  : tag = 'div'; attr.class = 'panel panel-special'; break;
      case 'disabled' : tag = 'div'; attr.class = 'panel panel-disabled'; break;
      default         : tag = 'div'; attr.class = 'panel panel-default';
    }
    element = createElement(tag, true, extend(attr, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.accordion = function (kind, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    switch (kind) {
      case 'body' :
                    var element = createElement('div', true, extend({
                      class: 'panel-body'
                    }), body);
                    var collapse = createElement('div', true, extend({
                      class: 'panel-collapse collapse',
                      id: options.hash.child
                    }), element);

                    return options.fn ? collapse : new Handlebars.SafeString(collapse);
                    break;

      case 'head' :
                    var accToggle = createElement('a', true, extend({
                      class: 'accordion-toggle',
                      'data-parent': '#' + options.hash.parent,
                      'data-toggle': 'collapse',
                      href: '#' + options.hash.child
                    }), body);

                    var accTitle = createElement('div', true, extend({
                      class: 'panel-title'
                    }), accToggle);

                    var accHeading = createElement('div', true, extend({
                      class: 'panel-heading'
                    }), accTitle);

                    return options.fn ? accHeading : new Handlebars.SafeString(accHeading);
                    break;

      default     :
                    return createElement('div', true, extend({
                      class: 'panel-group',
                      id: options.hash.parent
                    }), options.fn(this));

    }
  };

  // helpers.accordion = function (parentId, options) {
  //   options = Array.prototype.pop.call(arguments);
  //   var body = options.fn && options.fn(this) || body;
  //   return createElement('div', true, extend({
  //     class: 'panel-group',
  //     id: parentId
  //   }, options.hash), options.fn(this));
  // };

  // helpers.accordionHead = function (parentId, childId, body, options) {
  //   options = Array.prototype.pop.call(arguments);
  //   body = options.fn && options.fn(this) || body;
  //   var accToggle = createElement('a', true, extend({
  //     class: 'accordion-toggle',
  //     'data-parent': '#' + parentId,
  //     'data-toggle': 'collapse',
  //     href: '#' + childId
  //   },options.hash), body);
  //   var accTitle = createElement('div', true, extend({
  //     class: 'panel-title'
  //   }), accToggle);
  //   var accHeading = createElement('div', true, extend({
  //     class: 'panel-heading'
  //   }), accTitle);

  //   return options.fn ? accHeading : new Handlebars.SafeString(accHeading);
  // };

  // helpers.accordionBody = function (childId, body, options) {
  //   options = Array.prototype.pop.call(arguments);
  //   body = options.fn && options.fn(this) || body;

  //   var element = createElement('div', true, extend({
  //     class: 'panel-body'
  //   }, options.hash), body);
  //   var collapse = createElement('div', true, extend({
  //     class: 'panel-collapse collapse',
  //     id: childId
  //   }), element);

  //   return options.fn ? collapse : new Handlebars.SafeString(collapse);
  // };

  for(var index in helpers){
    Handlebars.registerHelper(index, helpers[index]);
  }
  return this;

};
