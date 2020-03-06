'use strict';

(function () {
  // Переменные с окном настроек пользователя
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');
  var dialogHandle = setup.querySelector('.upload');

  // Обработчик закрытия окна по нажатию на Escape
  var popupEscPressHandler = function (evt) {
    window.util.isEscEventTargetExclude(evt, userNameInput, closePopup);
  };

  // Функция открытия окна
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
  };

  // Функция закрытия окна
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', popupEscPressHandler);
  };

  // Обработчик открытия окна настроек по клику (закрывается при нажатии Escape)
  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  // Обработчик открытия окна настроек по нажатию на Enter
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  // Обработчик закрытия окна настроек по клику
  setupClose.addEventListener('click', function () {
    closePopup();
  });

  // Обработчик закрытия окна настроек по нажатию на Enter
  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  // Обработчик перетаскивания диалогового окна
  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
