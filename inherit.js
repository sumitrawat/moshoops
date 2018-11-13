function Shape(x,y){
    if(x && y){
        this.location={
            x:x,
            y:y
        }
    }
    else{
        this.location='not set';
    }
}

function Square(sides,x,y){
    //calling super constructor method, sets the property on the Square Object
    Shape.call(this,x,y)
    this.sides=sides;
}
extend(Square,Shape)

Shape.prototype.printLocation=function(){
    console.log(`location: ${this.location.toString()}`)
}

//put this method after inheritence
Square.prototype.printName=function(){
    console.log('Square Method');
}

function Circle(sides,x,y){
    Shape.call(this,x,y)
    this.sides=sides;
}
Circle.prototype.print=()=>{
    console.log(`circle has ${sides} sides`)
}

extend(Circle,Shape)

var sq=new Square(4,3,4);
var sq1=new Square(4)
sq.printLocation()
sq.printName();
sq1.printLocation();

var c=Circle()
c.printName()

function extend(child, parent){
    //create an object with passing an prototype instead of Object.prototype
    child.prototype=Object.create(parent.prototype);
    //reset the constructor to child constructor Function
    child.prototype.constructor=child;
}