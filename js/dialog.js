'use strict';

(function () {
  // Переменные с окном настроек пользователя
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');
  var dialogHandler = setup.querySelector('.upload');

  // Координаты окна по умолчанию
  var SETUP_DEFAULT_X = '';
  var SETUP_DEFAULT_Y = '';

  // Функция присваивания диалоговому окну координат по умолчанию
  var setDefaultSetupCoordinates = function () {
    setup.style.top = SETUP_DEFAULT_X;
    setup.style.left = SETUP_DEFAULT_Y;
  };

  // Обработчик закрытия окна по нажатию на Escape
  var popupEscPressHandler = function (evt) {
    window.util.isEscEventTargetExclude(evt, userNameInput, closePopup);
  };

  // Функция открытия окна
  var openPopup = function () {
    setDefaultSetupCoordinates();
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
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
