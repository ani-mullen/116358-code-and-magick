'use strict';

window.utils = (function () {
  // Случайный элемент массива
  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };
  return {
    // Случайный элемент, без повторения
    getRandomElement: getRandomElement,
    getRandomElementExcept: function (array, element) {
      var valueColor;
      while (!valueColor || valueColor === element) {
        valueColor = window.utils.getRandomElement(array);
      }
      return valueColor;
    }
  };
})();
