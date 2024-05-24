// Ejercicio 1
// a

for (let i=0; i<5; i++){
    console.log("Practicando con el bucle for" + i);
}

// b

for (let i=0; i<10; i ++){
    console.log("La variable i tiene el valor valor de ${i}" + i);
}

// c
//i.

for (let i=0; i<10; i++){
    console.log(i * 2);
}

// para que i varie de 2 en 2 modificaria i ++ a i +=2:

for (let i=0; i<10; i +=2){
    console.log(i * 2);
}

// ii.

for (let i=0; i<50; i ++){
    console.log(i * 2);
}

// para que i varie de 5 en 5 modificaria i ++ a i +=5:

for (let i=0; i<50; i += 5){
    console.log(i * 2);
}

// d

for (let i=100; i >= 0; i --){
    console.log(i);
}

// Ejercicio 2

let base = 2;
let resultados = [];


for (let i=1; i<10; i ++){
    resultados.push(base * i)
}

console.log(resultados);

// Ejercicio 3

let ganancias = [1, -2, 3, 4, -5, 6, 7, -8, 9, 10];

let suma = 0;

for (let i=0; i < ganancias.length; i ++){
    suma += ganancias[i];
}

console.log(suma);

// Ejercicio 4

let healingIsDifficult = ['Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'];

for (i=0; i < healingIsDifficult.length; i ++){
    console.log((i + 1) ,healingIsDifficult[i]);
}

// Ejercicio 5

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for (let i = 0; i < got.length; i++) {
    let persona = got[i];
    let nombreCompleto = persona.nombre + " " + persona.apellido;

    console.log("Hola " + nombreCompleto + " criatura viajera!");

    if (persona.ciudad) {
        console.log("Soy " + nombreCompleto + " de la ciudad " + persona.ciudad);
    }
}










    
















