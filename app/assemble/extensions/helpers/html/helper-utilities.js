  //  888     888 888    d8b 888 d8b 888    d8b
  //  888     888 888    Y8P 888 Y8P 888    Y8P
  //  888     888 888        888     888
  //  888     888 888888 888 888 888 888888 888  .d88b.  .d8888b
  //  888     888 888    888 888 888 888    888 d8P  Y8b 88K
  //  888     888 888    888 888 888 888    888 88888888 "Y8888b.
  //  Y88b. .d88P Y88b.  888 888 888 Y88b.  888 Y8b.          X88
  //   "Y88888P"   "Y888 888 888 888  "Y888 888  "Y8888   88888P'
  //
  //
  //

var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';

  var helpers = {};

  helpers.webfont = function (family) {
    if (typeof(family) === 'object') {
      var families = '';
      for (var i = 0, j = family.length; i < j; i++) {
        if (i === (j-1)) {
          families += family[i];
        } else {
          families += family[i] + '|';
        }
      }
      return new Handlebars.SafeString(createElement('link', false, extend({
        rel: 'stylesheet',
        href: 'http://fonts.googleapis.com/css?family=' + families
      })));
    }
    return new Handlebars.SafeString(createElement('link', false, extend({
      rel: 'stylesheet',
      href: 'http://fonts.googleapis.com/css?family=' + family
    })));
  };

  helpers.css = function (src) {
    if (typeof src === 'object') {

      var links = '';
      for (var i = 0, j = src.length; i < j; i++) {
        links += createElement('link', false, extend({
          rel: 'stylesheet',
          href: options.assets + '/' + src[i]
        }));
      }
      return new Handlebars.SafeString(links);
    }
    return new Handlebars.SafeString(createElement('link', false, extend({
      rel: 'stylesheet',
      href: options.assets + '/' + src
    })));
  };

  helpers.js = function (src) {
    if (typeof src === 'object') {

      var links = '';
      for (var i = 0, j = src.length; i < j; i++) {
        links += createElement('script', true, extend({
          src: options.assets + '/' + src[i]
        }));
      }
      return new Handlebars.SafeString(links);
    }
    return new Handlebars.SafeString(createElement('script', true, extend({
      src: options.assets + '/' + src
    })));
  };

  helpers.ico = function (src, type, size) {
    var attr = {};

    if (typeof type === 'object') {type = '';}
    if (typeof size === 'object') {size = '';}

    switch (type) {
      case 'apple' : attr.rel = 'apple-touch-icon-precomposed'; break;
      default      : attr.rel = 'shortcut icon'; break;
    }

    switch (size) {
      case 144 : attr.size = '144x144'; break;
      case 120 : attr.size = '120x120'; break;
      case 114 : attr.size = '114x114'; break;
      case 72  : attr.size = '72x72'; break;
      default    : break;
    }
    attr.href = options.assets + '/' + src;

    return new Handlebars.SafeString(createElement('link', false, extend({},attr)));
  };

  helpers.holder = function (size, options) {
    options = Array.prototype.pop.call(arguments);

    if (typeof size === 'object') {size = '80x80';}

    var bgcolor = options.hash.bc || 'AAAAAA';
    var fgcolor = options.hash.fc || 'FEFEFE';

    var attr = {};

    if (options.hash.class) {
      attr.class = options.hash.class;
    }
    if (options.hash.style) {
      attr.style = options.hash.style;
    }

    return new Handlebars.SafeString(createElement('img', false, extend({
      class: 'img-thumbnail',
      'data-src': 'holder.js/'  + size  + '/#' + bgcolor + ':#' + fgcolor + '/auto'
    }, attr)));
  };

  helpers.viewport = function (modifier){
    var body = 'viewport:&nbsp;';
    var span = createElement('span', true, extend({
      class: 'label label-' + modifier,
      id: 'monitor'
    }));
    return new Handlebars.SafeString(createElement('div', true, extend({
      class: 'viewport'
    }), body + span));
  };

  helpers.space = function (size) {
    return new Handlebars.SafeString(createElement('div', true, extend({
      class: 'spacer-' + size
    })));
  };

  for(var index in helpers){
    Handlebars.registerHelper(index, helpers[index]);
  }
  return this;

};
