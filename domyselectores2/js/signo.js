let numero = prompt("Ingrese un número: ");
if (numero > 0){
    document.querySelector("p.respuesta").innerText = `El número ${numero} es positivo.`
} else if (numero < 0){
    document.querySelector("p.respuesta").innerText = `El número ${numero} es negativo.`
}else{
    document.querySelector("p.respuesta").innerText = `El número ${numero} es cero.`
}