module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  helpers.log1 = function () {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments, 0, -1);
    console.log('====================');
    console.log("LOG:", JSON.stringify(args, null, 2));
    console.log('====================');
  }
  // Format Phone Number: from: http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers
  // Adapted from Assemble handlebars-helpers
  // Helper function to output a formatted phone number
  // Usage: {{formatPhone phoneNumber}}
  helpers.formatPhone = function (phoneNumber) {
    // debug('Helper:','formatPhone');
    phoneNumber = phoneNumber.toString();
    return "+" + phoneNumber.substr(0,1) + " (" + phoneNumber.substr(1,3) + ") " + phoneNumber.substr(4,3) + "-" + phoneNumber.substr(7,4);
  };

  helpers.phone = function(obj) {
    if(typeof obj != 'string') return obj;
    var l = obj.length;
    if(l <= 7) return obj.replace(/(.*)(....)/, '$1-$2');
    if(l <= 10) return obj.replace(/(.*)(...)(....)/, '$1-$2-$3');
    if(l > 10) return obj.replace(/(.*)(...)(...)(....)/, '$1-$2-$3-$4');
  };


  /**
 * Collapse multiple newlines into one.
 * @param   none
 * @example:
 *   {{#condense}}
 *     {{> body }}
 *   {{/condense}}
 */
  helpers.condense = function (context) {
    return context.fn(this).replace(/(\n|\r){2,}/g, '\n').replace(/(\s*<!--)/g, '\n$1');
  };

  helpers.math = function (a, fn, b, opt) {
    a = parseFloat(a);
    b = parseFloat(b);
    var ops = {
      '+' : a + b,
      '-' : a - b,
      '*' : a * b,
      '/' : a / b,
      '%' : a % b
    };
    return (opt === 'int') ? parseInt(ops[fn],10) : ops[fn];
  }

  helpers.verbose = function(text, type) {
    var kind;
    switch (type) {
      case 0  : kind = 'BUG: '; break;
      case 1  : kind = 'FIX: '; break;
      case 2  : kind = 'TODO: '; break;
      case 3  : kind = 'NEW: '; break;
      case 4  : kind = 'INFO: '; break;
      default : return new Handlebars.SafeString("<!-- " + text + " -->");
    }

    if (this.devopts && this.devopts.verbose) {
        return new Handlebars.SafeString("<!-- " + kind + text + " -->");
    }
    return "";
  };

  helpers.keys = function(obj, options) {
    // debug('Helper:','keys');
    var key, result, value;

    result = '';
    for (key in obj) {
        value = obj[key];
        result += options.fn({
            key: key,
            val: value
        });
    }
    return result;
  };

  /**
 * Duplicate the content in the encapsulated block n times.
 *
 * @param   {Number} n [Number of times to duplicate content.]
 * @example
 *    {{#repeat '10'}}
 *       {{> button }}
 *    {{/repeat}}
 */
  helpers.repeat = function(n, context) {
    var times = '';
    for (var i = 0; i < n; ++i) {
      times += context.fn(this);
    }
    return times;
  };

  // {{#truncate 100}} {{lorem ipsum.p3}} {{/truncate}}
  // {{truncate 20 "This is some garbage text to display functionality" append="..."}}
  helpers.truncate = function (length, str, options) {
    var append
    options = Array.prototype.pop.call(arguments);
    str = options.fn && options.fn(this) || str || '';
    length = length || 10;
    append = options.hash.append ? options.hash.append : '…' ;

    if (str.length === length) return str;

    return str.substring(0, length) + append;
  };


  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};