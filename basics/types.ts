let age: number = 20;
let month: string = "febrero";
let isSenior: boolean = true;
let person: object = {};
let frutas: string[] = ["manzana", "pera"];
let vehiculos: object[] = [{}, { name: "Corsa", color: "Rojo" }];

let response: any = "Hola";
response = 20;
response = true;
response = ["hola", 123];

// function saludar(): void {
//   console.log("Hola");
// }

let response2: unknown;
response2 = true;

let response3 = null;
let response4 = undefined;

//combinacion de tipos

let response5: number | null = 5;
response5?.toString();

type ResponseTypeSerivce = number | undefined;
let responseProducts: ResponseTypeSerivce;
let responsePartners: ResponseTypeSerivce;
responsePartners?.toString().concat("");

let mascotas: string | number;
mascotas = "perro";
mascotas = 65;

//Type Asseertion

let message: any = "";
let messageUppercase = <string>message;
messageUppercase.toUpperCase();

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
