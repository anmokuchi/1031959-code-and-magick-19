'use strict';

(function () {
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var SAVE_URL = 'https://js.dump.academy/code-and-magick';

  var StatusCode = {
    OK: 200
  };

  var TIMEOUT_IN_MS = 10000; // 10 s;

  var getXhrSetup = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = TIMEOUT_IN_MS;

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    return xhr;
  };

  // Функция загрузки данных волшебников с сервера
  var downloadData = function (onLoad, onError) {
    var xhr = getXhrSetup(onLoad, onError);
    xhr.open('GET', LOAD_URL);
    xhr.send();
  };

  // Функция загрузки данных о персонаже на сервер
  var uploadForm = function (data, onLoad, onError) {
    var xhr = getXhrSetup(onLoad, onError);
    xhr.open('POST', SAVE_URL);
    xhr.send(data);
  };

  window.backend = {
    load: downloadData,
    save: uploadForm,
  };
})();
