module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  helpers.symb = function (symbol) {
    var symb = '&' + symbol + ';';
    return new Handlebars.SafeString(symb);
  };

  helpers.cent = function () {
    return new Handlebars.SafeString('&cent;');
  };

  helpers.nbsp = function () {
    return new Handlebars.SafeString('&nbsp;');
  };

  helpers.quot = function () {
    return new Handlebars.SafeString('&quot;');
  };

  helpers.apos = function () {
    return new Handlebars.SafeString('&apos;');
  };

  helpers.amp = function () {
    return new Handlebars.SafeString('&amp;');
  };

  helpers.lt = function () {
    return new Handlebars.SafeString('&lt;');
  };

  helpers.gt = function () {
    return new Handlebars.SafeString('&gt;');
  };

  helpers.pound = function () {
    return new Handlebars.SafeString('&pound;');
  };

  helpers.sect = function () {
    return new Handlebars.SafeString('&sect;');
  };

  helpers.copy = function () {
    return new Handlebars.SafeString('&copy;');
  };

  helpers.reg = function () {
    return new Handlebars.SafeString('&reg;');
  };

  helpers.para = function () {
    return new Handlebars.SafeString('&para;');
  };

  helpers.raqou = function () {
    return new Handlebars.SafeString('&raqou;');
  };

  helpers.laqou = function () {
    return new Handlebars.SafeString('&laqou;');
  };

  helpers.frac14 = function () {
    return new Handlebars.SafeString('&frac14;');
  };

  helpers.frac12 = function () {
    return new Handlebars.SafeString('&frac12;');
  };

  helpers.frac34 = function () {
    return new Handlebars.SafeString('&frac34;');
  };


  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};