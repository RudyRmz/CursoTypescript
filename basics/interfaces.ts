interface Person {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  sayHello: () => string;
}

let persona: Person = {
  name: "Kevin",
  code: "01",
  charge: 1,
  description: "Hola",
  sayHello: () => {
    //guardarToken()
    //tomarFoto()
    console.log("Holaaa");
    const personas = [1, 2, 3, 4, 5];
    personas.map((p) => p.toFixed(1));
    return "Hola";
  },
};

let secondPerson: Person = {
  name: "",
  code: "",
  charge: 0,
  sayHello: () => "hola 2",
};
