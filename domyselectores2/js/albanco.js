let dia = prompt("¿Qué día de la semana es?");
let hora = parseInt(prompt("¿Qué hora es?"));
if (dia !== "domingo" && dia !== "sábado" && hora > 10 && hora < 15) {
    document.querySelector("p.respuesta").innerText = "¡Bien! Todavía estamos a tiempo de llegar";
} else {
    document.querySelector("p.respuesta").innerText = "Uf… No llegamos";
}   