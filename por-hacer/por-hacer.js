const fs = require('fs');

let listado_porhacer = [];

const db = () => {
    let data = JSON.stringify(listado_porhacer);

    fs.writeFile('db/data.json',data, err => {
        if(err) {
            throw new Error('No se pudo grabar',err);
        }
    })

}

const cargardb = () => {
    try {
        listado_porhacer = require('../db/data.json');
    } catch (error) {
        listado_porhacer = [];
    }
}

const crear = (descripcion) => {
    let porHacer = {
        descripcion:descripcion,
        completado:false
    }
    cargardb();
    listado_porhacer.push(porHacer);
    db();
    return porHacer;
}

const getListado = (completado) => {
    return listado_porhacer = require('../db/data.json');
}

const actualizar = (descripcion,completado=true) => {
    cargardb();

    let index = listado_porhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if(index >= 0) {
        listado_porhacer[index].completado = completado;
        db();
        return true;
    } else {
        return false;
    }

}

const eliminar = (descripcion) => {
    cargardb();

    let nuevo_listado = listado_porhacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if(nuevo_listado.length === listado_porhacer) {
        return false;
    } else {
        listado_porhacer = nuevo_listado;
        db();
        return true;
    }

}

module.exports = {
    crear,
    cargardb,
    getListado,
    actualizar,
    eliminar
}

