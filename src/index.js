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
    
    let indice = null;
    userOk = false;

    const nombreUsuario = prompt('Nombre de usuario:').toLowerCase();
    
    for (const usuarioLista of usuarios){
        if(nombreUsuario === usuarioLista.nombre){
            userOk = true;
            indice = usuarios.indexOf(usuarioLista);
            console.log(usuarioLista);
            console.log(indice);
        }
    }

    if (userOk === false)
        alert("Usuario no encontrado");
        
   
    
    if (userOk == true){
        const claveUsuario = prompt('Ingrese su clave:').toLowerCase();
        
        if (claveUsuario !== usuarios[indice].clave)
            alert('Está mal la clave mi rey...');
        else 
            usuarios[indice].login();
    } 
    
}

iniciarSesion(); 
