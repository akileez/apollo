/*!
 * extend <https://github.com/akileez/extend>
 *
 * Copyright (c) 2014 Keith Williams, contributors.
 * Licensed under the MIT License
 */

module.exports = function (obj1, obj2) {

  for(var key in obj2) {
    obj1[key] = obj2[key];
  }

  return obj1;

};