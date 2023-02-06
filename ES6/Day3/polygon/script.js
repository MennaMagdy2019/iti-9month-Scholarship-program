
class polygon {
    constructor(height,width){
        this.height= height
        this.width=width
    }
    area(){
        return this.height * this.width
    }
    toString(){
        return `the area of this shap is ${this.area()} and it's parameter height : ${this.height} & width : ${this.width}`
    }
}

class rectangle extends polygon{
    constructor(height,width){
        super(height,width)
    }
    draw(){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.fillRect(150, 50,this.height, this.width);
        ctx.stroke();
      }
}

class square extends polygon{
     constructor(width){
        super(width)
        this.width = this.height
    }
    draw(){
        var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.fillRect(300, 50,this.height, this.width);
        ctx.stroke();
      }
   
}
class triangle extends polygon{
    constructor(height,width){
        super(height,width)
    }
    area(){
        return 0.5*this.height * this.width
    }
    draw(){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
         ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.lineTo(100, this.height);
        ctx.lineTo(this.width, this.height);
        ctx.fill();
    }
}
class circle extends polygon{
    constructor(height){
        super(height)
        this.param = this.height
        
    }
    area(){
        return Math.PI*this.param*this.param
    }
    toString(){
        return `the area of this shap is ${this.area().toFixed(4)} and it's parameter : ${ this.param} `
    }
    draw(){
        var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95, 80, this.param, 0, 2 * Math.PI);
        ctx.stroke();
      }
}

var rec1 = new rectangle(50,70)
rec1.draw()
console.log(rec1.toString())

var square1 = new square(50)
square1.draw()
console.log(square1.toString())

var triangle1 = new triangle(300,150)
triangle1.draw()
console.log(triangle1.toString())


var circle1 = new circle(30)
circle1.draw()
console.log(circle1.toString())