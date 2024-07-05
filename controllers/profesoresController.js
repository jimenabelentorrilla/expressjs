class ProfesoresController {
	constructor(){
		
	}
    
	// Métodos del constructor les asignamos el comportamiento que hicimos en rutas
	consultar(req, res) {
		res.json({msg: 'Consulta de profesores desde clase'});
	}
	consultarDetalle(req, res) {
        res.json({msg: 'Consulta detalles de un profesor desde clase'});
	}
	ingresar(req, res) {
        res.json({msg: 'Ingreso de un profesor desde clase'});
	}
	actualizar(req, res) {
        res.json({msg: 'Actualizacion de un profesor desde clase'});
	}
	borrar(req, res) {
        res.json({msg: 'Borrado de un profesor desde clase'});
	}
}
// Exportamos una instancia de la clase
module.exports = new ProfesoresController();