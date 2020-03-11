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
  var onSuccess = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      fragment.appendChild(renderWizard(wizards[Math.floor(Math.random() * wizards.length)], similarWizardTemplate));
    }
    similarListElement.appendChild(fragment);

    // Показать блок с похожими магами
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  // Внешний вид сообщения об ошибке
  var onErrorMessageStyle = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onSuccess, onErrorMessageStyle);
})();
