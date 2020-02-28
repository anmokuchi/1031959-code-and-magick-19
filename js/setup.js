'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var WIZARDS_AMOUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Переменные с окном настроек пользователя
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

// Обработчик закрытия окна по нажатию на Escape
var popupEscPressHandler = function (evt) {
  if (evt.target === userNameInput) {
    evt.stopPropagation();
  } else if (evt.key === ESC_KEY) {
    closePopup();
  }
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
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

// Обработчик закрытия окна настроек по клику
setupClose.addEventListener('click', function () {
  closePopup();
});

// Обработчик закрытия окна настроек по нажатию на Enter
setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

// Переменные с настройками цвета персонажа
var setupPlayer = setup.querySelector('.setup-player');
var wizardCoat = setupPlayer.querySelector('.wizard-coat');
var wizardCoatInput = setupPlayer.querySelector('input[name="coat-color"]');
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var wizardEyesInput = setupPlayer.querySelector('input[name="eyes-color"]');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var wizardFireballInput = setupPlayer.querySelector('input[name="fireball-color"]');

// Переменные с начальным индексом
var coatColorIndex = 0;
var eyesColorIndex = 0;
var fireballColorIndex = 0;

// Функция получения следующего индекса массива
var getNextIndex = function (index, elements) {
  return (index + 1) % elements.length;
};

// Функция изменения цвета заливки
var changeColor = function (element, elementInput, colorIndex, colors) {
  var newColor = colors[colorIndex];
  element.style.fill = newColor;
  elementInput.value = newColor;
};

// Функция изменения цвета фона
var changeBackgroundColor = function (element, elementInput, colorIndex, colors) {
  var newColor = colors[colorIndex];
  element.style.background = newColor;
  elementInput.value = newColor;
};

// Обработчик изменения цвета плаща мага
var wizardCoatClickHandler = function () {
  coatColorIndex = getNextIndex(coatColorIndex, COAT_COLORS);
  changeColor(wizardCoat, wizardCoatInput, coatColorIndex, COAT_COLORS);
};

// Обработчик изменения цвета глаз мага
var wizardEyesClickHandler = function () {
  eyesColorIndex = getNextIndex(eyesColorIndex, EYES_COLORS);
  changeColor(wizardEyes, wizardEyesInput, eyesColorIndex, EYES_COLORS);
};

// Обработчик изменения цвета файербола
var wizardFireballClickHandler = function () {
  fireballColorIndex = getNextIndex(fireballColorIndex, FIREBALL_COLORS);
  changeBackgroundColor(wizardFireball, wizardFireballInput, fireballColorIndex, FIREBALL_COLORS);
};

// Применение обработчиков по клику
wizardCoat.addEventListener('click', wizardCoatClickHandler);
wizardEyes.addEventListener('click', wizardEyesClickHandler);
wizardFireball.addEventListener('click', wizardFireballClickHandler);

// Функция нахождения рандомного элемента массива
var getRandomArrayElement = function (elements) {
  return elements[Math.floor(Math.random() * elements.length)];
};

// Найти элемент, куда вставлять магов
var similarListElement = document.querySelector('.setup-similar-list');

// Найти шаблон для похожих магов
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// Собрать массив с параметрами магов
var getWizards = function (wizardsAmount) {
  var wizards = [];
  for (var i = 0; i < wizardsAmount; i++) {
    wizards.push({
      name: getRandomArrayElement(WIZARD_NAMES) + ' ' + getRandomArrayElement(WIZARD_SURNAMES),
      coatColor: getRandomArrayElement(COAT_COLORS),
      eyesColor: getRandomArrayElement(EYES_COLORS)
    });
  }
  return wizards;
};

// Функция отрисовки магов на странице
var renderWizard = function (wizard, template) {
  var wizardElement = template.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Функция добавления магов во фрагмент и затем на страницу
var addWizards = function () {
  var wizards = getWizards(WIZARDS_AMOUNT);
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i], similarWizardTemplate));
  }
  similarListElement.appendChild(fragment);
};

// Вызов функции добавления магов
addWizards();

// Показать блок с похожими магами
document.querySelector('.setup-similar').classList.remove('hidden');
