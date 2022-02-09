function showImage(image) 
{
  var largeImg = document.getElementById('large_img');
 
  largeImg.src = image;

  console.log(image)
  var about;

  if(image.includes("cookie"))
  {
      document.getElementById('imgDescr').innerHTML="Home Made Chocolate  Chip Cookies";
     
  }
  if(image.includes("Fruit"))
  {
      document.getElementById('imgDescr').innerHTML="Delicious strawberry,  and blueberry fruit";
  }   
  if(image.includes("Pasta"))
  {
      document.getElementById('imgDescr').innerHTML="Home Made Pasta";
      
  }
}

               



    
               

               

   

