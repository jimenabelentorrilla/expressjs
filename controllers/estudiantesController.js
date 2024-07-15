/*Conexion a la base de datos*/

const db = require ('../database/conexion.js');

class EstudiantesController {
	constructor(){
		
	}
    
	// Métodos del constructor les asignamos el comportamiento que hicimos en rutas

	// Luego de instalar la base de datos debo reemplazar estos metodos con las consultas entre backticks.-

	consultar(req, res) {
		/**res.json({msg: 'Consulta de estudiantes desde clase'});**/
		try {
			db.query(`SELECT * FROM estudiantes`,
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
        /**res.json({msg: 'Consulta detalles de un estudiante desde clase'});*/
		try {
			const { id } = req.params;
			db.query(`SELECT * FROM estudiantes WHERE id = ?`, [id],
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
        /*res.json({msg: 'Ingreso de estudiantes desde clase'});**/
		try {
			const { dni, nombre, apellido, email } = req.body;
			db.query(`INSERT INTO estudiantes
				(id, dni, nombre, apellido, email)
				VALUES (NULL, ?, ?, ?, ?);`,
			[dni, nombre, apellido, email], (err, rows) => {
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
        /*res.json({msg: 'Actualizacion estudiante desde clase'});**/
		const { id } = req.params;
		try {
			
			const { dni, nombre, apellido, email } = req.body;
			db.query(`UPDATE cursos.estudiantes
				SET dni = ?, nombre = ?, apellido = ?, email=?
				WHERE id = ?;`,
			[dni, nombre, apellido, email, id], (err, rows) => {
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
        /*res.json({msg: 'Borrado de estudiante desde clase'});**/
		const { id } = req.params;
		try {
			db.query(`DELETE FROM estudiantes WHERE id = ?;`,
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
module.exports = new EstudiantesController();