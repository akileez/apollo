  //   .d8888b.  888             888                            d8b      888
  //  d88P  Y88b 888             888                            Y8P      888
  //  Y88b.      888             888                                     888
  //   "Y888b.   888888 888  888 888  .d88b.   .d88b.  888  888 888  .d88888  .d88b.
  //      "Y88b. 888    888  888 888 d8P  Y8b d88P"88b 888  888 888 d88" 888 d8P  Y8b
  //        "888 888    888  888 888 88888888 888  888 888  888 888 888  888 88888888
  //  Y88b  d88P Y88b.  Y88b 888 888 Y8b.     Y88b 888 Y88b 888 888 Y88b 888 Y8b.
  //   "Y8888P"   "Y888  "Y88888 888  "Y8888   "Y88888  "Y88888 888  "Y88888  "Y8888
  //                         888                   888
  //                    Y8b d88P              Y8b d88P
  //                     "Y88P"                "Y88P"

var slug          = require('slug');
var extend        = require('../lib/extend');
var createElement = require('../lib/createElement');

module.exports.register = function(Handlebars, options) {
  'use strict';

  var helpers = {};


  helpers.styleguide = function (title, code, options) {

    code = code.replace(/^\n*/g,'').replace(/\n*$/g,'');
    var compiled = Handlebars.compile(code)(this,options);
    var titleId = slug(title).toLowerCase();
    var hbs = Handlebars.helpers.codeblock(code, 'handlebars');
    var htm = Handlebars.helpers.codeblock(compiled, 'html');
    var htm_active = (hbs.toString()===htm.toString())?' active':'';

    // Create tab for html code, link, and list items
    var tabpanehtm = createElement('div', true, extend({
      class: 'tab-pane'+htm_active,
      id: 'guide-' +titleId+ '-html'
    }), htm);
    var linkhtm = createElement('a', true, extend({
      href: '#guide-' +titleId+ '-html',
      'data-toggle': 'tab'
    }), 'HTML');
    var listhtm = createElement('li', true, extend({class: htm_active}), linkhtm);

    var tabpanehbs = '';
    var linkhbs = '';
    var listhbs = '';

    // Create tab for handlebars code, link, and list items
    if (htm_active === ''){
      tabpanehbs = createElement('div', true, extend({
        class: 'tab-pane active',
        id: 'guide-' +titleId+ '-hbs'
      }), hbs);
      linkhbs = createElement('a', true, extend({
        href: '#guide-' +titleId+ '-hbs',
        'data-toggle': 'tab'
      }), 'Handlebars');
      listhbs = createElement('li', true, extend({class: 'active'}), linkhbs);
    }

    // Combine elements to build tabbable content
    var tabcontent = createElement('div', true, extend({
      class: 'tab-content styleguide-code'
    }), tabpanehbs + tabpanehtm); // hbs + htm

    var ulist = createElement('ul', true, extend({
      class: 'nav nav-tabs styleguide-code-toggle'
    }), listhbs + listhtm);

    var tabbable = createElement('div', true, extend({
      class: 'tabbable tabs-below styleguide-tabcontent'
    }), tabcontent + ulist);

    var head = Handlebars.compile('{{h3 "'+title+'" class="styleguide-title" id="'+titleId+'"}}')(this, options);
    // var head = createElement('h3', true, extend({class: 'styleguide-title', id: titleId}), title);

    var clearfx = createElement('div', true, extend({class: 'clearfix'}));
    var spacer = createElement('div', true, extend({class: 'spacer-10'}));

    var sgcontainer = new Handlebars.SafeString(createElement('div', true, extend({
      class: 'styleguide-container'
    }), head + compiled + clearfx + spacer + tabbable + clearfx));

    // Create panel wrapper
    var panelBody = createElement('div', true, extend({class: 'panel-body'}), sgcontainer);
    var panel = createElement('div', true, extend({class: 'panel panel-default'}, options.hash), panelBody);

    return panel;
  };

  for(var index in helpers){
    Handlebars.registerHelper(index, helpers[index]);
  }
  return this;

};