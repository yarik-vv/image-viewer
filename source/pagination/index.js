import { loadImages, loadAuthors, loadPagination } from '../load';
const paginationBlock = document.getElementById('pagination');

function pagination(page, data) {
  loadImages(data, +page.id);
}

export default pagination;
