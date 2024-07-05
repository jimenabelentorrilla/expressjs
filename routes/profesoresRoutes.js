const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController.js'); 

router.get('/', profesoresController.consultar);
router.post('/', profesoresController.ingresar);

router.route('/:id')
	// Agregamos una consulta mas de GET para UN SOLO profesor
	.get(profesoresController.consultarDetalle)
	.put(profesoresController.actualizar)
	.delete(profesoresController.borrar)

// De esta manera nos ahorramos repetir reiteradas veces las rutas!

module.exports = router;