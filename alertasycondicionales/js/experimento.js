//b

let mensajeNombre = "Ingrese su nombre";
let mensajeEdad = "Ingrese su edad"; //c
let resultado = prompt(mensajeNombre);
let resultado2 = prompt(mensajeEdad);
let nombre = resultado;
let edad = resultado2; //c
console.log(nombre);
console.log(edad); //c

//d 

let mensajeDeporte = "¿Legustan los deportes?"; 
let fanDeportes  = confirm(mensajeDeporte);
let mensajeGracias = alert(`Muchas gracias ${nombre} por responder nuestras preguntas`);
console.log(fanDeportes);

//f

let usuario = { 
    nombre : nombre,
    edad : edad,
    fanDeportes : fanDeportes,
    deportistaProfesional : function(){
        if (this.fanDeportes){
            return "Sí, soy fan de los deportes";
        }   
        
        else {
            return "No soy tan fan aún de los deportes";
        }

        }
}

console.log(usuario.deportistaProfesional()); 

    





























