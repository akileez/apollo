  //  8888888888
  //  888
  //  888
  //  8888888  .d88b.  888d888 88888b.d88b.  .d8888b
  //  888     d88""88b 888P"   888 "888 "88b 88K
  //  888     888  888 888     888  888  888 "Y8888b.
  //  888     Y88..88P 888     888  888  888      X88
  //  888      "Y88P"  888     888  888  888  88888P'
  //
  //
  //
  // from: https://github.com/badsyntax/handlebars-form-helpers

var createElement = require('../lib/createElement');
var extend        = require('../lib/extend');
var indexOf       = require('../lib/indexOf');

module.exports.register = function(Handlebars, options) {
  'use strict';

  var helpers = {};

  helpers.form = function (url, options) {
    var fieldset = createElement('fieldset', true, extend({}), options.fn(this));
    return createElement('form', true, extend({
      action: url,
      method: 'POST'
    }, options.hash), fieldset);
  };

  helpers.form_label = function (input, body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    var attr = {};
    if (typeof input === 'string') {
      attr['for'] = input;
    }

    var element = createElement('label', true, extend(attr, options.hash), body);

    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.form_group = function (options) {
    return createElement('div', true, extend({
      class: 'form-group'
    }, options.hash), options.fn(this));
  };

  helpers.form_helper = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    var element = createElement('div', true, extend({class: 'help-block'}, options.hash), body);
    return options.fn ? element : new Handlebars.SafeString(element);
  };

  helpers.input = function (type, placeholder, options) {
    return new Handlebars.SafeString(createElement('input', false, extend({
      class: 'form-control',
      type: type,
      placeholder: placeholder
    }, options.hash)));
  };

  helpers.checkbox = function (options) {
    return new Handlebars.SafeString(createElement('input', false, extend({
      type: 'checkbox'
    }, options.hash)));
  };

  helpers.radio = function (options) {
    return new Handlebars.SafeString(createElement('input', false, extend({
      type: 'radio'
    }, options.hash)));
  };

  helpers.form_input = function (kind, id, heading, value, options) {
    var label = Handlebars.helpers.form_label(id, heading);
    var input = createElement('input', false, extend({
      class: 'form-control',
      type: kind,
      name: id,
      id: id,
      placeholder: value
    }, options.hash));

    var help = createElement('div', true, extend({class: 'help-block'}));

    return new Handlebars.SafeString(createElement('div', true, extend({
      class: 'form-group'
    }),label + input + help));
  };

  helpers.form_legend = function (title, body, options) {
    var legend = createElement('legend', true, extend({}), title);

    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;

    var content = createElement('p', true, extend(options.hash), body);

    return options.fn ? legend + content : new Handlebars.SafeString(legend + content);
  };

  helpers.form_textarea = function (id, heading, value, rows, options) {
    var label = Handlebars.helpers.form_label(id, heading);
    var help = createElement('div', true, extend({class: 'help-block'}));
    var textarea = createElement('textarea', true, extend({
      class: 'form-control',
      name: id,
      id: id,
      rows: rows,
      placeholder: value
    }, options.hash));

    return new Handlebars.SafeString(createElement('div', true, extend({
      class: 'form-group'
    }),label + textarea + help));
  };

  helpers.form_hidden = function (id, value, options) {
    var hidden = createElement('input', false, extend({
      class: 'form-control',
      name: id,
      id: id,
      value: value,
      type: 'hidden'
    }, options.hash));

    return new Handlebars.SafeString(createElement('div', true, extend({
      class: 'form-group'
    }),hidden));
  };

  helpers.form_fileupload = function (id, header, options) {
    var label = Handlebars.helpers.form_label(id, header);
    var help = createElement('div', true, extend({class: 'help-block'}));
    var fileup = createElement('input', false, extend({
      name: id,
      id: id,
      type: 'file'
    }, options.hash));

    return new Handlebars.SafeString(createElement('div', true, extend({
      class: 'form-group'
    }), label + fileup + help));
  };

  helpers.form_action = function (body, options) {
    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    return new Handlebars.SafeString(createElement('div', true, extend({
      class: 'form-actions'
    }, options.hash), body));
  };

  helpers.form_actions = function (kind) {
    var element, span;
    switch (kind) {
      case 'submit' : element = Handlebars.helpers.button('submit', 'primary', 'Submit'); break;
      case 'reset'  : element = Handlebars.helpers.button('reset', 'warning', 'Reset'); break;
      case 'both'   : element = Handlebars.helpers.button('submit', 'primary', 'Submit') + '&nbsp;' + Handlebars.helpers.button('reset', 'warning', 'Reset');
                            break;
    }
    span = createElement('span', true, extend({}), element);
    return new Handlebars.SafeString(createElement('div', true, extend({
      class: 'form-actions'
    }, options.hash), span));
    };


  helpers.form_submit = function (type, text) {
    var submit = Handlebars.helpers.button('submit', type, text);
    return new Handlebars.SafeString(createElement('span', true, extend({}), submit));
  };

  helpers.form_reset = function (type, text) {
    var reset = Handlebars.helpers.button('reset', type, text);
    return new Handlebars.SafeString(createElement('span', true, extend({}), reset));
  };

  helpers.form_checkbox = function (type, id, value, checked, inline, description, options) {
    var attr = {};
    var atti = {};
    var attl = {};

    if (type !== 'radio') {
      attr.type = 'checkbox';
      attl.class = 'checkbox';
    }
    else {
      attr.type = 'radio';
      attl.class = 'radio';
    }

    // Don't add an id attribute if the name uses the multiple character sequence, eg: 'food[]'
    // For single checkbox, there is no need for an id, hence this test.
    // Also there is a need for the name to remain constant and the id's variable -- then add id="idname[#]" as an option
    // This is needed when doing an "each" loop for multiple checkboxe or radio buttons
    if (!/\[\]/.test(id)) {
      attr.id = id;
    }

    attr.name = id;
    attr.value = value;

    if (checked === true || checked === value) {
      attr.checked = 'checked';
    }

    if (typeof id === 'string') {
      atti['for'] = id;
    }

    var input = createElement('input', false, extend(attr, options.hash));
    var label = createElement('label', true, extend(atti), input + description);
    var chkbox = createElement('div', true, extend(attl), label);

    if (inline === true) {
      if (type !== 'radio') {
        atti.class = 'checkbox-inline';
      }
      else {
        atti.class = 'radio-inline';
      }
      return new Handlebars.SafeString(createElement('div', true, extend({
          class: 'form-group'
        }), label));
    }

    return new Handlebars.SafeString(createElement('div', true, extend({
      class: 'form-group'
    }), chkbox));
  };

  // {{form_radio "radio" "optionsRadios" "option1" true false "This is option1" id="optionsRadios1"}}
  helpers.form_radio = function (type, id, value, checked, inline, description, options) {
    return Handlebars.helpers.form_checkbox(type, id, value, checked, inline, description, options);
  };

  helpers.form_selects = function (id, header, items, selected, options) {

    // If the selected value is an array, then convert the
    // select to a multiple select
    if (selected instanceof Array) {
      options.hash.multiple = 'multiple';
    }

    // Generate the list of options
    var optionsHtml = '';
    for (var i = 0, j = items.length; i < j; i++) {

      // <option> attributes
      var attr = {
        value: items[i].value
      };

      // We can specify which options are selected by using either:
      // * an array of selected values or
      // * a single selected value
      if ((selected instanceof Array && indexOf(selected, items[i].value) !== -1) || (selected === items[i].value)) {
        attr.selected = 'selected';
      }

      optionsHtml += createElement('option', true, attr, items[i].text);
    }

    var select = createElement('select', true, extend({
      class: 'form-control',
      id: id,
      name: id
    }, options.hash), optionsHtml );

    var label = Handlebars.helpers.form_label(id, header);
    var div = createElement('div', true, extend({}), select);

    return new Handlebars.SafeString(createElement('div', true, extend({
      class: 'form-group'
    }), label + div));
  };

  for(var index in helpers){
    Handlebars.registerHelper(index, helpers[index]);
  }
  return this;

};