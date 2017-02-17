'use strict';

var URL_DATA = 'https://intensive-javascript-server-myophkugvq.now.sh/code-and-magick/data';

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

  setupSave.style.bottom = '10px';

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

    setTimeout(function () {
      window.load(URL_DATA, window.showSimilarWizards);
    }, 5000);
  };

  window.colorizeElement(wizardCoat, wizardCoatColors, 'fill', coloring);
  window.colorizeElement(wizardEyes, wizardEyesColors, 'fill', coloring);
  window.colorizeElement(setupFireball, setupFireballColors, 'background', coloring);
})();

(function () {
  var setup = document.querySelector('.setup');
  var setupSimilar = document.createElement('div');
  setupSimilar.className = 'setup-similar';
  setupSimilar.style.transform = 'translate(0, 400px)';
  setupSimilar.style.display = 'flex';
  setupSimilar.style.flexWrap = 'wrap';
  setupSimilar.style.justifyContent = 'space-around';
  setup.appendChild(setupSimilar);

  window.showSimilarWizards = function (data) {
    setupSimilar.innerHTML = '';
    var wizards = data;
    var randwizards = [];
    for (var i = 0; i < 5; i++) {
      var newWisard = window.utils.getRandomElement(wizards);
      setupSimilar.appendChild(window.render(newWisard));
      randwizards[i] = newWisard;
    }
  };
})();
