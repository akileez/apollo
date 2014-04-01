//   .d8888b.                888
//  d88P  Y88b               888
//  888    888               888
//  888         .d88b.   .d88888  .d88b.
//  888        d88""88b d88" 888 d8P  Y8b
//  888    888 888  888 888  888 88888888
//  Y88b  d88P Y88..88P Y88b 888 Y8b.
//   "Y8888P"   "Y88P"   "Y88888  "Y8888
//
var _ = require('lodash');
var ent           = require('ent');
var grunt         = require('grunt');
var hljs          = require('highlight.js');
var extend        = require('../lib/extend');
var createElement = require('../lib/createElement');

module.exports.register = function(Handlebars, options) {
  'use strict';

  var helpers = {};

  // function globFiles (src) {
  //   var content = void 0;
  //   var index = 0;
  //   return content = grunt.file.expand(src).map(function (path) {
  //     index += 1;
  //     return {
  //       index: index,
  //       path: path,
  //       content: grunt.file.read(path)
  //     };
  //   }).map(function (obj) {
  //     return obj.content;
  //   }).join(grunt.util.normalizelf(grunt.util.linefeed));
  // }

  // function matchesExt (haystack, needles) {
  //   needles = Array.isArray(needles) ? needles : [needles];
  //   needles = (needles.length > 0) ? _.unique(_.flatten(needles)).join('|') : '.*';
  //   var re = new RegExp('(?:' + needles + ')', 'g');
  //   var matches = String(haystack).match(re);
  //   if (matches) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // var languages = {
  //   xml: ['html', 'xml'],
  //   less: ['less'],
  //   yaml: ['yfm', 'yml', 'yaml'],
  //   markdown: ['markdown', 'md'],
  //   handlebars: ['handlebars', 'hbs'],
  //   javascript: ['javascript', 'js', 'json']
  // }

  // function highlight (lang, code) {
  //   if (lang === undefined) {lang = 'bash';}
  //   for (var language in languages) {
  //     if (languages.hasOwnProperty(language)) {
  //       if(matchesExt(lang, languages[language])) {
  //         lang = language;
  //       }
  //     }
  //   }
  //   return '<div class="code-example">' + hljs.highlight(lang, code).value + '</div>';
  // }


  /**
   * Inline code
   * @param  {String} codesample Code to be escaped and formatted
   * @return {String}            Formatted html code with codesample
   */
  helpers.code = function(codesample) {
    return new Handlebars.SafeString(createElement('code', true, extend({}), ent.encode(codesample)));
  };

  helpers.pre = function (options) {
    var element;
    element = createElement('pre', true, extend({}, options.hash), options.fn(this));
    return element;
  };

  /**
   * Embed a code snippet wrapped in <script> tags
   * {{codesnippet js.snippet-affix}} or {{codenippet path/to/file.js}}
   *
   * @param  {[type]} src Source file to be embbed
   * @return {[type]}     [description]
   */
  helpers.codesnippet = function (src) {
    src = options.codeSrcDir + '/' + src;
    var content = grunt.file.read(src);
    var element = createElement('script', true, extend({}), content);
    return new Handlebars.SafeString(element);
  };

  /**
   * Prettify codeblock contents
   * @param  {String} codesample Code to be prettified
   * @param  {String} lang       Language of the code (optional)
   * @return {String}            Prettified codeblock html code
   */
  helpers.codeblock = function(codesample,lang) {
    //console.log('sss',codesample, codesample.replace);
    if(codesample && !codesample.replace && codesample.string){
      codesample = codesample.string;
    }
    codesample = codesample.replace(/^\n*/g,'').replace(/\n*$/g,'');
    var attr = {};

    if(typeof lang === 'string'){
      attr.class = 'language-'+lang;
    }else{
      attr.class = 'language-html';
    }
    var result = createElement('code', true, extend(attr), ent.encode(codesample));
    // var result = createElement('code', true, extend(attr), hljs.highlight(lang, codesample).value);
    var pre = createElement('pre', true, extend({class: 'prettyprint linenums'}), result);
    return new Handlebars.SafeString(pre);
  };

  helpers.codesource = function (src, lang) {
    src = options.codeSrcDir + '/' + src;
    var content = grunt.file.read(src);
    content = content.replace(/^\n*/g,'').replace(/\n*$/g,'');
    var attr = {};

    if(typeof lang === 'string'){
      attr.class = 'language-'+lang;
    }else{
      attr.class = 'language-js';
    }

    var result = createElement('code', true, extend(attr), ent.encode(content));
    var pre = createElement('pre', true, extend({class: 'prettyprint linenums'}), result);
    return new Handlebars.SafeString(pre);
  };

  // helpers.codehljs = function (src, lang) {
  //   src = options.codeSrcDir + '/' + src;
  //   var content = grunt.file.read(src);
  //   content = content.replace(/^\n*/g,'').replace(/\n*$/g,'');
  //   var attr = {};

  //   if(typeof lang === 'string'){
  //     attr.class = 'language-'+lang;
  //   }else{
  //     attr.class = 'language-js';
  //   }

  //   var result = createElement('code', true, extend(attr), hljs.highlight(lang, content).value);
  //   var pre = createElement('pre', true, extend({class: 'code-example'}), result);
  //   return new Handlebars.SafeString(pre);
  // };

  for(var index in helpers){
    Handlebars.registerHelper(index, helpers[index]);
  }
  return this;

};