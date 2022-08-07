 
const conexion = require ('../config/conexion.js');
const express = require('express');
//const nombreArchivos = '';


//Trae todos los pokemones
const pokemonList = (req, res)=>{
    conexion.query(
       'SELECT * FROM Pokemons', (error, result)=>{
          if(error){
              throw error;
          }else{
           
              res.send(result);
          }
      })
   };

//Una consulta que trae un pokemon por su id
const pokemonPorId = (req, res)=>{
    let id = req.params.id;
    conexion.query(
       'SELECT * FROM Pokemons WHERE id = ?', [id], (error, result)=>{
          if(error){
              throw error;
          }else{
           
              res.send(result);
          }
      }
  )
};
//elimina pokemon por ID

const borrarPorId =(req, res)=>{
    let id = req.params.id;
    conexion.query(
       'DELETE  FROM Pokemons WHERE id = ?', [id], (error, result)=>{
          if(error){
              throw error;
          }else{
           
              res.send(result);
          }
      }
  )
};


const agregarPokemon =  (req, res)=>{
    const{id, nombre, descripcion, precio}= req.body;
    pesoNumero = parseInt(precio);
    this.nombreArchivos = nombre;
    const imagen =  `./assets/Imagenes/${nombre}.png`;
    let query = `INSERT INTO Pokemons (id, nombre, descripcion, precio, imagen) VALUES ('${id}', '${nombre}', '${descripcion}', ${precio}, '${imagen}')`;
    conexion.query(query, (error, result)=>{
          if(error){
              throw error;
          }else{
              res.json({status: 'Pokemon agregado'});
          }
      }
  )
};

const nombreArchivo = (req, res)=>{
    let nombre = this.nombreArchivos;
    return nombre;
}


//TODO PARA AGREGAR IMAGENES

const agregarImagen = (req, res)=>{
    const file = req.file.filename;
    console.log(file);
    res.send({data: "ok", url: `http://localhost:3000/${file}`});
};







//Modificar un pokemon
const modificarPokemon= (req, res)=>{
    const id = req.params.id;
    const{ nombre, descripcion, precio}= req.body;
    console.log(req.body);
    let query =  `UPDATE Pokemons SET  nombre = '${nombre}', descripcion = '${descripcion}', precio = '${precio}' WHERE id= '${id}'`;	
    conexion.query(query, (error, result)=>{
          if(error){
              throw error;
          }else{
           
              res.json({status: 'Pokemon modificado'});
          }

      }
  )
};

module.exports = {pokemonList, pokemonPorId, borrarPorId, agregarPokemon, agregarImagen, modificarPokemon, nombreArchivo};