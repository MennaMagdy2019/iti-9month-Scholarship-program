var win,x,y;

function openChildWin() {
    win = open("childWindow.html","","width=200,height=200");
}

function moveWindow()
{
    win.moveBy(150,150);
    win.focus();
}

function stopWindow()
{
    win.close();
  //  win.focus();
}

/*
 
    var win;

        function openChildWin() {
            win = open("childWind.html","", "width=200,height=200");
        }

        function moveWindow() {
            win.moveBy(150 , 150);
           // win.moveBy(150,150);
            win.focus();
        }
        function resizeWindow() {
            win.resizeBy(150, 150);

        }
        function stopWindow()
        {
            win.close();
        //  win.focus();
        }
    */