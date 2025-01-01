const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Probar la conexión a la base de datos
connectDB.getConnection()
    .then(connection => {
        console.log('Conexión a la base de datos exitosa');
        connection.release();
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
    });

// Rutas
app.use('/auth', authRoutes);

// Inicio del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));


//const userRoutes = require('./routes/userRoutes'); // Ajusta la ruta según tu estructura
//app.use('/api/users', userRoutes);
