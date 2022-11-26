var win

function openChildWin() {
    win = open("child.html","","width=400,height=300");
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

function scrollWindow()
{ openChildWin();
    win.focus();
    setInterval(function()
    {
        win.scrollBy(50,50);}
    ,100)
    stopWindow();
}
