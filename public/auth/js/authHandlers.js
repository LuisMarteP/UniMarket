// Simulación de base de datos local
const usuariosDB = JSON.parse(localStorage.getItem('usuariosDB')) || [];

// Función para registrar un usuario
export function registrarUsuario(usuario) {
    // Verificar si el correo ya está registrado
    const existe = usuariosDB.some(u => u.correo === usuario.correo);
    if (existe) {
        return { success: false, message: 'El correo ya está registrado.' };
    }

    // Guardar usuario
    usuariosDB.push(usuario);
    localStorage.setItem('usuariosDB', JSON.stringify(usuariosDB));
    return { success: true, message: 'Registro exitoso.' };
}

// Función para validar inicio de sesión
export function iniciarSesion(correo, password) {
    const usuario = usuariosDB.find(u => u.correo === correo && u.password === password);
    if (usuario) {
        return { success: true, message: 'Inicio de sesión exitoso.', usuario };
    } else {
        return { success: false, message: 'Correo o contraseña incorrectos.' };
    }
}
