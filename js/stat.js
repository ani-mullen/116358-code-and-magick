'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = 0;
  for (var i = 0; i < times.length; i++ ) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var chartHeight = 150;
  var chartWidth = 40;
  var chartStart = 150;
  var step = chartHeight / max;
  var distance = chartWidth + 50;

  for (i = 0; i < times.length; i++) {

    var name = names[i];
    time = times[i];

    var result = step * time;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgba(0, 0,', 172, ',', (Math.random() * 1).toFixed(1), ')'].join('');
    }

    ctx.fillRect(chartStart + distance * i, 240, chartWidth, -result);
    ctx.fillStyle = '#000';
    ctx.fillText(time.toFixed(0), chartStart + distance * i, 230 - result);
    ctx.fillText(name, chartStart + distance * i, 110 + chartHeight);
  }
};
var canvas = document.querySelector('canvas');
window.renderStatistics(canvas.getContext('2d'), ['Вы', 'Дипп', 'Мейбл', 'Стен'], [2032, 3187, 2428, 4000]);
