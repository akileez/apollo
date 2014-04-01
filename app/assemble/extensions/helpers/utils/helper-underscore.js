var _str      = require('underscore.string');
var _         = require('lodash');

module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  helpers.slugify = function (str) {
    return new Handlebars.SafeString(_str.slugify(str));
  };

  helpers.capitalize = function (str) {
    return new Handlebars.SafeString(_str.capitalize(str));
  };

  helpers.humanize = function (str) {
    return new Handlebars.SafeString(_str.humanize(str));
  };

  helpers.sortBy = function (src) {
    var sort = _.sortBy(src);
    return sort;
  };

  helpers.genID = function (prefix) {
      if (_.isObject(prefix)) {
        prefix = '';
      }
      var id = _.uniqueId(prefix);
      return id;
    }


  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};