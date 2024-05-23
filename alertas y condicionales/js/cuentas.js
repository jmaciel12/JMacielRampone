let numero1 = prompt("Ingrese un número: ");
let numero2 = prompt("Ingrese otro número: ");

let primerNumero = parseFloat(numero1);
let segundoNumero = parseFloat(numero2);

function multiplicacion(a, b) {
    let multiplicar = a * b;
    return `El resultado de multiplicar ${a} y ${b} es: ${multiplicar}`;
}

let resultadoMultiplicacion = multiplicacion(primerNumero, segundoNumero);
console.log(resultadoMultiplicacion);



