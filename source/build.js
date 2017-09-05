'use strict';

import scss from './scss/index.scss';
import AJAXrequest from './request';
import { loadImages, loadAuthors } from './load'; 
import { filterSize, filterAuthor } from './filters';

const filter = document.getElementById('filter-size');
const authorFilter = document.getElementById('authors');

let originalData = null;
let lastData = null;
let currentData = null;

function initData(newData){
  lastData = currentData;
  currentData = newData;
  console.log('dannie pomenal', currentData);
}

AJAXrequest('https://unsplash.it/list', 'GET').then(
  function(result) {
    originalData = JSON.parse(result);
    originalData.splice(0, 357);
    initData(originalData);

    loadImages(currentData, 0);
    loadAuthors(currentData, 0);
    filterSize(document.getElementById('large'), currentData);

    for (let i = 0; i < filter.childNodes.length; i++) {
      if(i%2 !== 0){
        //console.log(filter.childNodes[i]);
        filter.childNodes[i].onclick = function (event){
          filterSize(event.target, originalData);
        }
      }
    }




















  },
  function(error) {
    console.log(error);
  }
);

//init filter images
// for (let i = 0; i < filter.childNodes.length; i++) {
//   if(i%2 !== 0){
//     //console.log(filter.childNodes[i]);
//     filter.childNodes[i].onclick = function (event){
//       filterSize(event.target, original);
//     }
//   }
// }

//init filter images
// for (let i = 0; i < authorFilter.childNodes.length; i++) {
//   if(i%2 !== 0){
//     console.log(authorFilter.childNodes[i]);
//     authorFilter.childNodes[i].onclick = function (event){
//       filterSize(event.target.className, images);
//     }
//   }
// }

export default initData;
