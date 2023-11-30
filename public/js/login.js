/* class Usuario {
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

iniciarSesion(); */ 



/* -v-v-v-v- INICIO DE SESION -v-v-v-v- */

const DATOS = document.getElementById('signIn');
const ERROR = document.getElementById('msgError');

DATOS.addEventListener('submit', (e)=>{
    
    e.preventDefault();

    const user = document.getElementById('username');
    const pass = document.getElementById('password');

   
    if (user.value === 'pepe' && pass.value === 'pepe123')
    {
        user.classList.add('text-green-800');
        pass.classList.add('text-green-900');

        setTimeout(() => {
            user.classList.remove('text-green-800');
            pass.classList.remove('text-green-900');
        }, 2000);  
        console.log('datos correctos');
    }
    else{
        
        ERROR.classList.remove('hidden');
        ERROR.classList.add('block');
        user.classList.add('border-b-red-900');
        pass.classList.add('border-b-red-900');

        setTimeout(() => {
            ERROR.classList.remove('block');
            ERROR.classList.add('hidden');
            user.classList.remove('border-b-red-900');
            pass.classList.remove('border-b-red-900');
        }, 2000);        
        console.log('error');
    }
    
})