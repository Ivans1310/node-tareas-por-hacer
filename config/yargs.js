const descripcion = {
    // demand= es obligatorio este argumento
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    // valor por defecto si no se envia
    default: true,
    desc: 'Marca completado o pendiente la tarea'

}


const optCrear = {

    descripcion

}
const optActualizar = {

    descripcion,
    completado

}


const argv = require('yargs')
    // comando que se va a configurar en este caso se le configura al comando 'listar'
    // los argumentos base y limite
    .command('crear', 'Crea una tarea por hacer', optCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optActualizar)
    .command('listar', 'Listar la tareas')
    .command('borrar', 'Borrar una tarea', optCrear)


.help()
    .argv;

module.exports = {
    argv
};