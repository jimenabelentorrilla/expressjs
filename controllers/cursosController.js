/*Conexion a la base de datos*/

const db = require ('../database/conexion.js');


class CursosController {
	constructor(){
		
	}
    
	// Métodos del constructor les asignamos el comportamiento que hicimos en rutas
	consultar(req, res) {
		/*res.json({msg: 'Consulta de cursos desde clase'});**/
		try {
			db.query(`SELECT * FROM cursos`,
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
        /**res.json({msg: 'Consulta detalles de un curso desde clase'});*/
		try {
			const { id } = req.params;
			db.query(`SELECT * FROM cursos WHERE id = ?`, [id],
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
        /*res.json({msg: 'Ingreso de un curso desde clase'});**/
		try {
			const { nombre, descripcion, profesor_id } = req.body;
			db.query(`INSERT INTO cursos
				(id, nombre, descripcion, profesor_id)
				VALUES (NULL, ?, ?, ?);`,
			[nombre, descripcion, profesor_id], (err, rows) => {
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
        /*res.json({msg: 'Actualizacion de un curso desde clase'});*/
		const { id } = req.params;
		try {
			
			const { nombre, descripcion, profesor_id, id } = req.body;
			db.query(`UPDATE cursos.profesores
				SET nombre = ?, descripcion = ?, profesor_id = ?
				WHERE id = ?;`,
			[nombre, descripcion, profesor_id, id], (err, rows) => {
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
        /*res.json({msg: 'Borrado de un curso desde clase'});**/
		const { id } = req.params;
		try {
			db.query(`DELETE FROM cursos WHERE id = ?;`,
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


	asociarEstudiante(req, res) {
        /*res.json({msg: 'Ingreso de un curso desde clase'});**/
		try {
			const { curso_id, estudiante_id } = req.body;
			db.query(`INSERT INTO cursos_estudiantes
				(curso_id, estudiante_id)
				VALUES (?, ?);`,
			[ curso_id, estudiante_id ], (err, rows) => {
				if (err) {
					res.status(400).send(err);
				} else {
					res.status(201).json({ respuesta : 'Estudiante registrado con éxito!' });
				} 			
				
			});
		} catch (err){
			console.log(err);
			res.status(500).send(err.message);
		}
	}
}

// Exportamos una instancia de la clase
module.exports = new CursosController();