'use strict';

(function () {
  // Переменные с окном настроек пользователя
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

// Обработчик закрытия окна по нажатию на Escape
var popupEscPressHandler = function(evt) {
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
})();
