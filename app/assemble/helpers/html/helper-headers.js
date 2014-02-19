  //  888    888                        888
  //  888    888                        888
  //  888    888                        888
  //  8888888888  .d88b.   8888b.   .d88888  .d88b.  888d888 .d8888b
  //  888    888 d8P  Y8b     "88b d88" 888 d8P  Y8b 888P"   88K
  //  888    888 88888888 .d888888 888  888 88888888 888     "Y8888b.
  //  888    888 Y8b.     888  888 Y88b 888 Y8b.     888          X88
  //  888    888  "Y8888  "Y888888  "Y88888  "Y8888  888      88888P'
  //
  //
  //

var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';

  var helpers = {};

  function header(level, body, options, that) {
    if(typeof body === 'object'){body = 'A title here';}
    // if ((typeof body !== "string") && body !== "") {
    //   body = 'A title here';
    // }
    var icons = createElement('i', true, extend({class: options.hash.icons || 'glyphicon glyphicon-link'}));
    var link;

    if (options.hash.id && (that.automatic_anchors_in_headings || that.devopts && that.devopts.automatic_anchors_in_headings )) {
        if (options.hash.id && (that.automatic_anchors_for_toc || that.devopts && that.devopts.automatic_anchors_for_toc )) {
          link = createElement('a', true, extend({
            href: '#' + options.hash.id,
            class: 'anchor',
            name: options.hash.id
          }), icons);
          body = link + body;
        }
        else {
          link = createElement('a', true, extend({
            href: '#' + options.hash.id,
            class: 'anchor'
          }), icons);
          body = link + body;
        }
    }

    var element = createElement('h'+level, true, extend({}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  }

  helpers.h1 = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return header(1, body, options, this);
  };

  helpers.h2 = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return header(2, body, options, this);
  };

  helpers.h3 = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
   return header(3, body, options, this);
  };

  helpers.h4 = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return header(4, body, options, this);
  };

  helpers.h5 = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return header(5, body, options, this);
  };

  helpers.h6 = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return header(6, body, options, this);
  };

  for(var index in helpers){
    Handlebars.registerHelper(index, helpers[index]);
  }
  return this;

};