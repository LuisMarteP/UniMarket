const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController'); // Importar el controlador

// Ruta para obtener los usuarios
router.get('/', getUsers);

module.exports = router;
