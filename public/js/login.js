class Usuario {
    constructor(nombre, rol, clave,){
        this.nombre = nombre.toLowerCase();
        this.rol = rol.toLowerCase();
        this.clave = clave.toLowerCase();
        this.inicioSesion = false;
    }

    login(){
        this.inicioSesion = true;
    }
    
}

const usuario1 = new Usuario ('Mauro', 'Admin', 'Admin');
const usuario2 = new Usuario ('Nicolas', 'Usuario', 'Nicolas');
const usuario3 = new Usuario ('Maxi', 'Usuario', 'Maxi');

const usuarios = [usuario1, usuario2, usuario3];

const iniciarSesion = () => {
    
    if(sesionActiva.estado === true) //Si hay una sesion activa, muestra por pantalla cual es el usuario activo.
        alert(`Ya existe una sesion activa con el usuario ${sesionActiva.indiceUsuario}`)
    else{
        let indice = null;
        userOk = false;
        const nombreUsuario = prompt('Nombre de usuario:').toLowerCase();
        for (const usuarioLista of usuarios){
            if(nombreUsuario === usuarioLista.nombre){
                userOk = true;
                indice = usuarios.indexOf(usuarioLista);
            }
        }
    
        if (userOk === false)
            alert("Usuario no encontrado");
    
        if (userOk == true){
            const claveUsuario = prompt('Ingrese su clave:').toLowerCase();
            if (claveUsuario !== usuarios[indice].clave)
                alert('Está mal la clave mi rey...');
            else{
                usuarios[indice].login();
                sesionActiva.login(indice);
            } 
        } 
    } 
}

iniciarSesion(); 
