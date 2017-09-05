import { loadImages, loadAuthors, loadPagination } from '../load';

const authorFilter = document.getElementById('authors');

function filterSize(selected, data) {
  let newImages = [];

  for (let i = 0; i < data.length; i++) {
    if (selected === 'large' && data[i].height > 1500) {
      newImages.push(data[i]);
    } else if ( selected === 'medium' && data[i].height < 1499 && data[i].height > 800) {
      newImages.push(data[i]);
    } else if (selected === 'small' && data[i].height < 799) {
      newImages.push(data[i]);
    }
  }

  loadImages(newImages, 0);
  loadPagination(newImages);
  loadAuthors(newImages, 0);

  for (let i = 0; i < authorFilter.childNodes.length; i++) {
    authorFilter.childNodes[i].firstChild.onclick = event => {
      filterAuthor(newImages);
    };
  }
}

function filterAuthor(data) {
  let newImages = [];
  let checked = 0;

  for (let i = 0; i < authorFilter.childNodes.length; i++) {
    if (authorFilter.childNodes[i].firstChild.checked) {
      checked++;
      for (let s = 0; s < data.length; s++) {
        if (authorFilter.childNodes[i].firstChild.value === data[s].author) {
          newImages.push(data[s]);
        }
      }
    }
  }

  if (checked === 0) {
    newImages = data;
  }

  loadImages(newImages, 0);
  loadPagination(newImages);
}

export { filterSize, filterAuthor };
