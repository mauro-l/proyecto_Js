

/* -v-v-v-v- CREAR USUARIO -v-v-v-v- */
class User {
    constructor(nombre, apellido, email, edad, clave){
        this.nombre = nombre.toLowerCase();
        this.apellido = apellido.toLowerCase();
        this.email = email.toLowerCase();
        this.clave = clave.toLowerCase();
        this.edad = edad.toLowerCase();        
    }    
}

const USUARIOS = [];

const CREATE = document.getElementById('create');
const MSG_ERROR = document.getElementById('errorMsg');

CREATE.addEventListener('submit', (e)=>{

    e.preventDefault();

    const NAME = document.getElementById('createName');
    const LASTNAME = document.getElementById('createLastname');
    const MAIL = document.getElementById('createMail');
    const DATE = document.getElementById('createDate');
    const PASS = document.getElementById('createPass');
    const CONFIRM_PASS = document.getElementById('createPassword');

    if (PASS.value !== CONFIRM_PASS.value)
    {
        MSG_ERROR.innerHTML = `<p>LAS CONTRASEÑAS NO COINCINDEN!</p>`;
        MSG_ERROR.classList.remove('hidden');
        MSG_ERROR.classList.add('block');
        PASS.classList.add('border-b-red-900');
        CONFIRM_PASS.classList.add('border-b-red-900');

        setTimeout(() => {
            MSG_ERROR.classList.remove('block');
            MSG_ERROR.classList.add('hidden');
            PASS.classList.remove('border-b-red-900');
            CONFIRM_PASS.classList.remove('border-b-red-900');
        }, 2000);        
        console.log('error');
    }
    else if (PASS.value.length <= 6 || !/\d/.test(PASS.value) || !/[A-Z]/.test(PASS.value))
    {
        MSG_ERROR.innerHTML = `<p>LA CONTRASEÑA NO CUMPLE CON LOS REQUISITOS!</p>`;
        MSG_ERROR.classList.remove('hidden');
        MSG_ERROR.classList.add('block');
        PASS.classList.add('border-b-red-900');
        CONFIRM_PASS.classList.add('border-b-red-900');

        setTimeout(() => {
            MSG_ERROR.classList.remove('block');
            MSG_ERROR.classList.add('hidden');
            PASS.classList.remove('border-b-red-900');
            CONFIRM_PASS.classList.remove('border-b-red-900');
        }, 2000);  
    }
    else{
        console.log('datos correctos');
        
        const usuario = new User (NAME.value, LASTNAME.value, MAIL.value, DATE.value, PASS.value);
        USUARIOS.push(usuario);
        
        alert('DATOS CORRECTOS');
        CREATE.reset();
    }

    console.log(USUARIOS);

})


