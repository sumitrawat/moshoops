console.log("OOPS JS Program");

//object literals
const circle1 = {
    radius: 2,
    location: {
        x:3,
        y:4
    },
    draw:function(){
        console.log("drawing circle at x:"+this.location.x+" y:"+this.location.y)
    }
}
const circle2 = {
    radius: 2,
    location: {
        x:23,
        y:423
    },
    draw:function(){
        console.log("drawing circle at x:"+this.location.x+" y:"+this.location.y)
    }
}
circle1.draw();

circle2.draw();

/////////////
//factory method

function createCircle(radius, x, y){
    console.log('this in factory', this)
    return {
        radius: radius,
        location: {
            x:x,
            y:y
        },
        draw:function(){
            console.log("drawing circle at x:"+this.location.x+" y:"+this.location.y)
        }
    }
}

console.warn("+++Factory method+++++")
createCircle(34,232,233).draw();

//////////////////////
//constructor function
function Location(x,y){
    this.x=x;
    this.y=y;
}
function Circle(radius, x,y){
    console.log('this in constructor',this)
    this.location=new Location(x+this.unit,y+this.unit);
    this.radius=radius;
    console.log('this in constructor', this)
}

Circle.prototype.draw=function(){
    console.log("drawing circle at x:"+this.location.x+" y:"+this.location.y)
}

Circle.prototype.unit="in";

console.warn("+++Constructor with prototype Function+++++")
var circle4=new Circle(6,82,43); 
//1 new creates a empty circle{}, 2 set the properties using this, 3 return that object
circle4.draw();