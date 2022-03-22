class Human {
  gender = "male";
  printGender = () => console.log(this.gender);
}
/*
^^^ this replaces this old style:
class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender);
    }
}  */

class Person extends Human {
  name = "Max";
  gender = "female";

  printMyName = () => console.log(this.name);
}

const person = new Person();
person.printMyName();
person.printGender();
const human = new Human();
human.printGender();
