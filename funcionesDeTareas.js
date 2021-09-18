
const tareas = require("./tareas.json")


let ejecutarFunciones = (accion) => {
    switch (accion) {
        
        case "listar":
            console.log(tareas)
            break;
    
        case undefined:
            console.log("Atención - Tienes que pasar una acción.")
            break;
    
        default:
            console.log("No entiendo qué quieres hacer.");
            break;
    }
}

module.exports = ejecutarFunciones

