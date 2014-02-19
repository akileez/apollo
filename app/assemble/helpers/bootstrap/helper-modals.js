  //  888b     d888               888          888
  //  8888b   d8888               888          888
  //  88888b.d88888               888          888
  //  888Y88888P888  .d88b.   .d88888  8888b.  888 .d8888b
  //  888 Y888P 888 d88""88b d88" 888     "88b 888 88K
  //  888  Y8P  888 888  888 888  888 .d888888 888 "Y8888b.
  //  888   "   888 Y88..88P Y88b 888 888  888 888      X88
  //  888       888  "Y88P"   "Y88888 "Y888888 888  88888P'
  //
  //
  //

var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  helpers.modal = function (kind, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this);
    var element;
    switch (kind) {
      case 'head' : element = createElement('div', true, extend({class: 'modal-header'}), body); break;
      case 'body' : element = createElement('div', true, extend({class: 'modal-body'}), body); break;
      case 'foot' : element = createElement('div', true, extend({class: 'modal-footer'}), body); break;
      default     : var content = createElement('div', true, extend({class: 'modal-content'}), body);
                    var dialog = createElement('div', true, extend({class: 'modal-dialog'}), content);
                    element = createElement('div', true, extend({
                      class: 'modal fade',
                      tabindex: '-1',
                      role: 'dialog',
                      'aria-labelledby': 'myModalLabel',
                      'aria-hidden': 'true'
                    }, options.hash), dialog);
                    break;
    }
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};