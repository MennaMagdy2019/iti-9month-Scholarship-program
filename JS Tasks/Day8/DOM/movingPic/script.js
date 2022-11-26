var arr = ["images/icon1.gif" , "images/icon2.gif" , "images/TOP.JPG"] 
var firstImg;

function movingPic(){
    
//firest line img
firstImg = document.createElement("div");
firstImg.setAttribute("id","firstImg")
firstImg.style.borderColor = "red";
firstImg.style.borderStyle = "solid";
firstImg.style.width = "300px";
firstImg.style.height = "300px";
firstImg.style.position = "relative";

var l1,l2,t;
//movingPic
var arrImg;
for(var i=0;i<arr.length;i++){
   //img
    arrImg = document.createElement("img");
    arrImg.setAttribute("src",arr[i]);
    arrImg.setAttribute("alt","image");
    arrImg.style.position = "absolute";
    
    // arrImg.setAttribute("width","150");
    // arrImg.setAttribute("height","140");
    // arrImg.setAttribute("value",(i+1));
    
    firstImg.appendChild(arrImg)
}
document.body.append(firstImg)

var flag=1;
//button
   //input
    stopbtn = document.createElement("input");
   stopbtn.setAttribute("type","button");
   stopbtn.setAttribute("id","stpbtn")
   stopbtn.setAttribute("value","stop");
//  stopbtn = document.createElement("button")
//  stopbtnContent = document.createTextNode("stop")
//  gobtnContent = document.createTextNode("go")
 //stopbtn.append(stopbtnContent);
 
 document.body.append(stopbtn)



resetbtn = document.createElement("button")
resetbtnContent = document.createTextNode("reset")
resetbtn.setAttribute("id","restbtn")
resetbtn.append(resetbtnContent);
document.body.append(resetbtn)

}
movingPic()
var w=getComputedStyle(firstImg).width;
var h= parseInt(getComputedStyle(firstImg).height);

var images = document.getElementsByTagName("img")
images[0].style.left = "100px";
images[1].style.top = "130px";
images[2].style.top = "130px";
images[1].style.left = "0px";
images[2].style.right = "0px";
t=0;
var timer1,timer2;
function incr(){
    timer1 =setInterval(function() {
        console.log(t);
       t+=5;
        images[0].style.top = t+"px";
        images[1].style.left = t+"px";
        images[2].style.right = t+"px";
        if(t==245){
            clearInterval(timer1);
            dec();
            }
    }, 50);
}
incr();

//dec();
function dec(){
   // clearInterval(timer1)
    timer2=setInterval(function() {
        t-=5;
        images[0].style.top = t+"px";
        images[1].style.left = t+"px";
        images[2].style.right = t+"px";
        console.log(t);
        if(t==-5){
            t==0;   
           clearInterval(timer2)
           incr();
        }
            
},100)
}

//stop button function
stpbtn.onclick = function () {
   
 
        clearInterval(timer1);
        clearInterval(timer2);
        if(stpbtn.value == "stop"){stpbtn.value = "go"}
        else{
            stpbtn.value = "stop";
            incr();
        }
}
//go button

//reset button function
restbtn.onclick = function () {
    clearInterval(timer1);
    clearInterval(timer2);
   incr()
}
