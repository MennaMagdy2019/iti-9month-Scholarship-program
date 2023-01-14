//Box
function Box(height,width,length,material,content){
    var cnt=0;
    Object.defineProperties(this,{
        height:{
            value:height,
            writable:false,
            configurable:false,
            enumerable:false  
        },
        width:{
            value:width,
            writable:false,
            configurable:false,
            enumerable:false  
        },
        length:{
            value:length,
            writable:false,
            configurable:false,
            enumerable:false  
        },
        material:{
            value:material ,
            writable:false,
            configurable:false,
            enumerable:false  
        },
        contnt:{value:[]}
    })
   //add book function to box
    Object.defineProperty(this,"addbook",{
        value:function(book){
           // console.log(book);
           this.contnt.push(book)
          // ++cnt;
        },
        writable:false,
        configurable:false,
        enumerable:false
    })
    //delete book function from box
    Object.defineProperty(this,"deletebook",{
        value:function(title){
           if(this.contnt.length !=0){
                for(var i=0;i<this.contnt.length;i++){
                    if(this.contnt[i].title == title){
                       this.contnt[i].numofCopies -= 1;  
                       this.contnt.splice(i,1);
                     // --cnt;
                      return
                    }
                }
                throw "this is book not found";
            }
            else{
                throw "there is no books"
            }
        },
        writable:false,
        configurable:false,
        enumerable:false
    })
    //CountBooksIn Box
    Object.defineProperty(this,"countBookInBox",{
        value:function(){
           // console.log(cnt);
          return this.contnt.length;
        },
        writable:false,
        configurable:false,
        enumerable:false
    })
   
}
//toString fun
Box.prototype.toSting=function(){
    return "this box height "+ this.height + " and width "+this.width + " lenght " 
    + this.length + " num of books in the box " + this.contnt.length
}
//value of fun
Box.prototype.valueOf=function(){
    return this.contnt.length;
}

//Book
function Book(title,numofChapters,author,numofPages,publisher,numofCopies){

    Object.defineProperties(this,{
        title:{
            value:title,
            writable:false,
            configurable:false,
            enumerable:false
        },
        numofChapters:{
            value:numofChapters ,
            writable:false,
            configurable:false,
            enumerable:false
        },
        author:{
            value:author,
            writable:false,
            configurable:false,
            enumerable:false
        },
        numofPages:{
            value:numofPages ,
            writable:false,
            configurable:false,
            enumerable:false
        },
        publisher:{value:publisher},
        numofCopies:{
            value:numofCopies,
            writable:true,
            configurable:false,
            enumerable:false
        }
        
    })
    Book.countallbooks += this.numofCopies;
   

}

//count all Books
Book.countallbooks=0;
Book.getCount = function(){
   //console.log(this.countallbooks)
    return this.countallbooks;
}

var book1 = new Book("Book1",3,"tahaHussin",300,"mohamed",10)
var book2 = new Book("Book2",5,"tahaHussin",200,"ahmed",30)
var book3 = new Book("Book3",13,"tahaHussin",400,"ali",40)
var book4 = new Book("Book4",10,"tahaHussin",500,"mostafa",50)

var box1 =new Box(10,20,50,"paper",[])
var box2 =new Box(10,30,50,"paper",[])

box1.addbook(book1);
box1.addbook(book3);
box2.addbook(book2);

console.log(box1.toSting());
console.log(box2.toSting());

console.log(box1.countBookInBox());
console.log(box2.countBookInBox());
console.log(Book.getCount())

box1.deletebook("Book3");
console.log(box1.countBookInBox());
console.log(book3.numofCopies);


console.log(box1.valueOf()+box2.valueOf())

