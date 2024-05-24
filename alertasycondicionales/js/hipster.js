// a
let nacionalidad = prompt("Ingrese su nacionalidad: ");
let profesion = prompt("Ingrese su profesión: ");
let kilometros = parseInt(prompt("Ingresa los Km que caminas por día: "));


// b
function filosofoHipster(nacionalidad, profesion, kmRecorridos) {
    if ((nacionalidad == "Argentino") && (profesion == "Músico") && (kmRecorridos == 2)) {
        return "Soy un filósofo hipster";
    } else {
        return "Aún no soy filósofo hipster.";
    }
}

let resultado = filosofoHipster(nacionalidad, profesion, kilometros);
console.log(resultado);