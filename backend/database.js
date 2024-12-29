const mysql = require('mysql2');

class Database {
    constructor() {
        this.host = 'localhost'; // Servidor de la base de datos
        this.db_name = 'dbmarket'; // Nombre de la base de datos
        this.username = 'root'; // Usuario de la base de datos
        this.password = ''; // Contraseña de la base de datos

        // Crear la conexión
        this.connection = mysql.createConnection({
            host: this.host,
            user: this.username,
            password: this.password,
            database: this.db_name,
        });

        // Probar la conexión
        this.connection.connect((error) => {
            if (error) {
                console.error('Error de conexión: ', error.message);
            } else {
                console.log('Conexión exitosa a la base de datos.');
            }
        });
    }

    // Método para ejecutar consultas
    query(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, params, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

// Exportamos la clase para usarla en otros archivos
module.exports = new Database();
