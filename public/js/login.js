
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