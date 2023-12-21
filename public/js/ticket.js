
const BOTONES_MOSTRAR = document.querySelectorAll(".BOTONES-MOSTRAR");
const seccionHorario = document.getElementById('seccionHorario');
const seccionLugar = document.getElementById('seccionLugar');
const seccionPrecio = document.getElementById('seccionPrecio');


function mostrarContenido(param){
    
    console.log('boton clickeado');
    
    BOTONES_MOSTRAR.forEach(seccion => seccion.classList.contains('hidden') ? '' : seccion.classList.add('hidden'));

    param.classList.remove('hidden');
    /* BOTONES_MOSTRAR.forEach(boton =>{
        boton.addEventListener("click", (e)=>{
            

        })
    }) */
}
