'use strict';

var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');

var userName = document.querySelector('.setup-user-name');
userName.required = true;
userName.maxLength = 50;

var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var setupFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];


(function () {
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = document.querySelector('.setup-close');
  var setupSave = document.querySelector('.setup-submit');

  // Функция изменения значения Aria роли
  var statusAriaRole = function (item) {
    var pressed = (item.getAttribute('aria-pressed') === 'true');
    item.setAttribute('aria-pressed', !pressed);
  };

  var onSetupKeydown = function (evt) {
    if (window.assist.isActivationEvent(evt)) {
      window.enableSetup.openSetup();
      window.enableSetup.focusSetupOpen(function () {
        setupOpen.focus();
      });
    }
    statusAriaRole(setupOpen);
  };

  // Обработчик клика на иконку
  setupOpen.addEventListener('click', function () {
    window.enableSetup.openSetup();
    statusAriaRole(setupOpen);
  });

  // Обработчик нажатия на иконку
  setupOpen.addEventListener('keydown', onSetupKeydown);

  // Функция закрытия виждета по нажатию или клику на кнопку
  var closeButton = function (nameButton) {
    nameButton.addEventListener('click', function () {
      window.enableSetup.hideSetup();
    });
    nameButton.addEventListener('keydown', function (evt) {
      if (window.assist.isActivationEvent(evt)) {
        window.enableSetup.hideSetup();
      }
    });
  };

  closeButton(setupClose);
  closeButton(setupSave);
})();

(function () {
  var coloring = function (element, property, currentColor) {
    element.style[property] = currentColor;
  };

  window.colorizeElement(wizardCoat, wizardCoatColors, 'fill', coloring);
  window.colorizeElement(wizardEyes, wizardEyesColors, 'fill', coloring);
  window.colorizeElement(setupFireball, setupFireballColors, 'background', coloring);
})();
