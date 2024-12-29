const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Importar las rutas de usuarios

app.use(express.json());

// Rutas
app.use('/api/users', userRoutes); // Prefijo para las rutas de usuarios

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
