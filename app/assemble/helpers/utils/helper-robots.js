var _         = require('lodash');

module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  // http://www.robotstxt.org/robotstxt.html
  // https://developers.google.com/webmasters/control-crawl-index/docs/robots_txt?csw=1
  helpers.robots = function (options) {
    var ua, disallow, allow, sitemap, policy;

    options = Array.prototype.pop.call(arguments);

    ua       = options.hash.ua || '';
    disallow = options.hash.disallow || '';
    allow    = options.hash.allow || '';
    sitemap  = options.hash.sitemap || '';
    policy   = '';

    if (ua) {
      policy += 'User-agent: ' + ua + '\n';
      if (disallow) {
        if (typeof(disallow) === 'string') {
          policy += 'Disallow: ' + disallow + '\n';
        }
        if (typeof(disallow) === 'object') {
          _.map(disallow, function (d) {
            policy += 'Disallow: ' + d + '\n';
          });
        }
        // for (var i = 0, j = disallow.length; i < j; i++) {
        //   policy += 'Disallow: ' + disallow[i] + '\n';
        // }
      }
      if (allow) {
        if (typeof(allow) === 'string') {
          policy += 'Allow: ' + allow + '\n';
        }
        if (typeof(allow) === 'object') {
          _.map(allow, function (a) {
            policy += 'Allow: ' + a + '\n';
          });
        }
        // for (var i = 0, j = allow.length; i < j; i++) {
        //   policy += 'Allow: ' + allow[i] + '\n';
        // }
      }
    }

    if (sitemap) {
      if (_.isString(sitemap)) {
        policy += 'Sitemap: ' + sitemap + '\n';
      }
      if (_.isObject(sitemap)) {
        _.map(sitemap, function (s) {
            policy += 'Sitemap: ' + s + '\n';
          });
      }

    }
    return (policy);
  };


  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};