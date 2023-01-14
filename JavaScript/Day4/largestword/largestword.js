//var input = "this is a javascript string demo javascripm";
var input = prompt("enter string :");
document.write("largest word is : " +largestword(input));

function largestword(input)
{
    var ouput = input.split(" ");
    var largestword;
    var largestwordlen=0;
    for(var i=0;i<ouput.length ; i++){
        if(ouput[i].length > largestwordlen){
            largestwordlen=ouput[i].length;
             largestword=ouput[i];
            }
        //document.write(" "+ouput[i].length);
    }
    return largestword;
}