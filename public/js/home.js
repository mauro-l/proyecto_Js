let e = false;
const sesionActiva = {
    estado: false,
    indiceUsuario: null,
    
    login: function(indice){
        this.estado = true;
        this.indiceUsuario = indice;
    },

    logout: function(){
        this.estado = false; 
        this.indiceUsuario= null;
    }
}

// Constantes declaradas con peliculas y horarios.

// !! CREAR ARREGLO DE PELICULAS Y HORARIOS !!
const CHUCK = 'Chucky';
const SIREN = 'La sirenita';
const SOMBR = '50 Sombras de Gray'; 
const HMANANA= '15:00hs';
const HTARDE= '18:00hs';
const HNOCHE= '22.30hs';

// Objetos

class Ticket {
    constructor(pelicula, horario){
        //this.usuario = usuario;
        this.pelicula = pelicula;
        this.horario = horario;
        this.descuento = false;
    }    
}
const ticket = new Ticket();

class Usuario {
    constructor(nombre, clave, rol){
        this.nombre = nombre.toLowerCase();
        this.clave = clave.toLowerCase();
        this.rol = rol.toLowerCase();
        this.inicioSesion = false;
    }

    iniciarSesion(){
        this.inicioSesion = true;
    }
    
}

const usuario1 = new Usuario ('Mauro', 'Admin', 'Admin');
const usuario2 = new Usuario ('Nicolas', 'Nicolas', 'Usuario');
const usuario3 = new Usuario ('Maxi', 'Maxi', 'Usuario');

const usuarios = [usuario1, usuario2, usuario3];

//funciones 

// !! MEJORAR CARTELERA AGREGANDO ARRAYS !! 
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
        
        alert('Los horarios del dia de hoy son los siguientes');
        const ELECCION_HORARIOS = parseInt(prompt(`Si desea comprar una entrada escriba la opcion para continuar o ingrese 0 para volver al menú anterior; 1- ${HMANANA} 2- ${HTARDE} 3- ${HNOCHE}`));
        //Muestra por pantallla los horarios y pregunta si desea comprar una entrada o si desea seguir viendo la cartelera

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
        
        ticket.pelicula = peliculaEleccion;
        ticket.horario = horarioEleccion;
                
        salir = true;
        
    }while(salir != true)
        
}
const verificacion = () => {
    let indice = null;
    
    for (const user of usuarios){
        if (user.inicioSesion === true){
            indice = usuarios.indexOf(user);
        }
    }
    
    if(indice !== null)
        sesionActiva.login(indice);
}

const iniciarSesion = () => {
    
    if(sesionActiva.estado === true) //Si hay una sesion activa, muestra por pantalla cual es el usuario activo.
        alert(`Ya existe una sesion activa con el usuario ${sesionActiva.indiceUsuario}`)
        // !! PERMITIR AL USUARIO CERRAR SESION !! (completar seccion login)
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

//while para salir completamente con bandera exit
while (e === false) 
{

    alert ('Bienvenido a Cine Fasto');
    let opcion = parseInt(prompt('Que desea realizar? 1- Ver Cartelera. 2- Comprar. 3- Login 0- Salir'));
    
    console.log (opcion);
            
    switch (opcion) 
    {
        case 1:
            verificacion();
            cartelera(ticket);            
            break;
        case 2:
            verificacion();
            // !! Si existe una sesion activa crear apartado USUARIO con menu para ver compras, cerrar sesion, salir.
            iniciarSesion();
            break;  
        case 3:
            console.log('opcion 3');
            break;
        case 0:
            e = true; 
            continue;
        default:
            console.log('error');
            break;
    }
}
