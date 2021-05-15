
const descripcion = {
        alias:'d',
        demand:true,
        desc: 'descripcion de la tarea por hacer'
};


const  completado={
    alias:'c',
    default:true,
    desc:'marca como completado la tarea'
}

const argv = require('yargs')
            .command('listar' , 'muestra todas las tareas')
            .command('crear' , 'crea nueva tarea por hacer' , {
                descripcion,
                completado
            })
            .command('borrar' , 'borra una tarea por hacer' , {descripcion})
            .command('actualizar' , 'actualiza el estado completado de una tarea' , {
                descripcion,
                completado
            })
            .help()
            .argv;

module.exports = {
    argv
};

 






/**
 * comando basicos
 * 
 *  crear -d "pasear al perro"
 * 
 *  listar  (me lista todas las tareas)
 * 
 *  actualiza -d "pasear al perro"  -c true
 */