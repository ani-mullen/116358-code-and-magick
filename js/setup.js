'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('.invisible');
});
