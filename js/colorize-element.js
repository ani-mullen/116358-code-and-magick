'use strict';

window.colorizeElement = (function () {
  return function (element, colors, property, callback) {
    var currentColor;
    var randomColor = function (evt) {
      if (evt.type === 'click' || window.assist.isActivationEvent(evt)) {
        currentColor = window.utils.getRandomElementExcept(colors, currentColor);
        if (typeof callback === 'function') {
          callback(element, property, currentColor);
        }
      }
      return currentColor;
    };

    element.addEventListener('click', randomColor);
    element.addEventListener('keydown', randomColor);
  };
})();
