//сам ajax запрос
function AJAXrequest(url, method) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();

    //обработываем ответ
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(this.responseText);
        } else {
          reject(this.responseText);
        }
      }
    };

    //открываем запрос
    request.open(method, url, true);

    //посылаем запрос
    request.send();
  });
}

module.exports = AJAXrequest;