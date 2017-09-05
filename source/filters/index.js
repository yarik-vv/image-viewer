import { loadImages, loadAuthors } from '../load';
import initData from '../build.js';

const authorFilter = document.getElementById('authors');

function filterSize (element, data){
  let newImages = [];

  for (let i = 0; i < data.length; i++) {
    if(element.id === 'large' && data[i].height > 1500){
      newImages.push(data[i]);
    } else if(element.id === 'medium' && data[i].height < 1499 && data[i].height > 800){
      newImages.push(data[i]);
    } else if(element.id === 'small' && data[i].height < 799){
      newImages.push(data[i]);
    } 
  }
  
  loadImages(newImages, 0);
  loadAuthors(newImages, 0);
  //initData(newImages);

  for (let i = 0; i < authorFilter.childNodes.length; i++) {
    authorFilter.childNodes[i].firstChild.onclick = function(event) {
      //console.log(newImages);
      filterAuthor(newImages);
    }
  }
}

function filterAuthor(data) {
  let newImages = [];
  let checked = 0;
  
  for (let i = 0; i < authorFilter.childNodes.length; i++) {
    if(authorFilter.childNodes[i].firstChild.checked){
      checked++;
      for (let s = 0; s < data.length; s++) {
        if (authorFilter.childNodes[i].firstChild.value === data[s].author) {
          newImages.push(data[s]);
        }
      }
    }
  }
  //console.log(checked);
  if(checked === 0){
    newImages = data;
  }
  //console.log(newImages);
  loadImages(newImages, 0);
  // element.checked = true;
  // initData(newImages);
}

export { filterSize, filterAuthor };
