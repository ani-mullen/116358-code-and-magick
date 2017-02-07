'use strict';

window.utils = {

  // Случайный элемент массива
  getRandomElement: function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  },
  // Случайный элемент, без повторения
  getRandomElementExcept: function (array, element) {
    var valueColor;
    while (!valueColor || valueColor === element) {
      valueColor = window.utils.getRandomElement(array);
    }
    return valueColor;
  },
};
