var Rectangle = function (length=0,width=0){
    
    for(var i=0 ; i< arguments.length ; i++){
        if(typeof(arguments[i]) != 'number'){
            throw "plz enter only numbers";
            return;
        }
    }
     if(arguments.length>2){
        throw "error found"
        return ;
    }
    else{
        this.length=length,
        this.width=width,
        this.area= function(){
            return this.length*this.width;
        },
        this.perimeter= function(){
          return 2*(this.length+this.width);
        },
        this.displayInfo = function(){
          console.log(" length = "+this.length  + ", width = " + this.width +
          " & area : "+this.area()  + " & perimeter : " + this.perimeter());
        }
    }
  
}

var rec1 = new Rectangle(10,20);
rec1.displayInfo();