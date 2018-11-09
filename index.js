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

console.warn("+++Calling Function() to create a function+++++")

//Function() is called when new Circle4(), this is what is looks like
var Circle5=new Function('radius','x','y',`
this.location=new Location(x+this.unit,y+this.unit);
this.radius=radius;
console.log('this in Function()', this)`);

var circle6=new Circle5(1,2,3)

//All the literals call the Functions to construct
var a=1, b=true, c='car', d=['one', 'two'], e={}
console.warn("+++functinos when declaring literals+++++");
console.log('var a calls:',a.constructor)
console.log('var b calls:',b.constructor)
console.log('var c calls:',c.constructor)
console.log('var d (reference type) calls:',d.constructor)
console.log('var e (reference type) calls:',e.constructor)

//call and apply
//apply uses array
// first argument determines the 'this'
console.warn("+++++++++Calling an Object++++++++++");
console.log("new Circle() === Circle.call({}, args)");
console.log("Circle()===Circle.call(windows,args)")
var circle7=Circle.call({},6,7,8)

console.warn('primitive type vs referencec type')
console.log('primitives(value type): number, boolean, string, symbol, undefined, null ')
console.log('reference type: Object, Array, Function')

let aa=3

function increment(aa){
    aa++;
}

console.log('aa is still 3, as it is value type. \
calling a function copys the value to different variable. ',increment(aa))

let bb={val:3}
function increment2(bb)
{
    bb.val++;
}
increment2(bb)
console.log('Reference is passed so val increses. ',bb.val)

console.warn('++++++enumerating properties ++++++')
circle6.newproperty='this is new';
for(key in circle6)
console.log(`Property ${key} has value ${circle6[key]}`)