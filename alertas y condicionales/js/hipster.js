// a
let nacion = prompt("Ingrese su nacionalidad: ");
let nacionalidad = nacion;
let ingresoProfesion = prompt("Ingrese su profesión: ");
let profesion = ingresoProfesion;
let ingresoKmtrs = prompt("Ingresa los Km que caminas por día: ");
let kilometros = parseInt(ingresoKmtrs);

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