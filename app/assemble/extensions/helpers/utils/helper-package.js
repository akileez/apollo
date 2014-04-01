/**
 * Handlebars Helpers: Metadata
 * Copyright (c) 2013 lesscss.org
 * Licensed under the MIT License (MIT).
 */

// Node.js
var path   = require('path');
var fs     = require('fs');
var grunt  = require('grunt');

// node_modules
var _ = require('lodash');

// package.json config object
var config = require(path.resolve(process.cwd(), 'package.json'));
var settings = require(path.resolve(process.cwd(), 'grunt/config/settings.json'));

// Export helpers
module.exports.register = function (Handlebars, options) {

  'use strict';

  exports.metadata = function (key, opts) {
    opts = opts || 2;
    if (_.isUndefined(key)) {
      return JSON.stringify(config, null, opts) || {};
    } else if (_.isString(config[key])) {
      return config[key] || "";
    } else if (_.isObject(config[key])) {
      return JSON.stringify(config[key], null, opts) || {};
    } else {
      return null;
    }
  };

  /**
   * {{author}}
   * Return a property from package.json
   * @param  {String} key
   * @return {String}
   */
  exports.author = function(link) {
    var author = config.author ? (config.author.name || config.author) : name;
    var url = config.author.url ? '(' + config.author.url + ')' : '';

    return '[' + author + ']' + url;
  };

  /**
   * Add a copyright statement, with author and year(s) in effect.
   * @param  {Number} startYear Optional parameter to define the start year of the project.
   * @return {String}           Complete copyright statement.
   * @example
   *   {%= _.copyright() %} => Copyright (c) 2013 Jeffrey Herb, contributors.
   *   {%= _.copyright('2012') %} => Copyright (c) 2012-2013 Jeffrey Herb, contributors.
   */
  exports.copyright = function (startYear) {
    if (typeof startYear === 'object' ){startYear = '';}
    var author = config.author ? (config.author.name || config.author) : name;
    var today = grunt.template.today('yyyy') + ' ';
    var date = startYear ? startYear + '-' + today : today;
    return 'Copyright (c) ' + date + author + ', contributors.';
  };

  exports.copyRight = function (author, startYear) {
    if (typeof startYear === 'object' ){startYear = '';}
    author = author || 'name';
    var today = grunt.template.today('yyyy') + ' ';
    var date = startYear ? '&copy; ' + startYear + '-' + today : 'Copyright &copy; ' + today;
    return new Handlebars.SafeString(date + author );
  };


  exports.license = function (prepend) {
    if (typeof prepend === 'object' ){prepend = "Released under the ";}
    if(config.licenses) {
      return prepend + _.pluck(config.licenses, "type").join(", ") + " license" + (config.licenses.length === 1 ? '' : 's');
    } else if(config.license) {
      return prepend + (config.license.type || config.license) + " license";
    } else {
      return;
    }
  };

  exports.username = function () {
    if(config.homepage) {
      return config.homepage.replace(/^([^:]+):\/\/(?:.+)\/(.+)\/(?:.+)/, '$2');
    } else {
      return config.repository.url.replace(/^([^:]+):(.+)/, '$1');
    }
  };


  exports.homepage = function () {
    if(config.homepage) {
      return config.homepage;
    } else {
      return config.repository.url.replace(/^git@([^:]+):(.+)(?:.git)/, 'https://$1/$2');
    }
  };


  exports.contributors = function (sep) {
    if (typeof sep === 'object' ){sep = "";}
    if(config.contributors) {
      return _.pluck(config.contributors, "name").join("\n") + sep;
    } else {return; }
  };

  exports.jsBootstrap = function () {
    return (settings.concat.bootstrap.src).join('\n');
  }


  for (var helper in exports) {
    if (exports.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, exports[helper]);
    }
  }
};
