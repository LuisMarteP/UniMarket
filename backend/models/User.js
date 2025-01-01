const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
    create: async (user) => {
        try {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            const [result] = await db.execute(
                'INSERT INTO usuarios (Nombre_Usu, Apellido_Usu, Correo_Usu, Contraseña_Usu, ID_Estatus, ID_Rol_Usu, Telefono_Usu) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [user.nombre, user.apellido, user.correo, hashedPassword, 1, 2, user.telefono]
            );
            return result;
        } catch (error) {
            console.error('Error al crear usuario:', error.message);
            throw new Error('No se pudo registrar el usuario.');
        }
    },
    
    findByEmail: async (email) => {
        try {
            const [rows] = await db.execute('SELECT * FROM usuarios WHERE Correo_Usu = ?', [email]);
            console.log('Usuario encontrado:', rows[0]); // Log para depuración
            return rows[0];
        } catch (error) {
            console.error('Error en findByEmail:', error.message);
            throw new Error('Error al buscar el usuario por correo.');
        }
    },
    

    findById: async (id) => {
        const [rows] = await db.execute('SELECT * FROM usuarios WHERE ID_Usuario = ?', [id]);
        return rows[0];
    }
};

module.exports = User;

