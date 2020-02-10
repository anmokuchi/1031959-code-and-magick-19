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
var STATS_Y = 90;
var NAMES_Y = 260;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', MESSAGE_X, MESSAGE_Y);
  ctx.fillText('Список результатов:', MESSAGE_X, MESSAGE_Y + 20);

  ctx.fillStyle = '#000';

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  for (var i = 0; i < players.length; i++) {
  ctx.fillText(players[i], STATS_X + (BAR_WIDTH + GAP) * i, NAMES_Y);
  ctx.fillRect(STATS_X + (BAR_WIDTH + GAP) * i, STATS_Y, BAR_WIDTH, BAR_MAX_HEIGHT);
  }
};
