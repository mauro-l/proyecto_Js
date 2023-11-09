const cartelera = (objeto) => {
    // Esta funcion muestra las peliculas disponibles y sus horarios, 
    let peliculaEleccion ='';
    let horarioEleccion = '';
    let salir = false;
    objeto = ticket;

    do{
        //Muestra en pantalla las peliculas y recibe la eleccion del usuario la cual es guardada en una constante para luego ser utilizada.
        alert('Las peliculas de nuestra carteleras son las siguientes');
        const ELECCION_PELICULAS = parseInt(prompt(`Elija una pelicula para ver sus horarios o seleccione 0 para salir: 1- ${CHUCK} 2- ${SIREN} 3- ${SOMBR}`));
        
        switch(ELECCION_PELICULAS)
        {
            case 1:
                peliculaEleccion = CHUCK;
                break;
            case 2:
                peliculaEleccion = SIREN;
                break;
            case 3:
                peliculaEleccion = SOMBR;
                break;
            case 0:
                return;
            default:
                alert('Elija una opción valida');
                continue;
        }       
        
        //Muestra por pantallla los horarios y pregunta si desea comprar una entrada o si desea seguir viendo la cartelera
        alert('Los horarios del dia de hoy son los siguientes');
        const ELECCION_HORARIOS = parseInt(prompt(`Si desea comprar una entrada escriba la opcion para continuar o ingrese 0 para volver al menú anterior; 1- ${HMANANA} 2- ${HTARDE} 3- ${HNOCHE}`));

        switch(ELECCION_HORARIOS)
        {
            case 1:
                horarioEleccion = HMANANA;
                break;
            case 2:
                horarioEleccion = HTARDE;
                break;
            case 3:
                horarioEleccion = HNOCHE;
                break;
            case 0:
                //Si desea volver al menu anterior se borra la eleccion de pelicula previamente guardada.
                peliculaEleccion = '';
                continue;
            default:
                alert('Opción no válida.');
                continue;

        }
        
        //Una vez que el usuario elija pelicula y horario, se guarda su seleccion en un ticket
        ticket.pelicula = peliculaEleccion;
        ticket.horario = horarioEleccion;

        // !! GUARDAR ELECCIONES EN UN CARRITO !! (crear carrito)
              
        //Verifica si existe una sesion activa 
        if(sesionActiva.estado === false){
            alert('Para continuar con la compra debes iniciar sesion.') 
            iniciarSesion();
        }
        
        salir = true;
    
    }while(salir != true)
    
}