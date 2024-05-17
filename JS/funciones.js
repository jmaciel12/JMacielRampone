// Ejercicio 1

function rectangulo(altura, ancho) {
    return ancho * altura;
}

console.log("El area del rectangulo es: ", rectangulo(2, 5))

// Ejercicio 2

function triangulo(base, altura) {
    return ((base * altura)/2);
}

console.log("El area del triangulo es: ", triangulo(2, 3))

// Ejercicio 3

function largoDelArray(array) {
    return (array.length);
}

console.log(largoDelArray([1, 2, 3, 4, 5]))

// Ejercicio 4

function cantidadDeLetras(palabra) {
    return (palabra.length);
}

console.log(cantidadDeLetras("hola"), "letras.")

// Ejercicio 5

function dolarHoy(precio) {
    return (precio / 1060);
}

console.log(dolarHoy(15450), "dolares.")

// Ejercicio 6

function precioFinal(precio) {
    return (precio * 1.21)
}

console.log(precioFinal(3000), "pesos.")

// Ejercicio 7

function mitad(numero) {
    return (numero / 2)
}

console.log(mitad(30))


// Ejecutando Funciones

function siguiente(numero) {
return numero + 1;
}

function doble(numero) {
return 2 * numero;
}

function siguienteDelDoble(numero) {
return siguiente(doble(numero));
}

console.log("Número siguiente a 2 es", siguiente(2))

console.log("El doble de 2 es", doble(2))

console.log("El numero siguiente al doble de 5 es", siguienteDelDoble(5))

function anterior(numero) {
    return (numero - 1)
}

console.log("El anterior a 6 es", anterior(6))

function triple(numero) {
    return (numero * 3)
}

console.log("El triple de 6 es", triple(6))

function anteriorDelTriple(numero) {
    return anterior(triple(numero))
}

console.log("El anterior al triple de 10 es", anteriorDelTriple(10))