const express = require('express');
const session = require('express-session');

const cors = require('cors');
const dbConnection = require('../config/conexion.js');
const pokemonesRutas = require('../routes/pokemones.js');
const carritoRutas = require('../routes/carrito.js');
const usuariosRutas = require('../routes/usuarios.js');

class Servidor{


    constructor(){
        this.app = express();
        this.puerto = 3000;
        this.conectarDB();
        this.middlewares();
        this.rutas();

    }
 
    conectarDB(){
        return dbConnection;
    }

    middlewares(){
        this.app.use(session({
            secret: "987f4bd6d4315c20b2ec70a46ae846d19d0ce563450c02c5b1bc71d5d580060b",
            saveUninitialized: true,
            resave: true,
            cookie: { secure: false }
          }));
          

        const corsOptions = {
            origin: 'http://localhost:4200',
            credentials: true ,
            optionSuccessStatus: 200
        }
    
        this.app.use(cors(corsOptions));
        this.app.use(express.json());

    }

    rutas(){
        this.app.use('/pokemones', pokemonesRutas);
        this.app.use('/carrito', carritoRutas);
        this.app.use('/usuarios', usuariosRutas);



    }

    listen(){
        this.app.listen(this.puerto, ()=> 
            console.log('Servidor corriendo en el puerto' + this.puerto));
        }
    
}
module.exports = Servidor;