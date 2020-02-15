'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_AMOUNT = 4;

// Функция нахождения рандомного элемента массива
var getRandomElement = function (elements) {
  return Math.floor(Math.random() * elements.length);
};

// Показать окно настроек пользователя
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Показать блок с похожими магами
document.querySelector('.setup-similar').classList.remove('hidden');

// Найти элемент, куда вставлять магов
var similarListElement = document.querySelector('.setup-similar-list');

// Найти шаблон для похожих магов
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// Собрать параметры магов
var getWizards = function (wizardsAmount) {
  var wizards = [];
  for (var i = 0; i < wizardsAmount; i++) {
    wizards.push({
      name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
      coatColor: getRandomElement(COAT_COLORS) + '',
      eyesColor: getRandomElement(EYES_COLORS) + ''
    });
  }
  return wizards;
};

// Цикл отрисовки шаблона
for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[i];

  similarListElement.appendChild(wizardElement);
}
