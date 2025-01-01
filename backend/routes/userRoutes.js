const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController'); // Importar el controlador
const db = require('../config/db'); // Importa la base de datos

// cargar los usuarios
router.get('/', getUsers);

// \prueba para cargar todos los usuarios
//router.get('/test-usuarios', async (req, res) => {
//    try {
//        const [rows] = await db.execute('SELECT * FROM usuarios'); // Ajusta la tabla según tu base de datos
//        res.json(rows); // Devuelve los usuarios en formato JSON
//    } catch (error) {
//        console.error('Error al obtener usuarios:', error);
//        res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
//    }
//});


module.exports = router;