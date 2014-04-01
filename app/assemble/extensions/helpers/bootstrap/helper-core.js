  //  888888b.                     888             888
  //  888  "88b                    888             888
  //  888  .88P                    888             888
  //  8888888K.   .d88b.   .d88b.  888888 .d8888b  888888 888d888 8888b.  88888b.
  //  888  "Y88b d88""88b d88""88b 888    88K      888    888P"      "88b 888 "88b
  //  888    888 888  888 888  888 888    "Y8888b. 888    888    .d888888 888  888
  //  888   d88P Y88..88P Y88..88P Y88b.       X88 Y88b.  888    888  888 888 d88P
  //  8888888P"   "Y88P"   "Y88P"   "Y888  88888P'  "Y888 888    "Y888888 88888P"
  //                                                                      888
  //                                                                      888
  //                                                                      888

var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  helpers.media = function (kind, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var element;
    switch (kind) {
      case 'body' : element = createElement('div', true, extend({class: 'media-body'}), body); break;
      default : element = createElement('div', true, extend({class: 'media'}), body); break;
    }
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.progressbars = function (color, width) {
    var element, bar, sr;

    sr = createElement ('span', true, extend({class: 'sr-only'}), width + '% Complete');
    bar = createElement('div', true, extend({
      class: 'progress-bar progress-bar-' + color,
      role: 'progressbar',
      'aria-valuenow': width,
      'aria-valuemin': '0',
      'aria-valuemax': '100',
      style: 'width: ' + width + '%;'
    }), sr);
    element = createElement('div', true, extend({class: 'progress'}), bar);
    return options.fn ? element : new Handlebars.SafeString(element);
  }

  helpers.jumbotron = function (options) {
    options = Array.prototype.pop.call(arguments);
    var body = options.fn && options.fn(this);

    var container = createElement('div', true, extend({
      class: 'container'
    }), body);

    var element = createElement('div', true, extend({
      class: 'jumbotron'
    }, options.hash), container);
    return element;
  };

  helpers.pageheader = function (header, descriptor, options) {
    var element, heading, level, small;
    options = Array.prototype.pop.call(arguments);
    // Initialize defaults
    header = header || 'A new title here';
    level = options.hash.h || 3;
    // Build component
    if (typeof(descriptor) === 'object') {
      small = '';
    } else {
      small = createElement('small', true, extend({}), descriptor);
    }
    heading = createElement('h' + level, true, extend({}), header + ' ' + small);
    element = createElement('div', true, extend({
      class: 'page-header'
    }, options.hash), heading);
    // Return result
    return new Handlebars.SafeString(element);
  }

  helpers.alert = function (kind, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    var modifier = '';
    var element, close;
    var attr = {};
    attr.id = options.hash.id;

    switch (kind) {
      case 'info'     : modifier = 'alert alert-info'; break;
      case 'success'  : modifier = 'alert alert-success'; break;
      case 'warning'  : modifier = 'alert alert-warning'; break;
      case 'danger'   : modifier = 'alert alert-danger'; break;
      case 'dismiss'  : modifier = 'alert alert-dismissable'; break;
      default         : modifier = 'alert alert-' + kind; break;
    }

    if (options.hash.close) {
      close = Handlebars.helpers.button('cls', 'alert');
      body = close + body;
    }

    element = createElement('div', true, extend({class: modifier}, attr), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.badge = function (kind, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    var modifier = '';
    if (typeof kind === 'object'){modifier = 'badge'; body = '42';}
    else {
      switch (kind) {
        case 'default'  : modifier = 'badge' ; break;
        case 'primary'  : modifier = 'badge badge-primary' ; break;
        case 'info'     : modifier = 'badge badge-info'; break;
        case 'success'  : modifier = 'badge badge-success'; break;
        case 'warning'  : modifier = 'badge badge-warning'; break;
        case 'danger'   : modifier = 'badge badge-danger'; break;
        case 'special'  : modifier = 'badge badge-special'; break;
        case 'inverse'  : modifier = 'badge badge-inverse'; break;
        case 'disabled' : modifier = 'badge badge-disabled'; break;
        default         : modifier = 'badge badge-' + kind; break;
      }
    }
    if(typeof body === 'object'){body = '42';}

    var element = createElement('span', true, extend({class: modifier}), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.label = function (kind, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var modifier = '';
    if (typeof kind === 'object'){modifier = 'label label-default'; body = 'Hello World';}
    else {
      switch (kind) {
        case 'default'  : modifier = 'label label-default' ; break;
        case 'primary'  : modifier = 'label label-primary' ; break;
        case 'info'     : modifier = 'label label-info'; break;
        case 'success'  : modifier = 'label label-success'; break;
        case 'warning'  : modifier = 'label label-warning'; break;
        case 'danger'   : modifier = 'label label-danger'; break;
        case 'special'  : modifier = 'label label-special'; break;
        case 'inverse'  : modifier = 'label label-inverse'; break;
        case 'disabled' : modifier = 'label label-disabled'; break;
        default         : modifier = 'label label-' + kind ; break;
      }
    }
    if (typeof body === 'object'){body = 'Hello World';}


    var element = createElement('span', true, extend({class: modifier}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.well = function (well, body, options) {
    var modifier, wellClass, element;

    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    if (options.hash.class) {
      modifier = ' ' + options.hash.class;
    } else {
      modifier = '';
    }

    switch (well) {
      case 'lg' : wellClass = 'well well-lg'; break;
      case 'sm' : wellClass = 'well well-sm'; break;
      default   : wellClass = 'well'; break;
    }

    element = createElement('div', true, extend({class: wellClass + modifier}, (options.hash, !options.hash.class)), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  }

  helpers.icons = function (font, kind) {
    var modifier = '';
    if (typeof kind === 'object') { modifier = '';} else { modifier = ' ' + kind;}

    return new Handlebars.SafeString(createElement('i', true, extend({
      class: font + modifier
    })));
  };

  helpers.clearfix = function () {
    return new Handlebars.SafeString(createElement('div', true, extend({
      class: 'clearfix'
    })));
  };

  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};
