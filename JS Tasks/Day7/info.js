var cnt=0;
var profileImg = document.getElementById("imgInfo")
var gender = getcookie("usergender")


var cnt=getcookie("numvisited")
cnt = parseInt(cnt)
    ++cnt;   
    setcookie("numvisited",cnt)

//else{sum+=cnt;}
if(gender == 'male')
{
    profileImg.src = "images/1.jpg";
}
else{
    profileImg.src = "images/2.jpg";
}
// console.log(getAllCookie())
// console.log(getcookie("usercolor"))
// console.log(getcookie("username"))
// console.log(getcookie("numvisited"))
var info = document.getElementById("divInfo")

info.innerHTML = "<p> Welcom <span style='color:" + getcookie("usercolor")+"'> "+getcookie("username")+"</span> you have visited this sites <span style='color:" + getcookie("usercolor")+"'> "+getcookie("numvisited")+"</span> times:) </p>"