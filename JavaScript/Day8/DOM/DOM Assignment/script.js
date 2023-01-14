var originimg = document.getElementById("header")
var nav = document.getElementById("nav")

var clonimg = originimg.cloneNode(true)


//var imgloc = getComputedStyle()



 setTimeout(() => {
    originimg.style.textAlign="right";
    document.body.append(clonimg);
    nav.style.listStyleType = "circle"
}, 500);
//document.body.prepend(clonimg)
