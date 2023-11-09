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