class EstudiantesController {
	constructor(){
		
	}
    
	// Métodos del constructor les asignamos el comportamiento que hicimos en rutas
	consultar(req, res) {
		res.json({msg: 'Consulta de estudiantes desde clase'});
	}
	consultarDetalle(req, res) {
        res.json({msg: 'Consulta detalles de un estudiante desde clase'});
	}
	ingresar(req, res) {
        res.json({msg: 'Ingreso de estudiantes desde clase'});
	}
	actualizar(req, res) {
        res.json({msg: 'Actualizacion estudiante desde clase'});
	}
	borrar(req, res) {
        res.json({msg: 'Borrado de estudiante desde clase'});
	}
}
// Exportamos una instancia de la clase
module.exports = new EstudiantesController();