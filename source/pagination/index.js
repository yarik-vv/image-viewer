import { loadImages, loadAuthors, loadPagination } from '../load';
const paginationBlock = document.getElementById('pagination');

function pagination(page, data) {
  loadImages(data, +page.id);
  loadAuthors(data, +page.id);


  if (page.nextSibling === null || page.nextSibling.nextSibling === null) {
    document.querySelector('.active-page').className = ' ';
    page.className = 'active-page';
    return;
  }
  let last = page.nextSibling.nextSibling;
  let first = null;

  if (page.previousSibling !== null) {
    first = page.previousSibling.previousSibling;
  }

  if (page.previousSibling !== null && page.previousSibling.style.display === 'none') {
    page.previousSibling.style.display = 'flex';   
    if (first !== null) {
      first.style.display = 'flex';
      last.nextSibling.style.display = 'none';
    }
    last.nextSibling.nextSibling.style.display = 'none';
  }

  if (first !== null && first.style.display === 'none') {
    page.previousSibling.style.display = 'flex';
    first.style.display = 'flex';
    last.nextSibling.style.display = 'none';
    last.nextSibling.nextSibling.style.display = 'none';
  }

  if (last.style.display === 'none') {
    first.previousSibling.style.display = 'none';
    last.style.display = 'flex';
  }

  if (page.nextSibling.style.display === 'none') {
    first.previousSibling.previousSibling.style.display = 'none';
    first.previousSibling.style.display = 'none';
    last.style.display = 'flex';
    page.nextSibling.style.display = 'flex';
  }

  document.querySelector('.active-page').className = ' ';
  page.className = 'active-page';
}

function prevPage() {
  let currentPage = document.querySelector('.active-page');

  if (currentPage.previousSibling !== null) {
    let first = currentPage.previousSibling.previousSibling;
    let last = currentPage.nextSibling;

    if (+currentPage.id > 20 && first.previousSibling !== null) {
      last.nextSibling.style.display = 'none';
      first.previousSibling.style.display = 'flex';
    }

    currentPage.previousSibling.click();
    currentPage.previousSibling.className = 'active-page';
    currentPage.className = ' ';
  }
}

function nextPage() {
  let currentPage = document.querySelector('.active-page');

  if (currentPage.nextSibling !== null) {
    let prev = currentPage.previousSibling;
    let last = currentPage.nextSibling.nextSibling;

    if (+currentPage.id > 20 && prev.previousSibling !== null) {
      prev.previousSibling.style.display = 'none';
      last.nextSibling.style.display = 'flex';
    }

    currentPage.nextSibling.click();
    currentPage.nextSibling.className = 'active-page';
    currentPage.className = ' ';
  }
}

export { pagination, prevPage, nextPage };
