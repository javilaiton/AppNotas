//const fs = require ("fs")
//const tareas = require("./tareas.json")
const funciones = require("./funcionesDeTareas.js")

let accion = process.argv[2]

funciones(accion)

