function list (start,end,step){
    var listdata=[];

    Object.defineProperties(this,{
        st:{
            value:start,
            writable:false,
            configurable:false,
            enumerable:false
        },
        endd:{
            value:end,
            writable:false,
            configurable:false,
            enumerable:false
        },
        stp:{
            value:step,
            writable:false,
            configurable:false,
            enumerable:false
        }
        
    });
     //filledlist fun
    var filledlist= function(){
        for(var i=this.st;i<=this.endd;i=i+this.step){
            return listdata.push(i);
        }
       
    }.bind(this);

    filledlist();
    //getList
    Object.defineProperty(this,"getList",{
      //set:function(val){listdata.push(val)},
        get:function(){return listdata;},
        configurable:false,
        enumerable:false
    })

       //check duplicate
    Object.defineProperty(this,"check_duplicates",{   
    value:function(value)
     {
         var len = listdata.length;
         for(var i=0 ; i<len;i++){
            if(listdata[i]==value){return 1}
            else return 0;
         }
        
     }, 
     configurable:false,
    enumerable:false
     
    })

   //append fun
   Object.defineProperty(this,"Append",{   
       value:function(value)
        {
            var len = listdata.length;
            if(!this.check_duplicates(value)){
                if(len==0)  
                {
                    listdata.push(value);
                }
                else if((value>(listdata[len-1])) &&
                (value==((listdata[len-1])+this.stp)) &&
                (value<=this.endd) 
                ){
                    //console.log((listdata[len-1])+this.stp)
                    listdata.push(value);
                }
                else{
                    throw "error";  
                }
            }
            else{
                throw "error found";
            }
        },
        configurable:false,
        enumerable:false
        
    })

 
    //Enqueue fun
   Object.defineProperty(this,"Prepend",{   
    value:function(value)
     {
         var len = listdata.length;
         if(!this.check_duplicates(value)){
              if(len==0)  
         {
             listdata.push(value);
         }
         else if((value<(listdata[0])) &&
         (value==((listdata[0])-this.stp)) &&
         (value>=this.st) 
         ){
             listdata.unshift(value);
         }
         else{
             throw "error";  
         }
         }
         else{
            throw "error";
         }   
        
     }, 
       configurable:false,
        enumerable:false
     
 })

  //Remove fun
  Object.defineProperty(this,"Remove",{   
    value:function(value)
     {
         for(var i=0;i<listdata.length;i++){
            if(listdata[i]==value)
            {return listdata.splice(i,1);}
         }   
         throw "this item not found";
     }, 
     configurable:false,
     enumerable:false 
 })

 //Dequeue fun
 Object.defineProperty(this,"Dequeue",{   
    value:function(value)
     {
         if(listdata.length==0){
            throw "this list is empty";
         }
         else{
            listdata.shift();
         }
     } ,
     writable:false,
     configurable:false,
    enumerable:false
 })

  //pop fun
  Object.defineProperty(this,"Pop",{   
    value:function(value)
     {
         if(listdata.length==0){
            throw "this list is empty";
         }
         else{
            listdata.pop();
         }
     },
    writable:false, 
    configurable:false,
    enumerable:false 
     
 })

 this.toString=function(){
    for(var i=0;i<listdata.length;i++){
        console.log(listdata[i]);
    }
   
 }
}

var l2=new list(2,10,2);

l2.Append(4);
//l2.Append(8);
 l2.Dequeue();
// l2.toString();

l2.Prepend(2);
l2.Append(6);
l2.toString();

l2.Remove(6);
l2.toString();

l2.Pop();