const fs = require('fs');
const { parse } = require('path');
const { boolean } = require('yargs');

let listadoPorHacer = [];


const guardarDB = ()=>{
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json' , data , (e) =>{
        if(e) throw new Error('no se pudo grabar' , err);
    });
};


const cargarDB = ()=>{
    try {
        listadoPorHacer = require('../db/data.json');        
    } catch (error) {
        listadoPorHacer = [];
    }
};


const crear = (descripcion)=>{
    cargarDB();
    let porHacer = {
        descripcion,
        completado:false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};


const getListado = ()=>{
   
    cargarDB();
    return listadoPorHacer;
}


const actualizar = (descripcion, completado = true)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex((tarea)=>tarea.descripcion === descripcion);

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    else{
        return false;
    }
}

const borrar = (descripcion)=>{
    cargarDB();
    let listaNueva = listadoPorHacer.filter((tarea)=>{
        if(tarea.descripcion !== descripcion){
           return tarea;
        }
    });

    listadoPorHacer = listaNueva;
    guardarDB();
    return true;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};