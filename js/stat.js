'use strict';

var cloud = {
  width: 420,
  height: 270,
  positionX: 100,
  positionY: 10,
  indent: 10
};

var MESSAGE_X = 120;
var MESSAGE_Y = 40;
var GAP = 50;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var STATS_X = 140;
var NAMES_Y = 260;
var NAMES_GAP = 20;

var renderCloud = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloud.positionX + this.cloud.indent, cloud.positionY + this.cloud.indent, cloud.width, cloud.height, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, cloud.positionX, cloud.positionY, cloud.width, cloud.height, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', MESSAGE_X, MESSAGE_Y);
  ctx.fillText('Список результатов:', MESSAGE_X, MESSAGE_Y + 20);

  var maxTime = Math.round(getMaxElement(times));

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = Math.floor(Math.random() * 101);
      ctx.fillStyle = 'hsl(240, ' + saturation + '%, 50%)';
    }

    var barHeight = (BAR_MAX_HEIGHT * times[i]) / maxTime;
    var statsPositionX = STATS_X + (BAR_WIDTH + GAP) * i;
    var statsPositionY = NAMES_Y - NAMES_GAP - barHeight;

    ctx.fillRect(statsPositionX, statsPositionY, BAR_WIDTH, barHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), statsPositionX, statsPositionY - 5);
    ctx.fillText(names[i], statsPositionX, NAMES_Y);
  }
};
