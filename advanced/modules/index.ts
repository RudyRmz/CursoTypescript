import * as Utils from "./utils.module"; //Importacion global de todo lo que hay en utils.module y llamar el contenido mediante el as que se le dió
import { PI, User, generatedId } from "./utils.module"; //Importacion mediante destructuracion de elementos en especifico
import { User as Person } from "./utils.module"; //Importacion de un elemento pero aplicando as para asignarle un nombre diferente con el cual se llamara en este script

const myNumber = 10 * PI;

// const myUser: Person = {
//   id: generatedId().toString(),
//   name: "Kevin",
// };

const myUser: Utils.User = {
  id: Utils.generatedId().toString(),
  name: "Kevin",
};

console.log(myNumber);
console.log(myUser);
