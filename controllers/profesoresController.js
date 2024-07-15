/*Conexion a la base de datos*/

const db = require ('../database/conexion.js');

class ProfesoresController {
	constructor(){
		
	}
    
	// Métodos del constructor les asignamos el comportamiento que hicimos en rutas
	consultar(req, res) {
		/*res.json({msg: 'Consulta de profesores desde clase'});**/
		try {
			db.query(`SELECT * FROM profesores`,
			(err, rows) => {
				if (err) {
					res.status(400).send(err);
				}
				res.status(200).json(rows);
			});
		} catch (err){
			console.log(err);
			res.status(500).send(err.message);
		}
	}



	consultarDetalle(req, res) {
        /*res.json({msg: 'Consulta detalles de un profesor desde clase'});**/
		try {
			const { id } = req.params;
			db.query(`SELECT * FROM profesores WHERE id = ?`, [id],
			(err, rows) => {
				if (err) {
					res.status(400).send(err);
				}
				res.status(200).json(rows[0]);
			});
		} catch (err){
			console.log(err);
			res.status(500).send(err.message);
		}
	}



	ingresar(req, res) {
        /*res.json({msg: 'Ingreso de un profesor desde clase'});**/
		try {
			const { dni, nombre, apellido, email, profesion, telefono } = req.body;
			db.query(`INSERT INTO profesores
				(id, dni, nombre, apellido, email, profesion, telefono)
				VALUES (NULL, ?, ?, ?, ?, ?, ?);`,
			[dni, nombre, apellido, email, profesion, telefono], (err, rows) => {
				if (err) {
					res.status(400).send(err);
				} else {
					res.status(201).json({ id :rows.insertId });
				}
			});
		} catch (err){
			console.log(err);
			res.status(500).send(err.message);
		}
	}



	actualizar(req, res) {
        /**res.json({msg: 'Actualizacion de un profesor desde clase'});*/
		const { id } = req.params;
		try {
			
			const { dni, nombre, apellido, email, profesion, telefono, id } = req.body;
			db.query(`UPDATE cursos.profesores
				SET dni = ?, nombre = ?, apellido = ?, email=?, profesion = ?, telefono = ?
				WHERE id = ?;`,
			[dni, nombre, apellido, email, profesion, telefono, id ], (err, rows) => {
				if (err) {
					res.status(400).send(err);
				}
				if (rows.affectedRows == 1)
					res.status(201).json({ respuesta : 'Registro actualizado con éxito!' });
			});
		} catch (err){
			console.log(err);
			res.status(500).send(err.message);
		}
	}



	borrar(req, res) {
        /*res.json({msg: 'Borrado de un profesor desde clase'});*/
		const { id } = req.params;
		try {
			db.query(`DELETE FROM profesores WHERE id = ?;`,
				[ id ], (err, rows) => {
					if (err) {
						res.status(400).send(err);
					}
					if (rows.affectedRows == 1)
						res.status(201).json({ respuesta : 'Registro eliminado con éxito!' });
				});
		} catch (err){
			console.log(err);
			res.status(500).send(err.message);
		}
	}
}

// Exportamos una instancia de la clase
module.exports = new ProfesoresController();