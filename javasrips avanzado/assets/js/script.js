// Clases y Objetos
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear un objeto (instancia) de la clase Persona
let persona1 = new Persona('Juan', 30);
persona1.saludar(); // Hola, mi nombre es Juan y tengo 30 años.





// Atributos y Métodos
class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }

    acelerar() {
        this.velocidad += 10;
        console.log(`La velocidad del coche es ${this.velocidad} km/h.`);
    }

    frenar() {
        this.velocidad -= 10;
        console.log(`La velocidad del coche es ${this.velocidad} km/h.`);
    }
}

// Crear un objeto de la clase Coche
let miCoche = new Coche('Toyota', 'Corolla');
miCoche.acelerar(); // La velocidad del coche es 10 km/h.
miCoche.frenar();   // La velocidad del coche es 0 km/h.







// Encapsulamiento
class Banco {
    constructor(saldo) {
        this._saldo = saldo; // Atributo "privado"
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this._saldo += cantidad;
            console.log(`Depósito exitoso. Saldo actual: ${this._saldo}`);
        } else {
            console.log('Cantidad no válida para depositar.');
        }
    }

    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this._saldo) {
            this._saldo -= cantidad;
            console.log(`Retiro exitoso. Saldo actual: ${this._saldo}`);
        } else {
            console.log('Fondos insuficientes o cantidad no válida.');
        }
    }

    get saldo() {
        return this._saldo;
    }
}

// Crear un objeto de la clase Banco
let miCuenta = new Banco(1000);
miCuenta.depositar(500); // Depósito exitoso. Saldo actual: 1500
miCuenta.retirar(200);   // Retiro exitoso. Saldo actual: 1300
console.log(miCuenta.saldo); // 1300






// Herencia
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log('El animal hace un sonido.');
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }

    hacerSonido() {
        console.log('El perro ladra.');
    }

    mostrarRaza() {
        console.log(`La raza del perro es ${this.raza}.`);
    }
}

// Crear un objeto de la clase Perro
let miPerro = new Perro('Rex', 'Labrador');
miPerro.hacerSonido(); // El perro ladra.
miPerro.mostrarRaza(); // La raza del perro es Labrador.











// Polimorfismo
class Ave extends Animal {
    constructor(nombre, tipo) {
        super(nombre);
        this.tipo = tipo;
    }

    hacerSonido() {
        console.log('El ave canta.');
    }
}

// Crear objetos de diferentes clases
let miAnimal = new Animal('Genérico');
let miPerro1 = new Perro('Rex', 'Labrador');
let miAve = new Ave('Tweety', 'Canario');

// Utilizar el mismo método en diferentes objetos
miAnimal.hacerSonido(); // El animal hace un sonido.
miPerro1.hacerSonido();  // El perro ladra.
miAve.hacerSonido();    // El ave canta.






