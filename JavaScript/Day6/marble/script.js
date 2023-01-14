var arrimg = document.getElementsByTagName('img');
var index=0,i=0;
//function coloredmarbel()
function coloredmarbel() {
    console.log(index);
    if(index>=(arrimg.length-1))  index=0;
    else if(index<0) index = arrimg.length-1
    else index++;
   
    arrimg[index].src = "images/marble3.jpg";
}

function defaultmarbel() {
    for(var i=0;i<i<arrimg.length;i++){
        arrimg[index].src = "images/marble1.jpg";
    }
}
//coloredmarbel()
var timer;
function continu() {
    timer = setInterval(function() {
        arrimg[index].src = "images/marble1.jpg";
        coloredmarbel();
       // console.log(index);
        //arrimg[index].src = "images/marble1.jpg";
    },300)
}


continu();


function mouseover(img) {
    clearInterval(timer);
  //  img.src= "images/marble3.jpg";
}

function mouseout(img) {
    continu()
  //  img.src= "images/marble1.jpg";
}



//marble()

// function marble(){
//    // arrimg[index].src = "images/marble3.jpg";
//     setInterval(function() {
//         arrimg[index].src = "images/marble1.jpg";
//         coloredmarbel();
//         //arrimg[index].src = "images/marble1.jpg";
//     },200)
//    // arrimg[index].src = "images/marble3.jpg";
// }
//setInterval(coloredmarbel,200)