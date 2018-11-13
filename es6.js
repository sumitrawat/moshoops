class Human {
  constructor(occupation) {
    if (occupation) this.occupation = occupation;
    else this.occupation = "unemployed";
  }

  walk() {
    console.log(`Walk`);
  }
  talk() {
    console.log(`Talk`);
  }
  sayOccupation() {
    console.log(`I am a ${this.occupation}`);
  }
}

let h = new Human();
h.talk();

class Doctor extends Human {
  constructor() {
    super("Doctor");
  }

  heal() {
    console.log("can heal");
  }
}

let d = new Doctor();
