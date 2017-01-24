'use strict';

window.fireballSize = 22;
window.wizardSpeed = 3;
window.wizardWidth = 70;

window.getFireballSpeed = function (left) {
  if (left) {
    return 5;
  } else {
    return 2;
  }
};

window.getWizardHeight = function () {
  return 1.337 * window.wizardWidth;
};

function getWizardX(width) {
  return (width - window.wizardWidth) / 2;
}

function getWizardY(height) {
  return height * 1 / 3;
}

window.X = getWizardX;
window.Y = getWizardY;
