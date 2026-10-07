const express = require('express');
const cors    = require('cors');
const { dbConnection } = require('../database/db');

class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT || 5000;

        //Rutas
        this.prospects = '/api/contactanos';

        // Ejecutar metodo Base de datos
        this.dbCNN();
        
        // Ejecutar metodo middlewar
        this.middlewares();
        
        // ejecutar metodo de rutas
        this.routes();
    
    }

    async dbCNN(){
        await dbConnection();
    };

    // Middlewares
    middlewares(){
        this.app.use(express.static('public') );
        this.app.use( cors( { origin: process.env.FRONTEND_URL || '*' } ) );
        this.app.use( express.json());
        // this.app.use( express.urlencoded({ extended:true }) );
    };

    // Routes
    routes(){
        this.app.use(this.prospects, require('../routes/prospects') );
    };

    
    // Levantar servidor
    listen(){
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en ${this.port}`)
        } )
    }


}

module.exports = Server;