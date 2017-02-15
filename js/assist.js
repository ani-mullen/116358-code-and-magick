'use strict';

// Функция определения ENTER_KEY_CODE
window.assist = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  var isKeyboardEvent = function (evt) {
    return typeof evt.keyCode !== 'undefined';
  };

  return {
    isDeactivationEvent: function (evt) {
      return isKeyboardEvent(evt) && evt.keyCode === ESCAPE_KEY_CODE;
    },
    isActivationEvent: function (evt) {
      return isKeyboardEvent(evt) && evt.keyCode === ENTER_KEY_CODE;
    },
    isClickEvent: function (evt) {
      return evt.type === 'click';
    },
    isKeyboardEvent: isKeyboardEvent
  };

})();
