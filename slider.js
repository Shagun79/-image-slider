let flag = 0;


  function controller(x){
      flag = flag + x;
       slidesshow(flag);
        

  }


function slidesshow(num) {
  let slides = document.getElementsByClassName('slide1');
   
    if(num == slides.length){
         flag=0;
         num=0
    }
      else if(num<0){
           flag =  slides.length-1;
           num  =  slides.length-1;

      }


    for(let y of slides){
        y.style.display= "none";

   }
    console.log(slides);
      slides[num].style.display = "block";
  
    
}
