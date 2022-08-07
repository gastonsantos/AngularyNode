
/*
const conexion = require('./config/conexion.js');
const express = require('express');
//const session = require('express-session');
//const { getConfigFileParsingDiagnostics } = require('typescript');
const cognito = express.Router();
//const req = require('request');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createFalse } = require('typescript');
const {primsefy} = require('util') //vamos a usa promesas
 
  
cognito.post('/registrer', async (req,res )=>{
    //const{name, email, pasesword}= req.body;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    if(esEmailValido(email) && esContrasenaValida(password)){
    const passwordHassh = await bcryptjs.hash(password, 10);

    let query  = `INSERT INTO Usuario (name, email, password) VALUES ('${name}', '${email}', '${passwordHassh}')`;
    conexion.query(query, (error, result)=>{
        if(error){
            throw error;
        }else{
         

            res.json({status: 'Usuario registrado'});
        }
    })  }else{
        res.json({status: 'email o contraseña invalidas, por FAVOR verifique'});
    }
});

cognito.post('/loggearse', async  (req, res)=>{
    try{
        const email= req.body.email;
        const password = req.body.password;
        if(!email || !password){
            res.json({status: 'Ingrese email y contraseña'});
        }else{
            conexion.query('SELECT * FROM  Usuario WHERE email = ? ',[email], async (error, results)=>{
                if(results.length == 0 || !(await bcryptjs.compare(password, results[0].password))){
                    res.json({status: 'Usuario no existe'});
                }else{

                    const id = results[0].id; //capturar el ID
                    const token = jwt.sign({id:id}, 'secret', {expiresIn: '1h'}); //crear el token
                    const cookiesOptions = {
                        expires: new Date(Date.now() + 3600000),
                        httpOnly: true
                         }
                     

                         res.cookie( 'jwt', token, cookiesOptions);//les paso el nombre, el token y las opciones
                         res.json(results[0]);
                         res.send(results[0]);

                        }      
})  
}
 }catch(error){ 
            console.log(error) 
         }
  
    
});

cognito.get('/', async (req, res)=>{

    usuario = {
        id: 2,
        name:'name',
        email: 'name',
        password: 'name'
    }
   
    res.send( usuario);
        
});

//mantiene session
/*
cognito.get('/', async (req, res, next)=>{
    if(req.cookies.jwt){
        try{
            const decodificada = await primsefy(jwt.verify(req.cookies.jwt, 'jwt'));
            conexion.query('SELECT * FROM Usuario WHERE id = ?', [decodificada.id], (error, results)=>{
                if(!results){return next()}
                req.user = results[0];

                usuario= {
                    id: id,
                    name: results[0].name,
                    email: results[0].email,
                    password: results[0].password
                 }
                res.send(usuario);
    
                console.log(usuario);
    
                return next;
                  })
    
        }catch(error){
            console.log(error)
            return next()
        }
    
      }else{
         console.log("al Login deberia ir");
         
      }
});

cognito.get('/logout', (req, res)=>{
    req.session.destroy();
    res.json({status: 'Usuario desloggeado'});
});



//Hasta Aca
const esEmailValido = email => {
    return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}

const esContrasenaValida = contrasena => {
    return contrasena.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
}
    
     

 

module.exports = cognito;
*/