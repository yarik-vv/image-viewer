'use strict';

import scss from './scss/index.scss';
import AJAXrequest from './request';
import { loadImages, loadAuthors, loadPagination } from './load';
import { filterSize, filterAuthor } from './filters';

const filterSizeBlock = document.getElementById('filter-size');

let originalData = null;
let currentData = null;

AJAXrequest('https://unsplash.it/list', 'GET').then(
  result => {
    originalData = JSON.parse(result);
    originalData.splice(0, 357);
    console.log(originalData);
    currentData = originalData;

    loadImages(currentData, 0);
    loadPagination(currentData);
    loadAuthors(currentData, 0);

    filterSize(document.getElementById('large').id, currentData);
    for (let i = 0; i < filterSizeBlock.childNodes.length; i++) {
      if (i % 2 !== 0) {
        filterSizeBlock.childNodes[i].firstChild.onclick = event => {
          filterSize(event.target.id, originalData);
        };
      }
    }
  },
  error => {
    console.log(error);
  }
);
