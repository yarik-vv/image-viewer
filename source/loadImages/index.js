var list = document.getElementById('list');

function loadImages(data, start) {
  //если по какой-то причине нету, то выдаем ошибку
  if(data.length === 0){
    list.innerHTML = '<h3 class="error">Ошибка при загрузке содержимого...</h3>';
    return;
  }

  list.innerHTML = '';

  for (let i = start; i < start + 20; i++) {
    //выходим из цыкла когда обьекты закончились
    if(data[i] === undefined){
      return;
    }

    let newImage = document.createElement('img');
    newImage.src = 'https://unsplash.it/' + data[i].filename;
    newImage.className = 'list-item';
    newImage.id = data[i].id;

    list.appendChild(newImage);
  }
}

module.exports = loadImages;
