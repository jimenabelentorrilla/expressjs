const mysql = require('mysql2');

    const db = mysql.createConenection(
        {
            host: '209.38.245.108',
            user: 'cursos',
            password: 'wksjdlka!434',
            database: 'cursos',
        }
    );
    
    db.connect((err) => {
        if (err) {
            throw err;
        }
        console.log('Base de datos conectada');
    });

    module.exports = db;