var arr=["images/1.jpg","images/2.jpg" , "images/3.jpg" , "images/4.jpg" ,"images/5.jpg" , "images/6.jpg"];
 var Img = document.querySelector("img");
 var arrlen = arr.length-1;
 var cur=0;

 // function slidImg
var timer;
 function slideshow(){
    timer =setInterval(nextImg,500);
 }
 
//function stopSliding
function stopSliding( ) {
    clearInterval(timer);
    Img.src=arr[cur];
}

//function nextImg
function nextImg() {
    ++cur;
    if(cur > arrlen )   cur=0;
    else if(cur < 0) cur=arrlen

    Img.src=arr[cur];
}
// function prevImg
function prevImg() {
    
    --cur;
    if(cur >= arrlen )  cur=0;
    else if(cur < 0) cur=arrlen
   
    Img.src=arr[cur];

   // console.log(cur);

}


/*
function slidImg() {
// if(cur<arrlen) ++cur ;
// else cur=0;

// Img.src=arr[cur];

 
} */