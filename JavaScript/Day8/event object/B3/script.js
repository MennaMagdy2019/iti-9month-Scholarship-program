var uname,uage,ugender,uemail,utitle,uadd,gender;


//create event obj
var myevent = new Event("timeout")

var obj  = document.getElementById("formsubmit")

// register to event --> object listen to lookup event
obj.addEventListener("timeout",function () {
    showInfo()
})

function showInfo(){
    //e.preventDefault();
    
    uname = document.getElementsByTagName("input")[0].value;
    uage = document.getElementsByTagName("input")[1].value;
    utitle = document.getElementsByTagName("input")[2].value;
    uemail = document.getElementsByTagName("input")[3].value;
    uadd = document.getElementsByTagName("input")[4].value;
     gender = document.querySelector("input[name = gender]:checked")

    
     console.log(uname,ugender,uage,utitle,uemail,uadd)
     if(uname != "" && uage != "" && utitle != "" && uemail != "" && uadd !="" && gender!=null )
     { alert("Thank you your data complete ");
         
     }
     else if(uname != "" || uage != "" || utitle != "" || uemail != "" || uadd !="" || gender!=null )
     { console.log(uname,uage,utitle,uemail,uadd)
        alert("you can complete your data");
     }
      
     else {
        alert("you can't enter your data stop Subbmision");
        document.getElementsByTagName("input")[0].disabled = true
        document.getElementsByTagName("input")[1].disabled = true
        document.getElementsByTagName("input")[2].disabled = true
        document.getElementsByTagName("input")[3].disabled = true
        document.getElementsByTagName("input")[4].disabled = true
     }
   
}

    setTimeout(function(){
        obj.dispatchEvent(myevent);
        //alert("OK");
    },2000)

