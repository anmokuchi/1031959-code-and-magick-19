'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;

  // Найти элемент, куда вставлять магов
  var similarListElement = document.querySelector('.setup-similar-list');

  // Найти шаблон для похожих магов
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  // Функция отрисовки магов на странице
  var renderWizard = function (wizard, template) {
    var wizardElement = template.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // Функция добавления магов на страницу
  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      fragment.appendChild(renderWizard(wizards[Math.floor(Math.random() * wizards.length)], similarWizardTemplate));
    }
    similarListElement.appendChild(fragment);

    // Показать блок с похожими магами
    document.querySelector('.setup-similar').classList.remove('hidden');
  });
})();
