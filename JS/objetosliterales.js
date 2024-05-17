// Ejercicio 1
let jonatan = {
    nombre: "Jonatan",
    apellido: "Maciel Rampone",
    edad: 22,
    dni: 53873304,
    comidasFavoritas: ["Milanesa", "Pastas", "hamburguesas"],
    saludar: function() {
            console.log("Mi nombre es", this.nombre, this.apellido, "y tengo", this.edad, "años.", "Mi primer comida favorita es", this.comidasFavoritas[0])
    }
}



// Ejercicio 2

jonatan.saludar()

// Ejercicio 3

let auto = {
    marca: "Chevrolet",
    modelo: "Camaro",
    anio: 1960,
    color: "negro",
    posicion: 0,

    avanzar: function(n) {
            this.posicion = this.posicion + n
    },
    retroceder: function(n) {
            this.posicion = this.posicion - n
    },
}

vehiculo.avanzar(10)
console.log("La posicion es", vehiculo.posicion, "luego de avanzar 10 metros en un segundo.")

vehiculo.retroceder(5)
console.log("La posicion es de", vehiculo.posicion, "luego de retroceder 5 metros en un segundo.")

// Ejercicio 4

let nuevoAuto = {
    marca: "Chevrolet",
    modelo: "Silverado",
    anio: 2022,
    color: "Gris",
    posicion: 0,
    moverse: function(n) {
            if (n < 0) {
                    this.posicion = this.posicion - n
            }
            else if (n > 0) {
                    this.posicion = this.posicion + n
            }
    },
}

nuevoAuto.moverse(15)
console.log("La posicion es de", vehiculo_moderno.posicion, "luego de moverse 15 metros positivos en un segundo.")

// Ejercicio 5

let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(num) {
            this.energia = this.energia - 10;
            return `Poder Elegido de ${this.nombre}: ${this.poderes[num]}. Energía restante: ${this.energia}.`;
    },
}

let Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(num) {
            this.energia = this.energia - 10;
            return `Poder Elegido de ${this.nombre}: ${this.poderes[num]}. Energía restante: ${this.energia}.`;
    },
}

function random(){
    return(Math.floor(Math.random() * 3))
}

console.log(ironMan.getPoder(random()));
console.log(ironMan.getPoder(random()));
console.log(ironMan.getPoder(random()));

console.log(Hulk.getPoder(random()));
console.log(Hulk.getPoder(random()));
console.log(Hulk.getPoder(random()));