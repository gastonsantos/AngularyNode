const express = require('express');
const router = express.Router();
const multer = require('multer'); //para subir archivos
const app = express();
app.use(express.static('../src/assets/Imagenes'));

const { pokemonList, pokemonPorId, borrarPorId, agregarPokemon, agregarImagen, modificarPokemon, nombreArchivo} = require('../controllers/pokemones.js');



const storage = multer.diskStorage(
    {   
        filename: function (res, file, cd){//para asignarle un nombre a la imagen o imagen

           cd(null, nombreArchivo()+'.png');
        }, 
        destination: function (req, file, cb){
            cb(null, '../src/assets/Imagenes')  //donde se guarda el archivo
            
        },
});

const upload = multer({storage: storage});






router.get('/', pokemonList);
router.get ('/:id', pokemonPorId);
router.delete('/:id', borrarPorId);
router.post('/', agregarPokemon); 
router.post('/upload',upload.single('myFile'), agregarImagen);
router.put ('/id', modificarPokemon);

module.exports = router;