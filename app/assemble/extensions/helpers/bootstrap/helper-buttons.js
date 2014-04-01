//  888888b.            888    888
//  888  "88b           888    888
//  888  .88P           888    888
//  8888888K.  888  888 888888 888888 .d88b.  88888b.  .d8888b
//  888  "Y88b 888  888 888    888   d88""88b 888 "88b 88K
//  888    888 888  888 888    888   888  888 888  888 "Y8888b.
//  888   d88P Y88b 888 Y88b.  Y88b. Y88..88P 888  888      X88
//  8888888P"   "Y88888  "Y888  "Y888 "Y88P"  888  888  88888P'
//
//
var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';

  var helpers = {};

  helpers.button = function (kind, modifier, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    var element, tag, value, closing;
    var attr = {};
    if (typeof kind === 'object'){
      tag         = 'button';
      closing     = true;
      attr.type   = 'button';
      attr.class  = 'btn btn-default';
      body        = body || 'Button';
    } else {
        switch (kind) {
          case 'btn'    : if (typeof modifier === 'object'){
                            modifier = 'default';
                          } else {
                            modifier = modifier;
                          }
                          tag                   = 'button';
                          closing               = true;
                          attr.type             = 'button';
                          attr.class            = 'btn btn-' + modifier;
                          body                  = body || 'Button';
                          break;

          case 'lnk'    : if (typeof modifier === 'object'){
                            modifier = 'default';
                          } else {
                            modifier = modifier;
                          }
                          tag                   = 'a';
                          closing               = true;
                          attr.class            = 'btn btn-' + modifier;
                          attr.href             = '#';
                          break;

          case 'inp'    : tag                   = 'input';
                          closing               = false;
                          attr.class            = 'btn btn-' + modifier;
                          attr.type             = 'button';
                          attr.value            = value = body;
                          body                  = '';
                          break;

          case 'div'    : if (typeof modifier === 'object'){
                            modifier = 'default';
                          } else {
                            modifier = modifier;
                          }
                          tag                   = 'div';
                          closing               = true;
                          attr.class            = 'btn btn-' + modifier;
                          break;

          case 'cls'    : tag                   = 'button';
                          closing               = true;
                          attr.class            = 'close';
                          attr['data-dismiss']  = modifier;
                          attr['aria-hidden']   = 'true';
                          body                  = '&times;';
                          break;

          case 'submit' : tag                   = 'input';
                          closing               = false;
                          attr.class            = 'btn btn-' + modifier;
                          attr.type             = 'submit';
                          attr.value = value    = body;
                          body                  = '';
                          break;

          case 'reset'  : tag                   = 'button';
                          closing               = true;
                          attr.type             = 'reset';
                          attr.class            = 'btn btn-' + modifier;
                          break;

          case 'grp'    : if (typeof modifier === 'object'){
                            modifier = 'btn-group';
                          } else {
                            modifier = 'btn-group ' + modifier;
                          }
                          tag                   = 'div';
                          closing               = true;
                          attr.class            = modifier;
                          break;

          case 'vert'    : if (typeof modifier === 'object'){
                            modifier = 'btn-group-vertical';
                          } else {
                            modifier = 'btn-group-vertical' + modifier;
                          }

                          tag                   = 'div';
                          closing               = true;
                          attr.class            = modifier;
                          break;

          case 'just'    :if (typeof modifier === 'object'){
                            modifier = 'btn-group btn-group-justified';
                          } else {
                            modifier = 'btn-group btn-group-justified' + modifier;
                          }

                          tag                   = 'div';
                          closing               = true;
                          attr.class            = modifier;
                          break;

          case 'tool'    :if (typeof modifier === 'object'){
                            modifier = 'btn-toolbar';
                          } else {
                            modifier = 'btn-toolbar ' + modifier;
                          }

                          tag                   = 'div';
                          closing               = true;
                          attr.class            = modifier;
                          break;

          case 'nav'     :
                          if (typeof modifier === 'object'){
                            modifier = 'navbar-collapse';
                          } else {
                            modifier = modifier;
                          }
                          tag                   = 'button';
                          closing               = true;
                          attr.class            = 'navbar-toggle';
                          attr['data-toggle']   = 'collapse';
                          attr['data-target']   = '.' + modifier;
                          break;
        }
    }

    element = createElement(tag, closing, extend(attr, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  for(var index in helpers){
    Handlebars.registerHelper(index, helpers[index]);
  }
  return this;

};