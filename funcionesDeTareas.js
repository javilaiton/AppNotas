const fs = require("fs")
const tareas = require("./tareas.json")

const listar = (item, index) => {   // Función que entra como callback en el foreach para mostrar la lista de tareas existentes.
    console.log(item=tareas[index])
}

const crearTarea= title => {    // Función principal que crea, agrega y guarda una nueva tarea en el array de lista de tareas JSON.
    let nuevaTarea = {
        titulo : title,
        estado : "pendiente"
    }
    guardarTarea(nuevaTarea)
}

const guardarTarea = (nuevaTarea) => {  // Función encargada de convertir lista de tareas JSON a fotmato array de objetos literales y agregar la nueva tarea a dicho array de objetos literales.
    const listTareasJs = tareas
    listTareasJs.push(nuevaTarea)
    escribirJSON(listTareasJs)
}

const escribirJSON = (listTareasJs) =>{  // Función encargada de convertir el array de objetos literales a formato JSON y de Escribirlo en el archivo "tareas.json"
    const listTareasJSON=  JSON.stringify(listTareasJs,null,4)
    fs.writeFileSync("./tareas.json",listTareasJSON); 
}

const filtrarPorEstado = (estado) => {  // Función encargada de filtrar el array de tareas por un estado determinado y mostrar los elementos que cumplen con dicho estado.
    const listTareasJs = tareas
    return console.log( listTareasJs.filter( elemento => elemento.estado == estado) ); 
}






module.exports = {crearTarea, listar, filtrarPorEstado}

