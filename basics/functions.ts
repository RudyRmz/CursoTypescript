interface ResponseServiceCD {
  id: number;
  name: string;
  chargue: string;
  number: number;
}

const response: ResponseServiceCD = {
  id: 1,
  name: "Rudy",
  chargue: "Developer",
  number: 7,
};

function show({ name, ...other }: ResponseServiceCD): number {
  console.log("El nombre mandado es: ", name);
  console.log("Otros datos: ", other);

  return 1;
}

show(response);
