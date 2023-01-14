
 var objFun = {
  id:"5",
  location:"Giza",
  addr:"10 st",
    getSetGen :function(){
      let len = Object.keys(this).length
      for(let i=0;i<len;i++){
        
        let val = Object.keys(this)[i]

        if((typeof this[val] != 'function') && ((typeof this[val] != 'undefined'))){
          // console.log(typeof(val)) 
          let sname= "set"+val;
          let gname = "get"+val;

          this[sname]=function(value){
            this[val] = value
          };
          this[gname]=function(){
            return this[val]
          };
        }
    }
}
 }
 objFun.getSetGen();

 var obj2={
  name: 'menna',
  age:22
 }
 objFun.getSetGen.call(obj2)
 