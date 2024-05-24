// Prototipos y Herencia Prototípica
// JavaScript utiliza prototipos para la herencia. Cada objeto tiene un prototipo, y los objetos pueden heredar propiedades y métodos de su prototipo.
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};

let persona11 = new Persona('Juan', 30);
persona11.saludar(); // Hola, mi nombre es Juan y tengo 30 años.






// Clases y Herencia en ES6
// JavaScript ES6 introdujo la sintaxis de clases que facilita la creación de objetos y la herencia.
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.carrera}.`);
    }
}

let estudiante1 = new Estudiante('María', 22, 'Ingeniería');
estudiante1.saludar(); // Hola, mi nombre es María y tengo 22 años.
estudiante1.estudiar(); // María está estudiando Ingeniería.







// Promesas y Async/Await
// Las promesas y la sintaxis async/await son esenciales para manejar operaciones asíncronas en JavaScript.
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Datos obtenidos');
        }, 2000);
    });
}

obtenerDatos().then(datos => {
    console.log(datos); // Datos obtenidos
});







// con Async/Await
async function obtenerDatos() {
    let datos = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Datos obtenidos');
        }, 2000);
    });
    console.log(datos); // Datos obtenidos
}

obtenerDatos();







// Closures
// Los closures son una característica poderosa de JavaScript que permite a una función acceder a su ámbito léxico.
function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        console.log(contador);
    };
}

let contador1 = crearContador();
contador1(); // 1
contador1(); // 2

let contador2 = crearContador();
contador2(); // 1







// Módulos en JavaScript (ES6 Modules)
// Los módulos permiten organizar el código en diferentes archivos y reutilizarlo fácilmente.
// archivo saludo.js
export function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}








// Ejemplo de importación
// archivo main.js
import { saludar } from './saludo.js';

saludar('Juan'); // Hola, Juan




// Funciones de Orden Superior
// Las funciones de orden superior son funciones que pueden tomar otras funciones como argumentos o devolver funciones.
function operacion(arreglo, operacion) {
    return arreglo.map(operacion);
}

let numeros = [1, 2, 3, 4, 5];
let cuadrados = operacion(numeros, (num) => num * num);
console.log(cuadrados); // [1, 4, 9, 16, 25]






