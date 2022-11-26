
var arr = new Array();
for(var i=0;i<5;i++){
    arr[i]=parseInt(prompt("enter num:" + (i+1)));
}
for(var i=0;i<5;i++){
    console.log(arr[i]);
}
//arr sorting descending
arr.sort(function(x,y) {return x-y});
console.log("array sorted descending");
for(var i=0;i<5;i++){
    console.log(arr[i]);
}

//arr sorting ascending
//arr.sort(function(x,y) {return y-x});

console.log("array sorted aescending");
for(var i=4;i>=0;i--){
    console.log(arr[i]);
}