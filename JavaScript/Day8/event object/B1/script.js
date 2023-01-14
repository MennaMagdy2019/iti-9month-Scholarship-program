// Alert ASCII Code of any key pressed and detect whether it is alt key or ctrl key or shift key

document.onkeydown= function() {
    console.log(event.keyCode)
    console.log(event.altKey);
    console.log(event.ctrlKey);
    console.log(event.shiftKey);
    if(event.altKey) {alert("you pressed on alt key and ASCII Code : "+ event.keyCode)}
    else if(event.ctrlKey) {alert("you pressed on ctrlKey and  ASCII Code : "+ event.keyCode)}
    else if(event.shiftKey) {alert("you pressed on shiftKey and ASCII Code : "+ event.keyCode)}
    else {alert("The ASCII Code of key was pressed :"+ event.keyCode)}
}