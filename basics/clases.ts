class Animal {
  name: "Generic animal";
  private age = 10;
  protected identity = "lll";

  sayHi() {
    console.log("Grrr");
    console.log(this.age);
    this.identity = "rrr";
  }
}

class Dog extends Animal {
  type = "Pastor Alemán";
  sayHi() {
    this.identity;
  }
}

const myAnimal: Animal = new Animal();
myAnimal.sayHi();

const myDog: Dog = new Dog();
