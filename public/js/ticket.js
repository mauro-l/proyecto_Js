
const BOTONES_MOSTRAR = document.querySelectorAll(".BOTONES-MOSTRAR");
const SECCION_LOGIN = document.getElementById('seccionLogin');
const seccionHorario = document.getElementById('seccionHorario');
const seccionLugar = document.getElementById('seccionLugar');
const seccionPrecio = document.getElementById('seccionPrecio');

//Si el usuario a iniciado sesion muestra la info del usuario sino le indica que inicie sesion.
function sesionInfo(){

    const datosLocalStorage = JSON.parse(localStorage.getItem('sesionIniciada'));
    
    let div = document.createElement('div');
    
    if(datosLocalStorage){
        
        div.innerHTML = `
        <div>
            <h3 class="text-2xl pb-4 font-bold">Bienvenido ${datosLocalStorage.nombre}!</h3>
            <p class="text-navy-150">¡Gracias por formar parte de CinemaFan!</p>                        
            <p class="text-navy-150">Como socio, disfrutas de un 20% de descuento en toda nuestra cartelera!</p>
        </div>       
        `

    }else{
        div.innerHTML = `
        <div>
            <h3 class="text-2xl pb-4 font-bold">Ya eres miembro de CinemaFan?</h3>
            <p class="text-navy-150">Inicia sesión para reservar y acceder a nuestras exclusivas ofertas y descuentos.</p>                        
        </div>
        <div><a href="./login.html" class="flex flex-wrap justify-center items-center gap-2"><span class="material-symbols-outlined rounded-full p-1 grad text-navy-50 text-center">person</span><p>Inicia Sesion</p></a></div>
        `
    }

    SECCION_LOGIN.appendChild(div);

}

function mostrarContenido(param){
    
    console.log('boton clickeado');
    
    BOTONES_MOSTRAR.forEach(seccion => seccion.classList.contains('hidden') ? '' : seccion.classList.add('hidden'));

    param.classList.remove('hidden');
    /* BOTONES_MOSTRAR.forEach(boton =>{
        boton.addEventListener("click", (e)=>{
            

        })
    }) */
}

sesionInfo();