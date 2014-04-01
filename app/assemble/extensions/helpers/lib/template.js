var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};


  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};