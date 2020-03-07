'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var isEscEvent = function (evt, action) {
    if (evt.key === ESC_KEY) {
      action();
    }
  };

  var isEscEventTargetExclude = function (evt, targetInput, action) {
    if (evt.key === ESC_KEY && evt.target !== targetInput) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.key === ENTER_KEY) {
      action();
    }
  };

  // Функция получения следующего индекса массива
  var nextIndex = function (index, length) {
    return (+index + 1) % length;
  };

  // Функция нахождения рандомного элемента массива
  var randomArrayElement = function (elements) {
    return elements[Math.floor(Math.random() * elements.length)];
  };

  window.util = {
    isEscEvent: isEscEvent,
    isEscEventTargetExclude: isEscEventTargetExclude,
    isEnterEvent: isEnterEvent,
    nextIndex: nextIndex,
    randomArrayElement: randomArrayElement,
  };
})();
