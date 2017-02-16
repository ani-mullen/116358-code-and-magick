'use strict';

window.enableSetup = (function () {
  var setup = document.querySelector('.setup');
  var onSetupClose = null;

  // Фунция показа виджета
  var showSetupWidget = function () {
    setup.classList.remove('invisible');
    document.addEventListener('keydown', onKeyDownEsc);
  };

  // Фунция скрытия виджета
  var hideSetupWidget = function () {
    setup.classList.add('invisible');
    document.removeEventListener('keydown', onKeyDownEsc);

    if (typeof onSetupClose === 'function') {
      onSetupClose();
    }
  };

  var onKeyDownEsc = function (evt) {
    if (window.assist.isDeactivationEvent(evt)) {
      hideSetupWidget();
    }
  };

  return {
    openSetup: showSetupWidget,
    hideSetup: hideSetupWidget,
    focusSetupOpen: onSetupClose
  };
})();
