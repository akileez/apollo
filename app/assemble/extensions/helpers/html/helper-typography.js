//  88888888888                                                           888
//      888                                                               888
//      888                                                               888
//      888  888  888 88888b.   .d88b.   .d88b.  888d888 8888b.  88888b.  88888b.  888  888
//      888  888  888 888 "88b d88""88b d88P"88b 888P"      "88b 888 "88b 888 "88b 888  888
//      888  888  888 888  888 888  888 888  888 888    .d888888 888  888 888  888 888  888
//      888  Y88b 888 888 d88P Y88..88P Y88b 888 888    888  888 888 d88P 888  888 Y88b 888
//      888   "Y88888 88888P"   "Y88P"   "Y88888 888    "Y888888 88888P"  888  888  "Y88888
//                888 888                    888                 888                    888
//           Y8b d88P 888               Y8b d88P                 888               Y8b d88P
//            "Y88P"  888                "Y88P"                  888                "Y88P"

var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';

  var helpers = {};

  function typo(tag, body, options) {
    var element, space;

    if (options.hash.space) {
      space = '&nbsp;';
    } else {
      space = '';
    }
    element = createElement(tag, true, extend({}), body);
    return options.fn ? element : new Handlebars.SafeString(element + space);
  }

  helpers.small = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('small', body, options);
  };

  helpers.subscript = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('sub', body, options);
  };

  helpers.superscript = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('sup', body, options);
  };

  helpers.strikethrough = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('s', body, options);
  };

  helpers.strong = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('strong', body, options);
  };

  helpers.emphasis = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('em', body, options);
  };

  helpers.keyboard = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('kbd', body, options);
  };

  helpers.cite = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('cite', body, options);
  };

  helpers.sample = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('samp', body, options);
  };

  helpers.variables = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('var', body, options);
  };

  helpers.address = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    return typo('address', body, options);
  };

  helpers.insert = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('ins', body, options);
  };

  helpers.delete = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('del', body, options);
  };

  helpers.underline = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('u', body, options);
  };

  helpers.italics = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('i', body, options);
  };

  helpers.bold = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('b', body, options);
  };

  helpers.definition = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('dfn', body, options);
  };

  helpers.highlight = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('mark', body, options);
  };

  helpers.abbr = function (title, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('abbr', body, options);
    var element = createElement('abbr', true, extend({title: title}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element + '&nbsp;');
  };

  helpers.quote = function (cite, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return typo('q', body, options);
    var element = createElement('q', true, extend({cite: cite}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.p = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var element, tag, sel;
    var attr = {};
    tag = 'p';

    sel = options.hash.sel;

    if (options.hash.sel && options.hash.class) {
      attr.class = options.hash.class + ' ' || '';
    } else {
      attr.class = options.hash.class || '';
    }

    switch (sel) {
      case 'lead'    : attr.class += 'lead'; break;
      case 'left'    : attr.class += 'text-left'; break;
      case 'right'   : attr.class += 'text-right'; break;
      case 'center'  : attr.class += 'text-center'; break;
      case 'muted'   : attr.class += 'text-muted'; break;
      case 'primary' : attr.class += 'text-primary'; break;
      case 'success' : attr.class += 'text-success'; break;
      case 'info'    : attr.class += 'text-info'; break;
      case 'warning' : attr.class += 'text-warning'; break;
      case 'danger'  : attr.class += 'text-danger'; break;
      default        : break;
    }
    // Clearing out hashes. not needed after processing.
    element = createElement(tag, true, extend(attr, (options.hash, !options.hash.sel, !options.hash.class)), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  for(var index in helpers){
    Handlebars.registerHelper(index, helpers[index]);
  }
  return this;

};