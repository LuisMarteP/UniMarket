const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Asegúrate de incluir esta librería si estás usando `compare`.

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        console.log('Intentando registrar usuario:', { name, email });

        // Verificar si el usuario ya existe
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            console.warn('Correo ya registrado:', email);
            return res.status(400).json({ message: 'El correo ya está registrado.' });
        }

        // Crear el usuario
        const user = await User.create({ name, email, password });
        console.log('Usuario creado exitosamente:', user);

        // Generar un token JWT
        const token = jwt.sign({ id: user.insertId }, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.status(201).json({ message: 'Registro exitoso.', token });
    } catch (error) {
        console.error('Error en el registro:', error.message);
        res.status(500).json({ message: 'Error en el servidor.', error: error.message });
    }
};



exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log('Intentando iniciar sesión con:', email);

        // Verificar si el usuario existe
        const user = await User.findByEmail(email);
        if (!user) {
            console.warn('Usuario no encontrado:', email);
            return res.status(401).json({ message: 'Correo o contraseña incorrectos.' });
        }

        // Comparar contraseñas
        const isMatch = await bcrypt.compare(password, user.Contraseña_Usu);
        if (!isMatch) {
            console.warn('Contraseña incorrecta para usuario:', email);
            return res.status(401).json({ message: 'Correo o contraseña incorrectos.' });
        }

        // Generar un token JWT
        const token = jwt.sign({ id: user.ID_Usuario }, process.env.JWT_SECRET, { expiresIn: '30d' });

        console.log('Inicio de sesión exitoso para usuario:', email);
        res.json({ message: 'Inicio de sesión exitoso.', token });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error.message);
        res.status(500).json({ message: 'Error en el servidor.', error: error.message });
    }
};



