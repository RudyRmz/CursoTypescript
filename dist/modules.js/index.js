"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = require("./utils.module"); //Importacion global de todo lo que hay en utils.module y llamar el contenido mediante el as que se le dió
var utils_module_1 = require("./utils.module"); //Importacion mediante destructuracion de elementos en especifico
var myNumber = 10 * utils_module_1.PI;
// const myUser: Person = {
//   id: generatedId().toString(),
//   name: "Kevin",
// };
var myUser = {
    id: Utils.generatedId().toString(),
    name: "Kevin",
};
console.log(myNumber);
console.log(myUser);
