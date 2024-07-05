const express = require('express');
const app = express();
const estudiantesRoutes = require('./routes/estudiantesRoutes.js');
const profesoresRoutes = require('./routes/profesoresRoutes.js');

app.get('/', (req, res) => {
	res.send('Hola Mundo');
}); 

app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores", profesoresRoutes);

app.listen(6500, () => {
	console.log('Servidor activo');
}); // En el puerto que va a estar escuchando