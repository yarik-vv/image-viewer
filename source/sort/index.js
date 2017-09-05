import loadImages from '../loadImages';

function sort (criterion, data){
  let newImages = [];
  //let criterion = event.target.id;

  for (let i = 0; i < data.length; i++) {

    if(criterion === 'large' && data[i].height > 1500){
      newImages.push(data[i]);
    } 
    
    if(criterion === 'medium' && data[i].height < 1499 && data[i].height > 800){
      newImages.push(data[i]);
    } 
    
    if(criterion === 'small' && data[i].height < 799){
      newImages.push(data[i]);
    }

    if(criterion === 'author')
    {
      console.log('author suka blat');
    }
  }
  
  loadImages(newImages, 0);
  console.log(newImages);
}

// function sortAuthor(criterion, data){
  
  
// }

export default sort;