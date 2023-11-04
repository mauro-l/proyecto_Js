/* let cartelera = ' ';
let horario = ' ';
let e = false;
let menuPrincipal = false;


const CHUCK = 'Chucky';
const SIREN = 'La sirenita';
const SOMBR = '50 Sombras de Gray'; 
const HMANANA= '15:00hs';
const HTARDE= '18:00hs';
const HNOCHE= '22.30hs';

//funciones 

const textoEleccion = (alerta, op1, op2, op3, e) => 
{
    alert (alerta);
    let opcion = parseInt(prompt(`1- ${op1} 2- ${op2} 3- ${op3}`));

    // no va if (op2 === 'Volver al menú principal' && opcion === 2)
    return menuPrincipal = true; 

    if ((op3 === 'Salir' && opcion == 3)|| opcion == 0)
    return e = true;

    if (opcion > 3 || opcion < 0)
        alert('error, INGRESE OPCION VALIDA!');
    else
        return opcion;
}

const volverMenu = (n, menuP) =>{
    if (n == 2)
        menuP = true;
    return menuP;
}

//while para salir completamente con bandera exit
while (exit === false) 
{
    menuPrincipal = false;
    alert ('Bienvenido a Cine Fasto');
    let opcion = parseInt(prompt('Que desea realizar? 1- Ver Cartelera. 2- Comprar. 3- Login'));
    console.log (opcion);
    do {
        switch (opcion) 
        {
            case 1:
                textoEleccion('Las peliculas disponibles son', CHUCK, SIREN, SOMBR, e);
                //do while
                
                    let eleccion = textoEleccion('Desea', 'Ver horarios', 'Volver Menu Principal', 'Salir', e);
                    volverMenu(eleccion, menuPrincipal);

                    if (eleccion === 1)
                    {
                        textoEleccion('Los horarios disponibles son', HMANANA, HTARDE, HNOCHE, e);
                        textoEleccion('A continuación desea', 'Comprar', 'Volver al menú principal', 'Salir', e);
                        volverMenu(eleccion, menuPrincipal);
                    }
                        
                
                break;
            case 2:
                console.log('opcion 2');
                break;  
            case 3:
                console.log('opcion 3');
                break; 
            default:
                console.log('error');
                break;
        }
        
    } while (menuPrincipal === false);
    
} */




