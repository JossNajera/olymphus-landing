const { response, request } = require('express');
const Prospect = require('../models/prospect');
const {enviarCorreoProspecto, enviarCorreoCEO} = require('./enviarCorreo');



// GUARDAR DATOS DEL CONTACTO
const saveProspectData = async(req =  request, res = response) => {

    // RECUPERAR DATOS DEL FORMULARIO
    const {nombreCompleto, correo, cargo, empresa, telefono, servicioInteres, comentario} = req.body;
    const dataForm = new Prospect({nombreCompleto, correo, empresa, cargo, telefono, servicioInteres, comentario}); 

    // VALIDAR SI EL CORREO YA EXISTE EN LA DB
    const existeCorreo =  await Prospect.findOne({correo});
    if(existeCorreo){
        return res.status(400).json({
            msg:"Este correo ya esta registrado"
        })
    }else{

    // GUARDAR INFORMACION EN LA DB
    await dataForm.save();

    // ARGUMENTOS PARA LOS CORREOS
    const correo2 = process.env.CORREO;
    const asunto  = `¡Gracias por contactarnos ${nombreCompleto}`;
    const asunto2 = `El usuario ${nombreCompleto} esta interesado en un proyecto`;
    
    // DISPARAR CORREOS A LOS USUARIOS
    const correoExitoso  =  await enviarCorreoProspecto(correo, asunto, nombreCompleto, telefono, servicioInteres, comentario);
    const correoExitoso2 =  await enviarCorreoCEO(correo2, asunto2, nombreCompleto, correo, telefono, servicioInteres, comentario);

    // RESPUESTA EXITOSA O FALLIDA DE LOS CORREOS
    if (correoExitoso) {
        res.status(200).json({ status: 'Correo enviado al usuario con éxito' });
        return;
    } else {
        res.status(500).json({ error: 'No se pudo enviar el correo' });
    }

    if (correoExitoso2) {
        res.status(200).json({ status: 'Correo enviado al CEO con éxito' });
        return;
    } else {
        res.status(500).json({ error: 'No se pudo enviar el correo' });

    }
    
    // RESPUESTA DEL SERVIDOR EXITOSA
    res.status(201).json({
        msg:'Data Saved',
        dataForm,
    })
      
    }

    return;


};


module.exports = saveProspectData;