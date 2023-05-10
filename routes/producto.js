const express = require('express');
const router = express.Router();
const productoController = require ('../controllers/productoController');



//rutas
router.post('/', productoController.crearProducto )
router.get('/',productoController.obtenerProductos)
router.get('/:id',productoController.obtenerProducto)
router.delete('/:id',productoController.eliminarProducto);

module.exports =  router;