let dia = prompt("¿Que dia es hoy?");
if (dia == "domingo"){ 
   document.querySelector("p.respuesta").innerText = "¡Pongamos la olla, hoy se comen pastas!";
} else {
    document.querySelector("p.respuesta").innerText = "Mejor lo dejamos para el domingo";
}
