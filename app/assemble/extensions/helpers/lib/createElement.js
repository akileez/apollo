/*!
 * createElement <https://github.com/akileez/createElement>
 *
 * Copyright (c) 2014 Keith Williams, contributors.
 * Licensed under the MIT License
 */

'use strict';

/**
 * ## createElement(htmlTag, closingTag, attributes, content)
 *
 * Create an HTML tag either closing or opening type.
 *
 * **Examples**
 *
 * ```js
 * createElement('a', true, {href: 'http://www.apple.com'}, "Apple");
 * createElement('img', false, {src: "foo.png"});
 * ```
 *
 * yeilds:
 *
 * ```html
 * <a href="http://www.apple.com">Apple</a>
 * <img src="foo.png" />
 * ```
 */


module.exports = function(type, closing, attr, contents) {

  function openTag (type, closing, attr) {
    var html = ['<' + type];
    for (var prop in attr) {
      // A falsy value is used to remove the attribute.
      // EG: attr[false] to remove, attr['false'] to add
      if (attr[prop]) {
        html.push(prop + '="' + attr[prop] + '"');
      }
    }
    return html.join(' ') + (!closing ? ' /' : '') + '>';
  };

  function closeTag (type) {
    return '</' + type + '>';
  };

  return openTag(type, closing, attr) +  (closing ? (contents || '') + closeTag(type) : '');
};