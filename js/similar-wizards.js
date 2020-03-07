'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

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
        name: window.util.randomArrayElement(WIZARD_NAMES) + ' ' + window.util.randomArrayElement(WIZARD_SURNAMES),
        coatColor: window.util.randomArrayElement(COAT_COLORS),
        eyesColor: window.util.randomArrayElement(EYES_COLORS)
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
})();
