'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // Переменные с настройками цвета персонажа
  var setup = document.querySelector('.setup');
  var setupPlayer = setup.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardCoatInput = setupPlayer.querySelector('input[name="coat-color"]');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var wizardEyesInput = setupPlayer.querySelector('input[name="eyes-color"]');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = setupPlayer.querySelector('input[name="fireball-color"]');
  var form = setup.querySelector('.setup-wizard-form');

  // Переменные с начальным индексом
  wizardCoat.dataset.index = 0;
  wizardEyes.dataset.index = 0;
  wizardFireball.dataset.index = 0;

  // Функция изменения цвета заливки
  var changeColor = function (options) {
    var element = options.element;
    var elementInput = options.elementInput;
    var colors = options.colors;
    var bgType = options.bgType || 'fill';

    var colorIndex = element.dataset.index;
    var newColorIndex = window.util.nextIndex(colorIndex, colors.length);
    element.dataset.index = newColorIndex;

    var newColor = colors[newColorIndex];

    element.style[bgType] = newColor;
    elementInput.value = newColor;
  };

  // Обработчик изменения цвета плаща мага
  wizardCoat.addEventListener('click', function () {
    changeColor({
      element: wizardCoat,
      elementInput: wizardCoatInput,
      colors: COAT_COLORS,
    });
  });

  // Обработчик изменения цвета глаз мага
  wizardEyes.addEventListener('click', function () {
    changeColor({
      element: wizardEyes,
      elementInput: wizardEyesInput,
      colors: EYES_COLORS,
    });
  });

  // Обработчик изменения цвета файербола
  wizardFireball.addEventListener('click', function () {
    changeColor({
      element: wizardFireball,
      elementInput: wizardFireballInput,
      colors: FIREBALL_COLORS,
      bgType: 'background',
    });
  });

  // Обработчик отправки данных
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, /* тут стиль окна с ошибкой */);
    evt.preventDefault();
  });
})();
