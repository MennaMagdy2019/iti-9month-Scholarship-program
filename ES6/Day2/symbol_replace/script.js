 var myObj ={
    [Symbol.replace] : function(str){
       if(str.length>15){
            return str.substring(0,15)+"..."
        }
         else
             return str
    }
 }

 var myStr = "hello hello world world".replace(myObj)
 console.log(myStr)
 
