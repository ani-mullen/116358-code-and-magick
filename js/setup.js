'use strict';

var setup = document.querySelector('.setup');
var userName = setup.querySelector('.setup-user-name');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = setup.querySelector('#wizard-coat');
var wizardEyes = setup.querySelector('#wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');
var setupSave = setup.querySelector('.setup-submit');

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

// Функция определения ENTER_KEY_CODE
window.isActivateEvent = (function () {
  var ENTER_KEY_CODE = 13;
  return function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };
})();

// Обработчик нажатий на клавиатуру в .setup
var setupKeydownHandler = (function () {
  var ESCAPE_KEY_CODE = 27;
  return function (evt) {
    if (evt.keyCode === ESCAPE_KEY_CODE) {
      setup.classList.add('invisible');
    }
  };
})();

// Фунция показа виджета
var showSetupWidget = function () {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
};

// Фунция скрытия виджета
var hideSetupWidget = function () {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
};

// Функция изменения значения Aria роли
var statusAriaRole = function (item) {
  var pressed = (item.getAttribute('aria-pressed') === 'true');
  item.setAttribute('aria-pressed', !pressed);
};

// Обработчик клика на иконку
setupOpen.addEventListener('click', function () {
  showSetupWidget();
  statusAriaRole(setupOpen);
});

// Обработчик нажатия на иконку
setupOpen.addEventListener('keydown', function (evt) {
  if (window.isActivateEvent(evt)) {
    showSetupWidget();
    statusAriaRole(setupOpen);
  }
});

// Функция закрытия виждета по нажатию или клику на кнопку
var closeButton = function (nameButton) {
  nameButton.addEventListener('click', function () {
    hideSetupWidget();
    statusAriaRole(nameButton);
  });
  nameButton.addEventListener('keydown', function (evt) {
    if (window.isActivateEvent(evt)) {
      hideSetupWidget();
      statusAriaRole(nameButton);
    }
  });
};

closeButton(setupClose);
closeButton(setupSave);

window.colorizeElement(wizardCoat, wizardCoatColors, 'fill');
window.colorizeElement(wizardEyes, wizardEyesColors, 'fill');
window.colorizeElement(setupFireball, setupFireballColors, 'background');
