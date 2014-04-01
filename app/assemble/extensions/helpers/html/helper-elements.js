var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  helpers.img = function (src, opts) {
    // using opts verus options due to assemble.options.assets
    var attr = {};
    opts = Array.prototype.pop.call(arguments);

    var sel = opts.hash.sel || 'resp';

    // formatting class attribute
    if ((sel && opts.hash.class) && (opts.hash.sel !== 'none')) {
      attr.class = opts.hash.class + ' ' || '';
    } else {
      attr.class = opts.hash.class || '';
    }
    attr.id = opts.hash.id || '';
    attr.alt = opts.hash.alt || 'image';
    attr.width = opts.hash.width || '';
    attr.height = opts.hash.height || '';

    switch (sel) {
      case 'resp'   : attr.class += 'img-responsive' ; break;
      case 'circle' : attr.class += 'img-circle' ; break;
      case 'round'  : attr.class += 'img-roundedd'; break;
      case 'thumb'  : attr.class += 'img-thumbnail'; break;
      case 'border' : attr.class += 'multiple-borders'; break;
      case 'none'   : attr.class += ''; break;
    }

    return new Handlebars.SafeString(createElement('img', false, extend({
      src: options.assets + '/' + src
    }, attr)));
  };

  helpers.span = function (body,options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    if (typeof body === 'object'){body = '';}

    var element = createElement('span', true, extend({}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  // function links (tag, kind, body, options) {
  //   var element;
  //   var attr = {};

  //   switch (kind) {
  //     case 'anchor'   : attr.href = '#'; break;
  //     case 'id'       : attr.href = '#' + id; break;
  //     case 'icons'    : attr.href = 'fa-ul list-unstyled'; break;
  //     case 'inline'   : attr.href = 'list-inline'; break;
  //     case 'group'    : attr.href = 'list-group'; break;
  //     case 'media'    : attr.href = 'media-list'; break;
  //     default         : if (typeof kind === 'object') {break;} else {attr.class = kind;} break;
  //   }

  //   element = createElement(tag, true, extend(attr, options.hash), body);
  //   return options.fn ? element : new Handlebars.SafeString(element);
  // }

  // helpers.a = function (body, options) {
  //   options = Array.prototype.pop.call(arguments);
  //   body = options.fn && options.fn(this) || body;
  //   return links('a', 'anchor', body, options)
  // }

  helpers.a = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    var element = createElement('a', true, extend({href: '#'}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.alink = function (id, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    if (typeof id === 'object') { id = '';}
    var element = createElement('a', true, extend({href: '#' + id}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.ilink = function (id, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    if (typeof id === 'object') { id = '';}
    var anchor = createElement('a', true, extend({href: '#' + id}), body);
    var element = createElement('li', true, extend({}, options.hash), anchor);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.dl = function (options) {
    options = Array.prototype.pop.call(arguments);
    var element = createElement('dl', true, extend({}, options.hash), options.fn(this));
    return element;
  };

  helpers.dt = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var element = createElement('dt', true, extend({}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.dd = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var element = createElement('dd', true, extend({}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  function lists (tag, kind, body, options) {
    var element;
    var attr = {};

    switch (kind) {
      case 'dropdown' : attr.class = 'dropdown-menu'; attr.role = 'menu'; break;
      case 'nostyle'  : attr.class = 'list-unstyled'; break;
      case 'icons'    : attr.class = 'fa-ul list-unstyled'; break;
      case 'inline'   : attr.class = 'list-inline'; break;
      case 'group'    : attr.class = 'list-group'; break;
      case 'media'    : attr.class = 'media-list'; break;
      default         : if (typeof kind === 'object') {break;} else {attr.class = kind;} break;
    }

    element = createElement(tag, true, extend(attr, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  }

  helpers.ul = function (kind, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return lists('ul', kind, body, options);
  };

  helpers.ol = function (kind, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return lists('ol', kind, body, options);
  };

  helpers.li = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    var element, tag, sel;
    var attr = {};
    tag = 'li';

    sel = options.hash.sel;

    if (options.hash.sel && options.hash.class) {
      attr.class = options.hash.class + ' ' || '';
    } else {
      attr.class = options.hash.class || '';
    }

    switch (sel) {
      case 'group'    : attr.class += 'list-group-item'; break;
      case 'active'   : attr.class += 'active'; break;
      case 'divider'  : attr.class += 'divider'; body = ''; break;
      case 'header'   : attr.class += 'dropdown-header'; break;
      case 'disabled' : attr.class += 'disabled'; break;
      case 'media'    : attr.class += 'media'; break;
      default         : break;
    }

    element = createElement(tag, true, extend(attr, (options.hash, !options.hash.sel, !options.hash.class)), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.figure = function (body, options) {
   options = Array.prototype.pop.call(arguments);
   body = options.fn && options.fn(this) || body;

    var caption;
    if (options.hash.caption) {
      caption = Handlebars.helpers.caption(options.hash.caption);
    } else {
      caption = '';
    }

    var figure = createElement('figure', true, extend({}), body + caption);

    return options.fn ? figure : new Handlebars.SafeString(figure);
  };

  helpers.caption = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    var element = createElement('figcaption', true, extend({class: 'pull-center'}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);

  };

  helpers.figbox = function (body, options) {
    var style, wrap, position, caption, figure, border, box, element;

    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    // Defaults
    style = options.hash.style || 'multiple-borders';
    box = options.hash.box || 'pin_box';
    position = options.hash.position || 'left';

    if (options.hash.caption) {
      caption = Handlebars.helpers.caption(options.hash.caption);
    } else {
      caption = '';
    }

    figure = createElement('figure', true, extend({}), body + caption);
    border = createElement('div', true, extend({class: style}), figure);

    if (options.hash.box) {
      wrap = createElement('div', true, extend({class: box}), border);
      element = createElement('div', true, extend({class: position}), wrap);
    } else {
      element = createElement('div', true, extend({class: position}), border);
    }

    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.imgbox = function (body, options) {
    var style, wrap, position, border, box, element;

    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    // Defaults
    style = options.hash.style || 'multiple-borders';
    box = options.hash.box || 'pin_box';
    position = options.hash.position || 'left';

    border = createElement('div', true, extend({class: style}), body);

    if (options.hash.box) {
      wrap = createElement('div', true, extend({class: box}), border);
      element = createElement('div', true, extend({class: position}), wrap);
    } else {
      element = createElement('div', true, extend({class: position}), border);
    }

    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.hr = function (type, options) {
    options = Array.prototype.pop.call(arguments);
    var element = createElement('hr', false, extend({class: type}, options.hash));
    return new Handlebars.SafeString(element);
  };

  helpers.br = function () {
    return new Handlebars.SafeString(createElement('br', false, extend({})));
  };

  helpers.blockquote = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    var element = createElement('blockquote', true, extend({}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };


  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};