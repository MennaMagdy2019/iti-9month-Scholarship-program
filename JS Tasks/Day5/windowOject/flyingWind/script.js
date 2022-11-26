var win

function openChildWin() {
    win = open("child.html","","width=200,height=200");
}
/*
function moveWindow()
{
    win.moveBy(150,150);
    win.focus();
}*/
var timerId,timerId2;
var x=0,y=0;
function moveWindow()
{
    openChildWin();
    win.moveTo(0,0);
   timerId =  setInterval(function() {
    
    if(y<screen.height)
    {
        win.moveBy(30,30);
        y+=40;
    }
        else{
        win.moveBy(-30,-30);
        }
   
    },500)

    win.focus();
}
//stopwindow func
function stopWindow()
{
   //openChildWin();
   clearInterval(timerId);
   win.moveTo(220,220);
   win.focus();
}


//   timerId2 = setInterval(function() {
//     clearInterval(timerId)
//     win.moveBy(20,-20)
       
//     },500)
  /*  
    win.moveTo(350,350);
    timerId2 =  setInterval(function() {
        win.moveBy(-20,-20);
    // win.moveTo(0,0);
    },100)*/
