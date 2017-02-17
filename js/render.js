'use strict';

window.render = (function () {
  var wizardTemplate = document.querySelector('.setup-wizard-wrap');

  return function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    var name = document.createElement('span');
    name.title = wizard.name;
    wizardElement.appendChild(name);

    var svgElement = wizardElement.children[0];
    svgElement.style.position = 'static';
    svgElement.style.width = 50;
    svgElement.style.height = 50;

    var wizardCoat = svgElement.querySelector('#wizard-coat');
    wizardCoat.style.fill = wizard.colorCoat;
    wizardCoat.tabIndex = '-1';
    var wizardEyes = svgElement.querySelector('#wizard-eyes');
    wizardEyes.style.fill = wizard.colorEyes;
    wizardEyes.tabIndex = '-1';

    (function () {
      var ids = svgElement.querySelectorAll('*');
      for (var i = 0; i < ids.length; i++) {
        ids[i].setAttribute('class', ids[i].getAttribute('id'));
        ids[i].removeAttribute('id');
      }
    })();

    return wizardElement;
  };

})();
