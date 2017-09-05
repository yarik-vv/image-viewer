'use strict';

import scss from './scss/index.scss';
import AJAXrequest from './request';
import loadImages from './loadImages';
import sort from './sort';

var images = null;
AJAXrequest('https://unsplash.it/list', 'GET').then(
  function(result) {
    images = JSON.parse(result);
    images.splice(0, 357);
    loadImages(images, 0);
    console.log(images)
  },
  function(error) {
    console.log(error);
  }
);

// function sort(){
//   console.log('kek');
// }

const filter = document.getElementById('filterSize');
//console.log(filter.childNodes);
for (let i = 0; i < filter.childNodes.length; i++) {
  if(i%2 !== 0){
    console.log(filter.childNodes[i]);
    filter.childNodes[i].onclick = function (event){
      sort(event.target.id, images);
    }
  }
}
