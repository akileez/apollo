var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');
var _             = require('lodash');

module.exports.register = function (Handlebars, options) {

  'use strict';


  /**
   * {{ghbtn}}
   * => {{ghbtn size="small" user="assemble" repo="assemble"}}
   */

  exports.ghbtn = function (options) {

    options = options || {};
    options.hash = options.hash || {};

    options = _.extend(options, this, options.hash);

    // Defaults
    var type   = options.type   || 'watch'; // watch || fork || follow
    var count  = options.count  || 'true';
    var title  = options.title  || 'Star on GitHub';

    /**
     * Text
     */

    // Default button text
    if(type === 'fork') {
      title = 'Fork on GitHub';
    }

    if(type === 'follow') {
      title = 'Follow on GitHub';
    }

    if(type === 'watch') {
      title = 'Watch on GitHub';
    }

    /**
     * Sizes
     */
     var width, height;
    // var width  = options.width  || 110;
    // var height = options.height || 20;

    /**
     * Watch
     */

    // Basic Watch button
    if(type === 'watch') {
      width  = width || 110;
      height = height || 20;
    }
    // Watch with count
    if(type === 'watch' && count === true) {
      width  = width || 110;
      height = height || 20;
    }


    /**
     * Fork
     */

    // Basic Fork button
    if(type === 'fork') {
      width  = width || 53;
      height = height || 20;
    }
    // Fork with count
    if(type === 'fork' && count === true) {
      width  = width || 95;
      height = height || 20;
    }

    /**
     * Follow
     */

    // Basic Follow button
    if(type === 'follow') {
      width  = width || 145;
      height = height || 20;
    }
    // Follow with count
    if(type === 'follow' && count === true) {
      width  = width || 165;
      height = height || 20;
    }

    // Large Watch button with count
    options.size = options.size || '';
    if(options.size === 'large') {
      options.size = '&size=large';
      width  = 170;
      height = 30;
    }

    var user = 'user='     + (options.user  || 'akileez');
    var repo = '&repo='    + (options.repo  || 'Achaean');

    type     = '&type='    + type; // watch || fork || follow
    count    = '&count='   + count;

    var button = createElement('iframe', true, extend({
      src: 'http://ghbtns.com/github-btn.html?' + user + repo + type + count,
      width: width,
      height: height,
      allowtransparency: true,
      frameborder: '0',
      scrolling: '0'
    }))
    return new Handlebars.SafeString(button);
  };


  /**
   * {{ghbtn}}
   * => {{ghbtn size="small" user="assemble" repo="assemble"}}
   */
  exports.gitbtn = function (options) {
    options      = options || {};
    options.hash = options.hash || {};

    // Defaults
    var size  = options.hash.size  || 'small';
    var user  = options.hash.user  || 'assemble';
    var repo  = options.hash.repo  || 'assemble';
    var type  = options.hash.type  || 'watch'; // watch || fork
    var title = options.hash.title || 'Star on GitHub';

    var width = 100;
    var height = 20;

    if(size === 'large') {
      width = 130;
      height = 30;
    }

    if(type === 'fork') {
      title = 'Fork on GitHub';
    }

    var btn = '<iframe class="github-btn" src="http://ghbtns.com/github-btn.html?user=' + user + '&repo=' + repo + '&type=' + type + '&count=true" width="' + width + '" height="' + height + '" title="' + title + '" allowtransparency="true" frameborder="0" scrolling="0"></iframe>';
    return new Handlebars.SafeString(btn);
  };


  for (var helper in exports) {
    if (exports.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, exports[helper]);
    }
  }
};