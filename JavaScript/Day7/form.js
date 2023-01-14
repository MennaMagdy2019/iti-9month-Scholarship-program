var uname,uage,ugender,ucolor,favcolr,numvisited=0;
//function showInfo
function setInfo()
{
   uname = document.getElementsByTagName("input")[0].value;
   uage = document.getElementsByTagName("input")[1].value;
   ugender =document.querySelector("input[name = gender]:checked").value;
//var gender = document.querySelector('input[name = gender]:checked').value;
   
   ucolor = document.getElementById("favcolor").value;
    console.log(uname,uage,ugender,ucolor)

    setcookie("username",uname);
   setcookie("userage",uage);
   setcookie("usergender",ugender);
   setcookie("usercolor",ucolor);
   setcookie("numvisited",0);
    
}

//cookiescript.setcookie("username","menna");
//console.log(document.cookie);
function showInfo(){
   setInfo()
   location.assign("info.html")
   //console.log("done")
}

