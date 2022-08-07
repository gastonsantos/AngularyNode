const conexion = require('../config/conexion.js');

const getCarrito  = (req, res)=>{
    const{id_usuario}= req.body;
    //id_usuario = 1;

    //const id = req.params.id; Este es el q sirve
    conexion.query(
        `select p.nombre as nombre, p.precio as precio, c.id as id_carrito from Pokemons p join carrito c on c.id_pokemon = p.id where c.id_usuario = ${id_usuario} and c.pagado = false;`
        , (error, result)=>{
          if(error){
              throw error;
          }else{
           
              res.send(result);
          }
      })
   };

   //Agregar a Carrito


const addCarrito = (req, res)=>{
    const{id_pokemon, id_usuario, precio}= req.body;
    let query = `INSERT INTO carrito (id_usuario, id_pokemon,precio, pagado) VALUES ('${id_usuario}','${id_pokemon}', ${precio}, false)`;
    conexion.query(query, (error, result)=>{
          if(error){
              throw error;
          }else{
           

              res.json({status: 'Pokemon agregado al carrito'});
          }
      }
  )
};


const sumProdCarrito= (req,res)=>{
    const{id_usuario}= req.body;
    conexion.query(
        `select sum(precio) as total from carrito where pagado = false and id_usuario = ${id_usuario} ;`
        , (error, result)=>{
          if(error){
              throw error;
          }else{
                var total = result[0].total;
                console.log(total);
                res.json(result);
             // res.send(result);
          } 
      })
     }; 
     const cantProdCarrito= (req,res)=>{
        const id = req.params.id;
        conexion.query(
            `select count(id) as cantidad from carrito where pagado = false and id_usuario = ${id} ;`
            , (error, result)=>{
              if(error){
                  throw error;
              }else{
                    var cantidad = result[0].cantidad;
                    console.log(cantidad);
                    res.json(cantidad);
                 // res.send(result);
              }
          })
         };

         const deleteCarrito = (req, res)=>{
            const id = req.params.id;
            conexion.query(
                `delete from carrito where id = ${id} ;`,
                (error, result)=>{
                    if(error){
                        throw error;
                    }else{
                        res.json({status: 'Pokemon eliminado del carrito'});
                    }
                })
 }
     module.exports = {getCarrito, addCarrito, sumProdCarrito, cantProdCarrito, deleteCarrito};