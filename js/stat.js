'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var MESSAGE_X = 120;
var MESSAGE_Y = 40;
var GAP = 50;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var STATS_X = 140;
var NAMES_Y = 260;
var NAMES_GAP = 20;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', MESSAGE_X, MESSAGE_Y);
  ctx.fillText('Список результатов:', MESSAGE_X, MESSAGE_Y + 20);

  var maxTime = Math.round(getMaxElement(times));

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
      ctx.fillStyle = 'hsl(240, 100%, ' + Math.round(Math.random() * 100) + '%)';
      }
  ctx.fillRect(STATS_X + (BAR_WIDTH + GAP) * i, NAMES_Y - NAMES_GAP - ((BAR_MAX_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_MAX_HEIGHT * times[i]) / maxTime);
  ctx.fillStyle = '#000';
  ctx.fillText(Math.round(times[i]), STATS_X + (BAR_WIDTH + GAP) * i, NAMES_Y - NAMES_GAP * 1.2 - ((BAR_MAX_HEIGHT * times[i]) / maxTime));
  ctx.fillText(names[i], STATS_X + (BAR_WIDTH + GAP) * i, NAMES_Y);
 }
};
