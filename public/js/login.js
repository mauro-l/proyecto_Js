
import { decodificadorMensaje } from '../src/codificador.js';

const USUARIOS = [
    {
    nombre: 'pepe',
    email: 'pepe-elcapo@gmail.com',
    contraseña: 'Pepe1234'
},
{
    nombre:'mauro',
    email: 'mauro@gmail.com',
    contraseña:'Mauro123'
}];

/* -v-v-v-v- INICIO DE SESION -v-v-v-v- */

const DATOS = document.getElementById('signIn');
const ERROR = document.getElementById('msgError');
let nombreLS = '';
let emailLS = '';
let passLS = '';
let nombre2LS = '';
let email2LS = '';
let pass2LS = '';

//escucha de evento de formulario
DATOS.addEventListener('submit', (e)=>{
    
    e.preventDefault();

    //busca si existen usuarios creados en el local storage
    const datosLocalStorage = localStorage.getItem("usuariosCreados");
    const usuario = JSON.parse(datosLocalStorage);


    if(datosLocalStorage.length === 1){
        Object.entries(usuario).forEach(() =>{                        
            nombreLS = usuario.nombre;
            emailLS = usuario.email;
            passLS = usuario.clave;
        })
    }
    if(datosLocalStorage.length === 2){
        Object.entries(usuario).forEach(() =>{                        
            nombreLS = usuario[0].nombre;
            emailLS = usuario[0].email;
            passLS = usuario[0].clave;
            nombre2LS = usuario[1].nombre;
            email2LS = usuario[1].email;
            pass2LS = usuario[1].clave;
        })
    }

    console.log('CLAVELS: ', passLS);
    const claveDecodificada = decodificadorMensaje(passLS);
    
    console.log('NOMBRE:', nombreLS);
    console.log('EMAIL: ', emailLS);
    console.log('CLAVE: ', claveDecodificada );


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

        localStorage.setItem('sesionIniciada', 'true');

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