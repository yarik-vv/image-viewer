'use strict';

import scss from './scss/index.scss';
import AJAXrequest from './request';
import loadImages from './loadImages';

let images = null;
AJAXrequest('https://unsplash.it/list', 'GET').then(
  function(result) {
    images = JSON.parse(result);
    images.splice(0, 555);
    loadImages(images, 0);
    console.log(images)
  },
  function(error) {
    console.log(error);
  }
);
