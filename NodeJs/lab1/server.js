//console.log("nodejs")
const https = require("http");

https.createServer( (req,res) => {
    console.log(req.url)
    if(req.url != "/favicon.ico" ){
        console.log(req.url)
        var arr= req.url.split("/")
        var result;
        console.log(arr)
       
        var num1=Number(arr[2])
        var num2=Number(arr[3])
        var i=2,result=0;
        switch(arr[1]){
            case "add" :
            //    result = calc("+",arr)
            for(i=2;i<arr.length;i++){
                 result +=parseInt(arr[i])
            }
            //result=num1+num2
                break;
            case "sub" :
                result=arr[2]
                for(i=3;i<arr.length;i++){
                    result -=parseInt(arr[i])
               }
                break;
            case "div" :
                result=parseInt(arr[2])
                for(i=3;i<arr.length;i++){
                    result /=parseInt(arr[i])
               }
                break;
            case "mul" :
                result=1
                for(i=2;i<arr.length;i++){
                    result *=parseInt(arr[i])
               }
                break;   

        }
        result = result+""
        res.write(result);
    }
    
   res.end();
}).listen("8600");

// function calc(op,arr){
//    newarr=arr.splice(0,2)
//    var result;
//    for(var i=2;i<newarr.length;i++){
//     if(op == "+")  result+=newarr[i]
//     else if(op == "-")  result-=newarr[i]
//     else if(op == "*")  result*=newarr[i]
//     else if(op == "/")  result/=newarr[i]
    
// } 
// return result
//   // console.log(arr)
// }
