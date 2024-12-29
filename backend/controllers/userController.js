const db = require('../database'); // Importamos la conexión a la base de datos

const getUsers = async (req, res) => {
    try {
        // Ejecutar consulta a la base de datos
        const query = 'SELECT * FROM Usuarios'; // Ajusta "Usuarios" al nombre de tu tabla
        const usuarios = await db.query(query);

        // Devolver los resultados como JSON
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

module.exports = {
    getUsers,
};
