'use strict';

var fireballSize = 22;
var getFireballSpeed = function (left) {
  if (left) {
    return 5;
  } else {
    return 2;
  }
};
var wizardSpeed = 3;
var wizardWidth = 70;
var getWizardHeight = function () {
  return 1.337 * wizardWidth;
};

function getWizardX(width) {
  return (width - wizardWidth) / 2;
}

function getWizardY(height) {
  return height * 1 / 3;
}
