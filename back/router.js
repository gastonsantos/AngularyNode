/*
const express = require('express');
const router = express.Router();
const conexion = require('./config/conexion.js');

const multer = require('multer'); //para subir archivos


let nombreArchivo = '';

const cors = require('cors');//esto es para que ande el cors

// asignamos todas las rutas

//Una consulta que trae todos los pokemones
router.get('/', (req, res)=>{
 conexion.query(
    'SELECT * FROM Pokemons', (error, result)=>{
       if(error){
           throw error;
       }else{
        
           res.send(result);
       }
   })
});
//Una consulta que trae un pokemon por su id
router.get('/:id', (req, res)=>{
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
});
//una consulta que elimina a un pokemon por su id
router.delete('/:id', (req, res)=>{
    let id = req.params.id;
    conexion.query(
       'DELETE  FROM Pokemons WHERE id_manual = ?', [id], (error, result)=>{
          if(error){
              throw error;
          }else{
           
              res.send(result);
          }
      }
  )
});



//agregar un pokemon
router.post('/', (req, res)=>{
    const{id, id_manual, nombre, altura, peso, id_tipo}= req.body;
    pesoNumero = parseInt(peso);
    nombreArchivo = nombre;
    const imagen =  `./assets/Imagenes/${nombreArchivo}.png`;
    let query = `INSERT INTO Pokemons (id, id_manual, nombre, altura, peso, id_tipo, imagen) VALUES ('${id}','${id_manual}', '${nombre}', '${altura}', ${pesoNumero}, '${id_tipo}', '${imagen}')`;
    conexion.query(query, (error, result)=>{
          if(error){
              throw error;
          }else{
              res.json({status: 'Pokemon agregado'});
          }
      }
  )
});

const storage = multer.diskStorage(
    {   
        filename: function (res, file, cd){//para asignarle un nombre a la imagen o imagen
            //const  ext = file.originalname.split('.').pop(); //para obtener la extension de la imagen .jpg, .png, etc   
            //const fileName = Date.now() //TODO UN STRING 1231221321
            //cd(null, `${fileName }.${ext}`); // TODO 123122.jpg, o .png 
            //cd(null, `merga.png`);
            cd(null, `${nombreArchivo}.png`);
        }, 
        destination: function (req, file, cb){
            cb(null, '../src/assets/Imagenes')  //donde se guarda el archivo
        },
});

//es para subir archivos n static para que se pueda guardar la imagen
const upload = multer({storage: storage});
const app = express();
app.use(express.static('../src/assets/Imagenes')); //se convierte e



router.post('/upload', upload.single('myFile'),(req, res)=>{
    const file = req.file.filename;
    console.log(file);
    res.send({data: "ok", url: `http://localhost:3000/${file}`});
});



//Modificar un pokemon
router.put('/:id', (req, res)=>{
    const id = req.params.id;
    const{id_manual, nombre, altura, peso, id_tipo}= req.body;
    console.log(req.body);
    let query =  `UPDATE Pokemons SET id_manual = '${id_manual}', nombre = '${nombre}', altura = '${altura}', peso = '${peso}', id_tipo = '${id_tipo}' WHERE id= '${id}'`;	
    //let query =  `UPDATE Pokemons SET id_manual = '100', nombre = 'Gaston', altura = '100M', peso = '500 KL', id_tipo = '5' WHERE id= '${id}'`;	
    conexion.query(query, (error, result)=>{
          if(error){
              throw error;
          }else{
           
              res.json({status: 'Pokemon modificado'});
          }

      }
  )
});

//Consultas de Carrito


router.get('/getCarrito/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query(
        `select p.nombre as nombre, p.peso as peso from Pokemons p join carrito c on c.id_pokemon = p.id where c.id_usuario = ${id} and c.pagado = false;`
        , (error, result)=>{
          if(error){
              throw error;
          }else{
           
              res.send(result);
          }
      })
   });

   //Agregar a Carrito


router.post('/addCarrito', (req, res)=>{
    const{id_pokemon, id_usuario, peso}= req.body;
    let query = `INSERT INTO carrito (id_usuario, id_pokemon,precio, pagado) VALUES ('${id_usuario}','${id_pokemon}', '${peso}', false)`;
    conexion.query(query, (error, result)=>{
          if(error){
              throw error;
          }else{
           

              res.json({status: 'Pokemon agregado al carrito'});
          }
      }
  )
});


router.get('/sumProdCarrito/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query(
        `select sum(precio) as total from carrito where pagado = false and id_usuario = ${id} ;`
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
     });











module.exports = router;
*/