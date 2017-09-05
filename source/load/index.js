import pagination from '../pagination';

const list = document.getElementById('list');
const authorList = document.getElementById('authors');
const paginationBlock = document.getElementById('pagination');

function loadImages(data, start) {
  //если по какой-то причине нету, то выдаем ошибку
  if (data.length === 0) {
    list.innerHTML = '<h3 class="error">Ошибка при загрузке содержимого...</h3>';
    return;
  }

  list.innerHTML = '';

  for (let i = start; i < start + 20; i++) {
    //выходим из цыкла когда обьекты закончились
    if (data[i] === undefined) {
      return;
    }

    let newImage = document.createElement('img');
    newImage.src = 'https://unsplash.it/' + data[i].filename;
    newImage.className = 'list-item';
    newImage.id = data[i].id;

    list.appendChild(newImage);
  }
}

function loadAuthors(data, start) {
  //если по какой-то причине нету, то выходим
  if (data.length === 0) {
    return;
  }

  let authors = [];
  authorList.innerHTML = '';

  for (let i = start; i < start + 20; i++) {
    //выходим из цикла когда обьекты закончились
    if (data[i] === undefined) {
      return;
    }

    let regexp = new RegExp(data[i].author);
    let str = authors.toString();

    if (!regexp.test(str)) {
      authors.push(data[i].author);

      let newAuthor = document.createElement('li');
      newAuthor.innerHTML = '<input type="checkbox" name="filterAuthor" value="' +
                            data[i].author + '">' + data[i].author;
      authorList.appendChild(newAuthor);
    }
  }
}

function loadPagination(data) {
  paginationBlock.innerHTML = '';
  let s = 1;
  
  for (let i = 0; i < data.length; i += 20) {
    let newPage = document.createElement('li');
    newPage.id = i;
    newPage.innerText = s;
    s++;

    newPage.onclick = event => {
      pagination(event.target, data);
    };
    paginationBlock.appendChild(newPage);
  }
}

export { loadImages, loadAuthors, loadPagination };
