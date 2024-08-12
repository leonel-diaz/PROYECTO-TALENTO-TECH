const mongoose = require('mongoose');
const shema = mongoose.shema;

const mascotaShema = new shema({
    nombre:String,
    descripcion:String
})
//creacion del modelo
const mascota = mongoose.model('mascota',mascotaShema);


module.exports(mascota);