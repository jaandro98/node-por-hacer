const descripcion = {
    demand:true,
    alias:'d',
    desc:'Descripcion de la tarea por hacer'
};

const completado = {
    alias:'c',
    desc:'Estado de la tarea: si esta completa o no'
}

const argv = require('yargs')
    .command('crear','Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar','Actualiza una tarea',{
        descripcion,
        completado
    })
    .command('borrar','Borra una tarea',{
        descripcion
    })
    .command('listar','Lista una tarea',{
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}