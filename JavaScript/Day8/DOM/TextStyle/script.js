//var fontobj = document.querySelector("input[name='Font']:checked")
var par = document.getElementById("PAR");

//font family
function ChangeFont(font){
 //getComputedStyle(par).fontFamily = font;
 par.style.fontFamily = font;
}

//ChangeAlign
function ChangeAlign(color){
   par.style.fontFamily = color;
}

//ChangeHeight
function ChangeHeight(height){
    par.style.height = height;
}

//ChangeLSpace
function ChangeLSpace(letterS){
    par.style.letterSpacing = letterS;
}

//ChangeIndent
function ChangeIndent(Indent){
    par.style.textIndent = Indent;
}

//ChangeTransform
function ChangeTransform(textT){
    par.style.textTransform = textT;
}

//ChangeDecorate
function ChangeDecorate(textD){
    par.style.textDecoration = textD;
}


//ChangeBorder
function ChangeBorder(Btext){
    par.style.borderStyle = Btext;
}


//ChangeBorderColor
function ChangeBorderColor(Bcolor){
    par.style.borderColor = Bcolor;
}

