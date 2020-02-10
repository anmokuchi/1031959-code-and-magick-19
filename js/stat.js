'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 140, 260);
  ctx.fillRect(140, 90, 40, 150);

  ctx.fillText('Кекс', 230, 260);
  ctx.fillRect(230, 90, 40, 150);

  ctx.fillText('Катя', 320, 260);
  ctx.fillRect(320, 90, 40, 150);

  ctx.fillText('Игорь', 410, 260);
  ctx.fillRect(410, 90, 40, 150);
};
