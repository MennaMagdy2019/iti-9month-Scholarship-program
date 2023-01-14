var arr = ["images/gws.jpg" , "images/gws2.jpg" , "images/gws3.jpg" , "images/gwsf.jpg","images/gwsf2.jpg","images/gwsf3.jpg"]
var imgchecked,nametxt,arrImg =[];
var btnElem,btnContent;
var win;

//GeneratorCard
function createCardGen(){
    
var Cardgen = document.createElement("div");
Cardgen.setAttribute("id","Cardgenerator")
document.body.append(Cardgen)
Cardgenerator.style.textAlign="center"
// Cardgenerator.style.margin = "auto"

//heading
var h1Elem = document.createElement("h1")
var h1Content = document.createTextNode("Generate Get will Soon Card")
h1Elem.append(h1Content);
Cardgenerator.append(h1Elem)

//firest line img
var firstImg = document.createElement("div");
firstImg.setAttribute("id","firstImg")
firstImg.style.width = "550px"
firstImg.style.margin = "auto"

//Card img
for(var i=0;i<arr.length;i++){
    //label
    var labelImg = document.createElement("label");
    labelImg.setAttribute("for","image"+(i+1));
   //img
     arrImg = document.createElement("img");
    arrImg.setAttribute("src",arr[i]);
    arrImg.setAttribute("alt","image");
    arrImg.setAttribute("width","150");
    arrImg.setAttribute("height","140");
    arrImg.setAttribute("value",(i+1));
    labelImg.appendChild(arrImg)
    firstImg.appendChild(labelImg)

    //input
    var inputImg = document.createElement("input");
    inputImg.setAttribute("type","radio");
    inputImg.setAttribute("id","image"+(i+1));
    inputImg.setAttribute("name","image");
    inputImg.setAttribute("value",(i+1));

    firstImg.appendChild(inputImg)

}
Cardgenerator.append(firstImg)

//Message
var MsgElem = document.createElement("h1")
var MsgContent = document.createTextNode("Personal Message")
MsgElem.append(MsgContent);
MsgElem.style.color ="blue"
MsgElem.style.fontSize="bole"
Cardgenerator.append(MsgElem)

//textarea
var txtarea = document.createElement("textarea");
txtarea.setAttribute("value"," ")
txtarea.setAttribute("id","txtArea")
texttArea= document.getElementById("txtArea")
txtarea.style.width="500px"
txtarea.style.height="100px"
txtarea.style.resize="none"
Cardgenerator.append(txtarea);

//button
 btnElem = document.createElement("button")
 btnContent = document.createTextNode("Generate")
    btnElem.append(btnContent);
    btnElem.style.display="block"
    btnElem.style.margin = "auto"
    Cardgenerator.append(btnElem)

//Card page
btnElem.onclick = function() {
    imgchecked = parseInt(document.querySelector("input[name=image]:checked").value);
    // imgchecked.style.borderColor="red"
    nametxt = txtarea.value;

  // console.log(imgchecked,nametxt);
   createCard(nametxt,imgchecked)
}

}


//add style
function addStyle (){
    removeStyle()
    //console.log("ok")
   this.style.borderStyle = "solid";
   this.style.borderColor="red"
  
}   
function removeStyle(){
    for(var i =0;i< arrImags.length;i++){ 
        arrImags[i].style.borderStyle = "none"; 
        arrImags[i].style.borderColor="white"
    }
}


//create Card
function createCard(nametxt , imgval ){
    win = open("cardpage.html","","width=400,height=400");

      win.document.write("' ' ")
       //win.document.write("nametxt"+nametxt)
    
       var arrImgwin = document.createElement("img");
       arrImgwin.setAttribute("src",arr[imgval-1]);
       arrImgwin.setAttribute("alt","image");
       arrImgwin.setAttribute("width","250");
       arrImgwin.setAttribute("height","250");
       arrImgwin.style.margin="auto"
       win.document.body.appendChild(arrImgwin)
    
       var pElem1 = document.createElement("p")
       var pContent1 = document.createTextNode(nametxt)
        pElem1.append(pContent1);
        pElem1.style.textAlign="center"
        pElem1.style.color="blue"
        win.document.body.append(pElem1)
    
     //button
     var btnElemCard = document.createElement("button")
     var btnContentCard = document.createTextNode("close Preview")
        btnElemCard.append(btnContentCard);
        btnElemCard.style.display="block"
        btnElemCard.style.margin = "auto"
        win.document.body.append(btnElemCard)
    
        btnElemCard.onclick = function(){win.close();}
//     console.log(imgval,nametxt)
//     //message
//     var pElem = document.createElement("p")
//     var pContent = document.createTextNode(nametxt)
//   pElem.append(pContent);
//   document.body.append(pElem)

//   //Card img
// for(var i=0;i<arr.length;i++){
//     if((i+1) == imgval)
//     {
//         //label
//     var labelImg1 = document.createElement("label");
//     labelImg1.setAttribute("for","image"+(i+1));
//    //img
//     var arrImg1 = document.createElement("img");
//     arrImg1.setAttribute("src",arr[i]);
//     arrImg1.setAttribute("alt","image");
//     arrImg1.setAttribute("width","150");
//     arrImg1.setAttribute("height","140");

//     labelImg1.appendChild(arrImg1)
//     document.body.appendChild(labelImg1)

//     //input
//     var inputImg1 = document.createElement("input");
//     inputImg1.setAttribute("type","radio");
//     inputImg1.setAttribute("id","image"+(i+1));
//     inputImg1.setAttribute("name","image");
//     inputImg1.setAttribute("value","image"+(i+1));

//     //firstImg.appendChild(inputImg1)
//     document.body.append(inputImg1)
//     console.log(imgval,nametxt)
//     }
//     }
   
// //button
//   var btnElemCard = document.createElement("button")
//   var btnContentCard = document.createTextNode("close Preview")
//  btnElemCard.append(btnContentCard);
//  btnElemCard.style.display="block"
//  btnElemCard.style.margin = "auto"
//  document.body.append(btnElemCard)
}
var arrImags
  document.addEventListener("DOMContentLoaded", function(){
    createCardGen()
    arrImags =  document.querySelectorAll('#firstImg label img');
       //console.log(arrImags.length);
 for(var i =0;i< arrImags.length;i++){ 

  arrImags[i].addEventListener("click",addStyle); 
  
  }
 
})

