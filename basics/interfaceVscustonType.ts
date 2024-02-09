type Person = {
  name: string;
  age: number;
};

interface Employee extends Person {
  chargue: string;
}

const newEmployee: Employee = {
  name: "",
  age: 40,
  chargue: "",
};

//Union Types
type User = {
  id: string;
};

type Admin = User & Employee; //Employee es una interface

type ServiceResponseToken = string | null | undefined | number;
type UserTypes = "admin" | "superUser" | 0;

const myUser: UserTypes = "admin";

interface Developer {
  name: string;
  stack: string[];
}

interface Developer {
  phone: string;
}

const me: Developer = {
  name: "asdasd",
  phone: "1324654",
  stack: ["asad", "asdasd"],
};
