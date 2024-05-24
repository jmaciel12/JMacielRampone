let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));



if (num1 > num2) {
    document.querySelector("p.respuesta").innerText = `${num1} es el número mayor`;
} else {
    document.querySelector("p.respuesta").innerText = `${num2} es el número mayor`;
}
