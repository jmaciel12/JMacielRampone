//a

let bienvenida = alert("Bienvenidos a mi sitio.");

//b

let avanzar = confirm("¿Está seguro de querer avanzar?");
let saludo = document.querySelector(".saludo");

if(avanzar == true){
    saludo.innerText = "Que alegría que quieras continuar tu visita";
}
else{
    saludo.innerText = "Lamentamos que no quieras continuar tu visita";
}

//c

let nombre = prompt("Ingrese su nombre: ");

//d

let bienvenida2 = document.querySelector("h1");
bienvenida2.innerText = `Bienvenido ${nombre}`;

//e

let años = parseInt(prompt("¿Cuántos años tenes?"));

if (años < 18){
    let general = document.querySelector(".container-general");
    general.style.display = "none";
    let denegado = document.querySelector("#accesoDenegado");
    denegado.style.display = "block";
}

//f

let gustar = confirm("¿Te gusta la programación?");

let background_img = document.querySelector(".background-img");

if (gustar == false) {
    background_img.innerHTML = '<img src="../domyselectores/img/gatito.jpeg">';
} else {
    background_img.innerHTML = '<img src="../domyselectores/img/programmer.jpeg">';
}

//g

let avatar = document.querySelector(".avatar");
let img_nueva = prompt("Ingresa la URL de tu imagen:");
avatar.src = img_nueva;

//h

let pelicula = {
    nombre: "",
    director: "",
    duracion: 0,
    actor: ""
};
//i

pelicula.nombre = prompt("Ingrese el nombre de su película favorita:");
pelicula.director = prompt("Ingrese el nombre del director de la película:");
pelicula.duracion = Number(prompt("Ingrese la duración de la película (en minutos):"));
pelicula.actor = prompt("Ingrese el nombre de su actor favorito de la película:");

let lista_peliculas = document.querySelector('#pelicula');



lista_peliculas.innerHTML = `
    <li>Nombre: ${pelicula.nombre}</li>
    <li>Director: ${pelicula.director}</li>
    <li>Duración: ${pelicula.duracion}</li>
    <li>Actor: ${pelicula.actor}</li>
`;

lista_peliculas.style.display = "block";




