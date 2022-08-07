
const conexion = require('../config/conexion.js');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createFalse } = require('typescript');
const {primsefy} = require('util') //vamos a usa promesas
 





  
const registrer = async (req,res )=>{
    try{
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const rol = "user";
        if(esEmailValido(email) && esContrasenaValida(password)){
        const passwordHassh = await bcryptjs.hash(password, 10);
        let query  = `INSERT INTO Usuario (name, email,rol, password) VALUES ('${name}', '${email}', '${rol}','${passwordHassh}')`;
        conexion.query(query, (error, result)=>{
            if(error){
                throw error;
            }else{
                res.json({status: 'Usuario registrado'});
            }
        })  }else{
            res.json({status: 'email o contraseña invalidas, por FAVOR verifique'});
        }
    } catch (error){
        console.log(error);

    }
    
  
};

const loggearse = async(req, res)=>{

    
        const email= req.body.email;
        const password = req.body.password;
        if(!email || !password){
            res.json({status: 'Ingrese email y contraseña'});
        }else{
            conexion.query('SELECT * FROM  Usuario WHERE email = ? ',[email], async (error, results)=>{
                if(results.length == 0 || !(await bcryptjs.compare(password, results[0].password))){
                    res.json({status: 'Usuario no existe'});
                }else{

                
                    const data = {id: results[0].id, name: results[0].name, email: results[0].email, rol: results[0].rol};
                     //let data  = JSON.stringify(results[0]); //capturar la consulta
                     const token = jwt.sign(data , 'secret', {expiresIn: '120s'}); //crear el token
                     
                
                     res.json({token});
                        }  
                        
}) 

}
 }

const test = (verifyToken, (req,res) => {
    res.json('Informacion secreta');
  });
  
  function verifyToken(req,res, next){
    if(!req.headers.authorization) return res.status(401).json('No autorizado');
  
    const token = req.headers.authorization.substr(7);
    if(token!==''){
      const content = jwt.verify(token,'secret');
      req.data = content;
      next();
    }else{
      res.status(401).json('Token vacio');
    } 
  
  }
  
const logout = (req, res)=>{
   
} 





//Hasta Aca
const esEmailValido = email => {
    return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}

const esContrasenaValida = contrasena => {
    return contrasena.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
}
    
     

 

module.exports = {registrer, logout,test,  loggearse};