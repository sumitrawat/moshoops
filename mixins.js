canWalk = {
  walk: () => {
    console.log("Can Walk");
  }
};
canTalk = {
  talk: () => {
    console.log("Can Talk");
  }
};
canSwim = {
  swim: () => {
    console.log("Can wSwim");
  }
};
canJump = {
  jump: () => {
    console.log("Can Jump");
  }
};
canClimb = {
  climb: () => {
    console.log("Can Climb");
  }
};
canEat = {
  eat: () => {
    console.log("Can Eat");
  }
};
canRead = {
  read: () => {
    console.log("can Read");
  }
};
//mixin function is composition
function mixin(target, ...source) {
  return Object.assign(target, ...source);
}
//inhitence
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Human() {}
Human.prototype = mixin(
  Human.prototype,
  canEat,
  canWalk,
  canTalk,
  canSwim,
  canJump
);

//mixins with inheritence
function Doctor() {}
extend(Doctor, Human);
Doctor.prototype = mixin(Doctor.prototype, canRead);

//Only mixin
function Elephant() {}
Elephant.prototype = mixin(Elephant.prototype, canEat, canWalk);
function Fish() {}
Fish.prototype = mixin(Fish.prototype, canEat, canSwim);

console.log(new Human());
console.log("------------------------------------");
console.log(new Elephant());
console.log("------------------------------------");
console.log("------------------------------------");
console.log(new Fish());
console.log("------------------------------------");
console.log("------------------------------------");
console.log(new Doctor());
console.log("------------------------------------");
