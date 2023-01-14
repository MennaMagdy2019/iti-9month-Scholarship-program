var arr=[];
var num,temp;
var LnkLstObj ={
    data:[ ],
    pushVal:function(item){
        var len=this.data.length;
        
        if(len==0){
           {this.data.push({val : item})}
        }
        
       else  if(item>this.data[len-1].val)
       {
       
        {this.data.push({val : item})}
       }
       else{
        throw "you can't insert this element";
       }
       
    },
    Enqueue:function(item){
        if(this.data.length==0){
            this.data.push({val : item})
        }
     else  if(item<this.data[0].val){
        this.data.unshift({val : item})
      }
      else{
        throw "you can't insert this element"
      }
    },
    Insert:function(index,item){
        var len = this.data.length-1
        //console.log(this.data.length)
        if(index==0) { return this.data.unshift({val : item})}
        else if (index==(this.data.length-1) && (item > this.data[len].val)) {
            return this.data.push({val : item})
        }
        else{
                  if((item > this.data[index-1].val) && (item<this.data[index].val)){
                  //  index=i+1;
                   var vall = {val:item}
                 //  console.log(item);
                  return  this.data.splice(index,0,vall);
                  // console.log(item);
                  //{this.data.push({val : item})}
                  }
                  else{
                   // console.log("error")
                    throw "error"
                   return null ;
                     
                  }
               
        }
      
      // var insetval = this.data.splice(index,0,item);
        {this.data.push({val:this.data[index]})}
    },
    Pop:function(){
       this.data.pop();
    },
    Dequeue:function(){
       this.data.shift();
    },
    Remove:function(item){
        var index;
        for(let i in this.data){
           if(this.data[i].val==item){
            index=i;
            return this.data.splice(index,1)
           }
         
        }
        throw "not found"
        
       

    },
     Display:function(){
       
        for(let i in this.data){
            console.log(this.data[i]);
        }
     }
}

// LnkLstObj.pushVal(15);
// LnkLstObj.pushVal(20);
// LnkLstObj.pushVal(25);
//LnkLstObj.pushVal(30);
//LnkLstObj.Display();

// LnkLstObj.Enqueue(25);
// LnkLstObj.Enqueue(15);
// LnkLstObj.Enqueue(10);
//LnkLstObj.Enqueue(10);
//LnkLstObj.Enqueue(30);
//LnkLstObj.Display();


 //LnkLstObj.Pop();

//LnkLstObj.Insert(0,3);
// LnkLstObj.Insert(1,5);
//LnkLstObj.Display();

// LnkLstObj.Remove(15);

// LnkLstObj.Display()


//LnkLstObj.Remove(35);
