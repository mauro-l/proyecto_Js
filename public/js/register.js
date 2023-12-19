

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

// Contenedor formulario
const CREATE = document.getElementById('create');

// Datos de formulario
const NAME = document.getElementById('createName');
const LASTNAME = document.getElementById('createLastname');
const MAIL = document.getElementById('createMail');
const DATE = document.getElementById('createDate');
const NEWLASTER = document.getElementById('newlaster');

//Datos de contraseñas
const PASS = document.getElementById('createPass');
const CONFIRM_PASS = document.getElementById('createPassword');
const PASS_CHECK = document.getElementById('verificarPass');

// Elementos para verificar requisitos dinamicamente
const PASS_LENGTH = document.getElementById('passLength');
const PASS_MAYUS = document.getElementById('passMayus');
const PASS_NUM = document.getElementById('passNum');
const MSG_ERROR = document.getElementById('errorMsg');

//mensaje de error cuando la contraseña no cumple con los requisitos
function imprimirMensajeError(){

    //imprime mensaje de error
    MSG_ERROR.innerHTML = `<p>LA CONTRASEÑA NO CUMPLE CON LOS REQUISITOS!</p>`;
    MSG_ERROR.classList.remove('hidden');
    MSG_ERROR.classList.remove('border-b-navy-100');
    MSG_ERROR.classList.add('block');
    PASS.classList.add('border-b-red-900');

    setTimeout(() => {
        MSG_ERROR.classList.remove('block');
        MSG_ERROR.classList.add('hidden');
        PASS.classList.remove('border-b-red-900');
        MSG_ERROR.classList.add('border-b-navy-100');
    }, 3000); 
}

//muestra cuales son los requisitos que no se han cumplido y cuales si mediante colores y un indicador grafico
function mostrarRequisitosPass(arreglo){

    //mensajes para inyectar mediante data-tip
    const tooltipUno = "Debe contener";
    const tooltipDos = "Su contraseña incluye";

    PASS_CHECK.setAttribute('data-tip', tooltipDos);

    //recorre el arreglo el cual contiene los nodos a modificar, el color a modificar y un indicador grafico.
    arreglo.forEach(elemento => {
        const clases = document.getElementById(`${elemento.clase}`);
        clases.classList.add(`!text-${elemento.color}-900`);
        clases.setAttribute('data-tip', `${elemento.emoji}`);

        setTimeout(() => {            
            clases.classList.remove(`!text-${elemento.color}-900`);
            clases.setAttribute('data-tip', " ");            
        }, 3000);
    });

    setTimeout(() => {            
        PASS_CHECK.setAttribute('data-tip', tooltipUno);         
    }, 3000);

    imprimirMensajeError();
}

//examina los caracteres ingresados y comprueba que se cumplan los requisitos para la creacion de contraseñas. Tambien verifica que coincidan las contraseñas ingresadas por el usuario.
//si se cumplen los requisitos y las contraseñas coinciden devuelve TRUE, de lo contrario devolvera FALSE.
function verificarRequisitosPass(){

    const caracteresMayorA6 = PASS.value.length > 6;
    const contieneMayusculas = /[A-Z]/.test(PASS.value);
    const contieneNumeros = /\d/.test(PASS.value);
    
    if (!caracteresMayorA6 && !contieneMayusculas && !contieneNumeros)
    {
        console.log(`esta pasando por aca 1!❌❌❌, longitud de la contraseña: ${PASS.value.length} -., la contraseña contiene Mayusculas: ${contieneMayusculas} -. contiene Numeros: ${contieneNumeros} -.`);
        const datos = [
            { clase: 'passLength', emoji: '❌', color: 'red' },
            { clase: 'passMayus', emoji: '❌', color: 'red' },
            { clase: 'passNum', emoji: '❌', color: 'red' },
        ];
        mostrarRequisitosPass(datos);
        return false;
    }

    if(!caracteresMayorA6 && contieneMayusculas && contieneNumeros)
    {
        console.log(`esta pasando por aca 2!❌✅✅, longitud de la contraseña: ${PASS.value.length} -., la contraseña contiene Mayusculas: ${contieneMayusculas} -. contiene Numeros: ${contieneNumeros} -.`);
        const datos = [
            { clase: 'passLength', emoji: '❌', color: 'red' },
            { clase: 'passMayus', emoji: '✅', color: 'green' },
            { clase: 'passNum', emoji: '✅', color: 'green' },
        ];
        mostrarRequisitosPass(datos);
        return false;
    }

    if(!caracteresMayorA6 && !contieneMayusculas && contieneNumeros)
    {
        console.log(`esta pasando por aca 3!❌❌✅, longitud de la contraseña: ${PASS.value.length} -., la contraseña contiene Mayusculas: ${contieneMayusculas} -. contiene Numeros: ${contieneNumeros} -.`);
        const datos = [
            { clase: 'passLength', emoji: '❌', color: 'red' },
            { clase: 'passMayus', emoji: '❌', color: 'red' },
            { clase: 'passNum', emoji: '✅', color: 'green' },
        ];
        mostrarRequisitosPass(datos);
        return false;
    }
    
    if(!caracteresMayorA6 && contieneMayusculas && !contieneNumeros)
    {                
        console.log(`esta pasando por aca 4!❌✅❌, longitud de la contraseña: ${PASS.value.length} -., la contraseña contiene Mayusculas: ${contieneMayusculas} -. contiene Numeros: ${contieneNumeros} -.`);
        const datos = [
            { clase: 'passLength', emoji: '❌', color: 'red' },
            { clase: 'passMayus', emoji: '✅', color: 'green' },
            { clase: 'passNum', emoji: '❌', color: 'red' },
        ];
        mostrarRequisitosPass(datos);
        return false;
    }

    if(caracteresMayorA6 && !contieneMayusculas && !contieneNumeros)
    {
        console.log(`esta pasando por aca 5!✅❌❌, longitud de la contraseña: ${PASS.value.length} -., la contraseña contiene Mayusculas: ${contieneMayusculas} -. contiene Numeros: ${contieneNumeros} -.`);
        const datos = [
            { clase: 'passLength', emoji: '✅', color: 'green' },
            { clase: 'passMayus', emoji: '❌', color: 'red' },
            { clase: 'passNum', emoji: '❌', color: 'red' },
        ];
        mostrarRequisitosPass(datos);
        return false;
    }

    if(caracteresMayorA6 && !contieneMayusculas && contieneNumeros){
        
        console.log(`esta pasando por aca 6!✅❌✅, longitud de la contraseña: ${PASS.value.length} -., la contraseña contiene Mayusculas: ${contieneMayusculas} -. contiene Numeros: ${contieneNumeros} -.`);
        const datos = [
            { clase: 'passLength', emoji: '✅', color: 'green' },
            { clase: 'passMayus', emoji: '❌', color: 'red' },
            { clase: 'passNum', emoji: '✅', color: 'green' },
        ];
        mostrarRequisitosPass(datos);
        return false;            
    }
    
    if(caracteresMayorA6 && contieneMayusculas && !contieneNumeros)
    {
        console.log(`esta pasando por aca 7!✅✅❌, longitud de la contraseña: ${PASS.value.length} -., la contraseña contiene Mayusculas: ${contieneMayusculas} -. contiene Numeros: ${contieneNumeros} -.`);
        const datos = [
            { clase: 'passLength', emoji: '✅', color: 'green' },
            { clase: 'passMayus', emoji: '✅', color: 'green' },
            { clase: 'passNum', emoji: '❌', color: 'red' },
        ];
        mostrarRequisitosPass(datos);
        return false;
    }

    if (caracteresMayorA6 && contieneMayusculas && contieneNumeros && PASS.value !== CONFIRM_PASS.value)
    {
        console.log('esta pasando por aca 8, no coinciden las contraseñas');
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
        }, 3000);        
        
        return false;
    }       
            
    if (caracteresMayorA6 && contieneMayusculas && contieneNumeros && PASS.value === CONFIRM_PASS.value)
    {
        console.log("la casa esta en orden ✅✅✅");
        const datos = [
            { clase: 'passLength', emoji: '✅', color: 'green' },
            { clase: 'passMayus', emoji: '✅', color: 'green' },
            { clase: 'passNum', emoji: '✅', color: 'green' },
        ];
        mostrarRequisitosPass(datos);
        
        return true;
    }

    return false;
}



CREATE.addEventListener('submit', (e)=>{
    
    e.preventDefault();
    
    const requisitosPassCoinciden = verificarRequisitosPass();
    
    if(requisitosPassCoinciden){
        const usuario = new User (NAME.value, LASTNAME.value, MAIL.value, DATE.value, PASS.value);
        USUARIOS.push(usuario);
        
        alert('DATOS CORRECTOS');
        CREATE.reset();
        console.log(USUARIOS);
    }
    

})



//estos dos se encargan de resaltar los requisitos al momento que el usuario llega el campo de crear Contraseña
 /* vvvvvv -------- vvvvvvv */
 PASS.addEventListener('focus', ()=>{
    if(PASS_CHECK.classList.contains('text-navy-150/50')){
        PASS_CHECK.classList.remove('text-navy-150/50');
    }
    PASS_CHECK.classList.add('text-white');
})
PASS.addEventListener('blur', ()=>{  
    if(!CONFIRM_PASS.value){
        PASS_CHECK.classList.remove('text-white');
        PASS_CHECK.classList.add('text-navy-150/50');
    }
}) 
 /* ^^^^^^ -------- ^^^^^^ */