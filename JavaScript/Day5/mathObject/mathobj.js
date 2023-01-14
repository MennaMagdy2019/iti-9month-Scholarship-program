var area,squarerot,squareres,angle,cosang;

var rad = parseInt(prompt("enter rad: "))
alert("circle area is "+ circleArea(rad));

squarerot = parseInt(prompt("enter square root:"));
alert("Square root is "+ squareroot(squarerot));

angle = parseInt(prompt("enter angle:"));
alert("cose angle is "+ cosangle(angle) + "&deg;");
 // circleArea fun
function circleArea(rad)
{
    area=Math.PI*rad*rad;
    return area;
}
 // squareroot fun
function squareroot(root)
{
    squareres = Math.sqrt(root);
    return squareres;
}

 // cosangle fun
 function cosangle(angle)
 {
    var ang = Math.cos(angle*(Math.PI/180))
     cosang = Math.floor(ang).toFixed(4);
     
     return cosang;
 }