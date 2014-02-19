
module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  helpers.or = function (a, b, c, options) {
    if ((a === b) || (a === c)) {
      return options.fn(this);
    }
    return options.inverse(this);
  };

  helpers.nor = function (a, b, c, options) {
    if (!((a === b) || (a === c))) {
      return options.fn(this);
    }
    return options.inverse(this);
  };

  helpers.and = function (a, b, c, options) {
    if ((a === b) && (a === c)) {
      return options.fn(this);
    }
    return options.inverse(this);
  };

  helpers.nand = function (a, b, c, options) {
    if (!((a === b) && (a === c))) {
      return options.fn(this);
    }
    return options.inverse(this);
  };

  helpers.xor = function (a, b, c, options) {
    if (((a === b) || (a === c)) && (!((a === b) && (a === c)))) {
      return options.fn(this);
    }
    return options.inverse(this);
  };

  helpers.not = function (a, options) {
    if (! a) {
      return options.fn(this);
    }
    return options.inverse(this);
  };

   /**
 * Either Helper. Renders the block if any one of the
 * arguments has a truthy value.
 * https://github.com/diy/handlebars-helpers
 *
 * {{#either a b c}} content {{/either}}
 */
  helpers.either = function () {
    var options = arguments[arguments.length - 1];

    for (var i = 0; i < arguments.length - 1; i++) {
      if (typeof arguments[i] !== 'undefined' && arguments[i]) {
        return options.fn(this);
      }
    }
    return options.inverse(this);
  };

  /**
 * Neither Helper. Renders the block if all arguments have
 * a falsey value.
 * https://github.com/diy/handlebars-helpers
 *
 * {{#neither a b c}} content {{/neither}}
 */
  helpers.neither = function () {
    var options = arguments[arguments.length - 1];

    for (var i = 0; i < arguments.length - 1; i++) {
      if (typeof arguments[i] !== 'undefined' && !arguments[i]) {
          return options.fn(this);
      }
    }
    return options.inverse(this);
  };


  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};