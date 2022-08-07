

const Servidor = require('./models/servidor.js');
const servidor = new Servidor();




servidor.listen();







/*

require('./config/conexion.js');
const express = require('express');
const session = require('express-session');
const cors = require('cors');

const port = process.env.PORT || 3000;
//exoress
const app = express();
//para que ande le tuve q agregar esto q es? no se, pero funco
app.use(session({
    secret: "987f4bd6d4315c20b2ec70a46ae846d19d0ce563450c02c5b1bc71d5d580060b",
    saveUninitialized: true,
    resave: true,
  }));
//uso de Cors
app.use(cors());
//port
app.set('port', port);
//admitir tipos de datos
app.use(express.json());
//rutas

app.use('/api', require('./router'));
app.use('/apiUser', require('./cognito'));
/*
app.use('/pokemon', require('./routes/pokemones.js'));
app.use('/carrito', require('./routes/carrito.js'));
app.use('/usuarios', require('./routes/usuarios.js'));




//iniciar el servidor
app.listen(app.get('port'), (error) => {
    if(error){
        console.log('Error al iniciar el servidor'+error);
    }
    console.log(`Server on port ${app.get('port')}`);
});


*/