
module.exports.register = function(Handlebars, options) {
  'use strict';
  var helpers = {};

  helpers.isActive = function (a, b, options) {
    options.hash.class = options.hash.class || 'active';
    var active = '';
    if (a === b) {
      active = ' class="' + options.hash.class + '"';
    }
    return new Handlebars.SafeString(active);
  };

  helpers.chkActive = function (a, b, options) {
    var isActive, active = '';
    isActive = options.hash.class || 'active';

    if (a === b) {
      active = isActive;
    }
    return new Handlebars.SafeString(active);
  }

  // helpers.isActive = function (a, b, options) {
  //   var items, actions, active, isActive;

  //   options = Array.prototype.pop.call(arguments);

  //   items = options.hash.class + ' ' || '';
  //   isActive = options.hash.active || 'active';

  //   if (a === b) {
  //     active =  options.hash.class ? ' class="' + items + isActive + '"' : ' class="' + isActive + '"';
  //     // if (items) {
  //     //   active = ' class="' + items + isActive + '"';
  //     // } else {
  //     //   active = ' class="' + isActive + '"';
  //     // }
  //   } else {
  //     active = options.hash.class ? ' class="' + items + '"' :
  //               options.hash.action ? actions : '';
  //     // if (items) {
  //     //   active = ' class="' + items + '"';
  //     // } else {
  //     //   active = '';
  //     // }
  //   }

  //   return new Handlebars.SafeString(active);
  // };

  helpers.ifActive = function (a, b, c, options) {
    var isActive,
        thisChk  = '',
        d        = '';

    options = Array.prototype.pop.call(arguments);
    isActive = options.hash.active || 'active';

    if (typeof(c) === 'object') {
      c = '';
    } else {
      d = ' ';
    }

    if (a === b) {
      thisChk = c + d + isActive;
    } else {
      thisChk = c;
    }

    return new Handlebars.SafeString(thisChk);
  }

  helpers.isClass = function (a, options) {
    var setClass = '';
    if (a) {
      setClass = ' class="' + a + '"';
    }
    return new Handlebars.SafeString(setClass);
  };

  helpers.isId = function (a, options) {
    var setId = '';
    if (a) {
      setId = ' id="' + a + '"';
    }
    return new Handlebars.SafeString(setId);
  };

  helpers.isScrollspy = function (a, options) {
    var scroll = '';
    if (a) {
      scroll = ' data-spy="scroll" data-target="#bsSidebar"';
    }
    return new Handlebars.SafeString(scroll);
  };

  helpers.isHref = function (a, options) {
    var setId = '';
    if (a) {
      setId = '#' + a ;
    }
    return new Handlebars.SafeString(setId);
  };

  helpers.isThis = function (a, b, options) {
    var thisIs = '';
    if (typeof(b) === 'object') { b = '';}
    if (a) {
      thisIs = a + b;
    }
    return new Handlebars.SafeString(thisIs);
  };

  helpers.ifThis = function (a, b, options) {
    var thisIf = '',
        c      = '';

    if (typeof(b) === 'object') {
      b = '';
    } else {
      b = b;
      c = ' ';
    }
    if (a) {
      thisIf = a + c + b;
    } else {
      thisIf = b;
    }
    return new Handlebars.SafeString(thisIf);
  };

  helpers.isThat = function (a, b, options) {
    var thatIs = '';
    if (typeof(b) === 'object') { b = '';}
    if (a) {
      thatIs = b + a;
    }
    return new Handlebars.SafeString(thatIs);
  };

  helpers.ifThat = function (a, b, options) {
    var thatIf = '',
        c      = '';

    if (typeof(b) === 'object') {
      b = '';
    } else {
      b = b;
      c = ' ';
    }
    if (a) {
      thatIf = b + c + a;
    } else {
      thatIf = b;
    }
    return new Handlebars.SafeString(thatIf);
  }

  helpers.ifThisThenThat = function (a, b, options) {
    var thisThat = '';
    if (a) {
      thisThat = b;
    }
    return new Handlebars.SafeString(thisThat);
  }


  for(var index in helpers){
      Handlebars.registerHelper(index, helpers[index]);
    }
    return this;

};