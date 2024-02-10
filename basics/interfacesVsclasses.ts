interface PersonInterface {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  sayHello: () => string;
}

class PersonClass {
  sayHello() {
    console.log("Hola!");
    fetch("...");
  }
}

//const personOne: PersonInterface = {}
const peresonTwo: PersonClass = new PersonClass();
peresonTwo.sayHello();
