const tareas = require("./tareas.json")
const funciones = require("./funcionesDeTareas.js")

let accion = process.argv[2]

let titulo = process.argv[3]


switch (accion) {
    case "listar":
        tareas.forEach(funciones.listar);
        
        break;

    case "crear":
        funciones.crearTarea(titulo)

        break;

    case undefined:
        console.log("Atención - Tienes que pasar una acción.")
        break;

    default:
        console.log("No entiendo qué quieres hacer.");
        break;
}



