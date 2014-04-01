var moment        = require('moment');
var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');

module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  helpers.meta = function (name, content, options) {
    options = Array.prototype.pop.call(arguments);
    var element;
    var attr = {};

    if (typeof content === 'object') {content = ''; }

    switch (name) {
      case 'charset'      : attr.charset = 'utf-8'; break;
      case 'description'  :
      case 'keywords'     :
      case 'author'       :
      case 'subject'      :
      case 'copyright'    :
      case 'language'     :
      case 'abstract'     :
      case 'topic'        :
      case 'summary'      :
      case 'owner'        :
      case 'url'          :
      case 'directory'    :
      case 'category'     :
      case 'coverage'     :
      case 'distribution' :
      case 'rating'       :
      case 'designer'     : attr.name = name; attr.content = content; break;
      case 'viewport'     : attr.name = name; attr.content ='width=device-width, initial-scale=1.0'; break;
      case 'revised'      : attr.name = name; attr.content = moment().format('LLLL'); break;
      case 'reply'        : attr.name = 'reply-to'; attr.content = content; break;
      case 'identURL'     : attr.name = 'identifier-URL'; attr.content = content; break;
      case 'class'        : attr.name = 'Classification'; attr.content = content; break;
      case 'revisit'      : attr.name = 'revisit-after'; attr.content = content; break;
      case 'httpexpire'   : attr['http-equiv'] = 'Expires'; attr.content = content; break;
      case 'httppragma'   : attr['http-equiv'] = 'Pragma'; attr.content = content; break;
      case 'httpcache'    : attr['http-equiv'] = 'Cache-Control'; attr.content = content; break;
      case 'httpxuacomp'  : attr['http-equiv'] = 'X-UA-Compatible'; attr.content = content; break;
    }

    element = createElement('meta', false, extend(attr, options.hash));
    return new Handlebars.SafeString(element);
  };

  /**
   * metadata helper for Facebook OpenGraph
   * @param  {string} name    property type
   * @param  {string} content content for property
   * @param  {string} options overrides
   * @return {string}         meta tag
   */
  helpers.metaf = function (name, content, options) {
    options = Array.prototype.pop.call(arguments);
    var element;
    var attr = {};

    if (typeof content === 'object') {content = ''; }

    switch (name) {

      case 'type'  : attr.property = 'og:type'; break;
      case 'site'  : attr.property = 'og:site_name'; break;
      case 'desc'  : attr.property = 'og:description'; break;
      case 'url'   : attr.property = 'og:url'; break;
      case 'title' : attr.property = 'og:title'; break;
      case 'img'   : attr.property = 'og:image'; break;
      case 'fname' : attr.property = 'og:profile:first_name'; break;
      case 'lname' : attr.property = 'og:profile:last_name'; break;
      case 'email' : attr.property = 'og:email'; break;
      case 'phone' : attr.property = 'og:phone_number'; break;
    }

    attr.content = content;
    element = createElement('meta', false, extend(attr, options.hash));
    return new Handlebars.SafeString(element);
  }

  // Twitter meta tags are used when a twitter user links to the current page.

  // There are multiple options for these:
  // Summary Card: Default card, including a title, description, thumbnail, and Twitter account attribution.
  // Large Image Summary Card: Similar to a Summary Card, but offeres the ability to prominently feature an image.
  // Photo Card: A Tweet sized photo card.
  // Gallery Card: A Tweet card geared toward highlighting a collection of photos.
  // App Card: A Tweet card for providing a profile of an application.
  // Player Card: A Tweet sized video/audio/media player card.
  // Product Card: A Tweet card to better represent product content.

  // More info here: https://dev.twitter.com/docs/cards

  // TODO: Add support for the other types too. This is just the default type.
  helpers.metat = function (name, content, options) {
    options = Array.prototype.pop.call(arguments);
    var element;
    var attr = {};

    if (typeof content === 'object') {content = ''; }

    switch (name) {
      case 'card'         : attr.name = 'twitter:card'; attr.content = 'summary'; break;
      case 'card_lg'      : attr.name = 'twitter:card'; attr.content = 'summary_large_image'; break;
      case 'card_photo'   : attr.name = 'twitter:card'; attr.content = 'photo'; break;
      case 'card_gallery' : attr.name = 'twitter:card'; attr.content = 'gallery'; break;
      case 'card_app'     : attr.name = 'twitter:card'; attr.content = 'app'; break;
      case 'card_player'  : attr.name = 'twitter:card'; attr.content = 'player'; break;
      case 'card_product' : attr.name = 'twitter:card'; attr.content = 'product'; break;
      case 'site'         : attr.name = 'twitter:site'; attr.content = content; break;
      case 'creator'      : attr.name = 'twitter:creator'; attr.content = content; break;
      case 'title'        : attr.name = 'twitter:title'; attr.content = content; break;
      case 'desc'         : attr.name = 'twitter:description'; attr.content = content; break;
      case 'img'          : attr.name = 'twitter:image'; attr.content = content; break;
      case 'img_src'      : attr.name = 'twitter:image:src'; attr.content = content; break;
      case 'img_w'        : attr.name = 'twitter:image:width'; attr.content = content; break;
      case 'img_h'        : attr.name = 'twitter:image:height'; attr.content = content; break;
      case 'img_0'        : attr.name = 'twitter:image0'; attr.content = content; break;
      case 'img_1'        : attr.name = 'twitter:image1'; attr.content = content; break;
      case 'img_2'        : attr.name = 'twitter:image2'; attr.content = content; break;
      case 'img_3'        : attr.name = 'twitter:image3'; attr.content = content; break;

    }

    element = createElement('meta', false, extend(attr, options.hash));
    return new Handlebars.SafeString(element);
  }

  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};