const {Schema, model} = require('mongoose');


const ProspectSchema = Schema({
    nombreCompleto:{
        type: String,
        required: [true, "El nombre es obligaorio"]
    },
    correo:{
        type: String,
        required: [true, "El correo es obligaorio"],
        unique: true
    },
    empresa:{
        type: String,
        required: [true, "La empresa es obligaoria"]
    },
    cargo:{
        type: String,
        required: [true, "El cargo es obligaorio"]
    },
    telefono:{
        type: String,
        required: [true, "El teléfono es obligaorio"]
    },
    servicioInteres:{
        type: String,
        required: [true, "El servicio de interes es obligaorio"]
    },
    comentario:{
        type: String,
        required: false
    },
});

module.exports = model( 'Prospect', ProspectSchema );