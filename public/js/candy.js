const PRODUCTO = [
    {
        id: "1",
        img: "../asset/candy/balde-cine.png",
        nombre: "Combo balde",
        descripcion: "1 balde grande de palomitas de maiz + bebida grande",
        precio: 4.00,
        categoria: "bebidas",
        promoSocios: true,
        descuento: true,
        porcentajeDescuento: 50,
        promo: "Promo <br> Socios"
    },
    {
        id: "2",
        img: "../asset/candy/combo-1.png",
        nombre: "Combo Mex",
        descripcion: "2 tacos + 1 burrito + 2 bebidas medianas",
        precio: 8.00,
        categoria: "comidas",
        promoSocios: true,
        descuento: true,
        porcentajeDescuento: 50,
        promo: "Promo <br> Socios"
    },
    {
        id: "3",
        img: "../asset/candy/combo-2.png",
        nombre: "Combo Familia",
        descripcion: "3 tacos + 2 bebidas medianas",
        precio: 6.00,
        categoria: "bebidas",
        promoSocios: false,
        descuento: true,
        porcentajeDescuento: 60,
        promo: "60 % <br> OFF "
    },
    {
        id: "4",
        img: "../asset/candy/combo-3.png",
        nombre: "Combo Nachos",
        descripcion: "1 taco + nachos + 1 bebida grande",
        precio: 5.00,
        categoria: "comidas",
        promoSocios: false,
        descuento: false,
        porcentajeDescuento: null,
        promo: " "
    },
    {
        id: "5",
        img: "../asset/candy/balde-cine.png",
        nombre: "Combo balde",
        descripcion: "1 balde mediano de palomitas de maiz + bebida mediana",
        precio: 4.00,
        categoria: "bebidas",
        promoSocios: false,
        descuento: false,
        porcentajeDescuento: null,
        promo: " "
    },
    {
        id: "6",
        img: "../asset/candy/combo-3.png",
        nombre: "Combo Nachos XL",
        descripcion: "2 taco + nachos + 2 bebida grande",
        precio: 6.00,
        categoria: "comidas",
        promoSocios: true,
        descuento: true,
        porcentajeDescuento: 50,
        promo: "Promo <br> Socios "
    }
];

const CONTENEDOR_PRODUCTOS = document.getElementById('productos');
const CONTENEDOR_CARRITO_MOBILE = document.getElementById('contenedor-productos-mobile');
const CANTIDAD_PRODUCTO_MOBILE = document.getElementById('cantidad-producto-mobile');
const MOSTRAR_CARRITO_MOBILE = document.getElementById('mostrar-carrito-mobile');
const CONTENEDOR_CARRITO_DESKTOP = document.getElementById('contenedor-productos-desktop');
const CONTENEDOR_PRECIO_MOBILE = document.getElementById('contenedor-precios-mobile');
const CONTENEDOR_TOTAL_MOBILE = document.getElementById('contenedor-total-mobile');
const CONTENEDOR_PRECIO_DESKTOP = document.getElementById('contenedor-precios-desktop');
const CONTENEDOR_TOTAL_DESKTOP = document.getElementById('contenedor-total-desktop');
const BOTON_PRECIOS_MOBILE = document.getElementById('boton-precios-mobile');
const BOTON_ASIDE_DESKTOP = document.getElementById('aside-carrito-desktop');
const FILTRO_DESKTOP = document.getElementById('filtroAside');

/* filtros */
const BOTON_VERTODO = document.getElementById('botonReset');
const CATEGORIAS = document.getElementById('categorias');
const ORDENAR = document.getElementById('ordenar');

const productoDescendente = (a, b) => a.precioFinal - b.precioFinal;
const productoAscendente = (a, b) => b.precioFinal - a.precioFinal;


BOTON_VERTODO.addEventListener('click', ()=>{
    CATEGORIAS.selectedIndex = 0;
    cargarProductos(PRODUCTOS);

    if(!BOTON_VERTODO.classList.contains('boton-active')){
        BOTON_VERTODO.classList.add('boton-active');
        CATEGORIAS.classList.remove('bg-violet-700');
        CATEGORIAS.classList.remove('ring-4');
        ORDENAR.classList.remove('bg-violet-700');
        ORDENAR.classList.remove('ring-4');
    }
})
document.addEventListener('DOMContentLoaded', () => {
    
    cargarProductos(PRODUCTOS);
           
    CATEGORIAS.addEventListener('change',()=>{

        if(ORDENAR.classList.contains('ring-4')){
            ORDENAR.selectedIndex = 0;
            ORDENAR.classList.remove('bg-violet-700');
            ORDENAR.classList.remove('ring-4');
        }
                
        const productosCategoria = PRODUCTOS.filter(productos => productos.categoria === CATEGORIAS.value);
        cargarProductos(productosCategoria);
        
        BOTON_VERTODO.classList.remove('boton-active');
        CATEGORIAS.classList.add('bg-violet-700');
        CATEGORIAS.classList.add('ring-4');
    })

    ORDENAR.addEventListener('change',()=>{
        
        if(CATEGORIAS.classList.contains('ring-4')){
            CATEGORIAS.selectedIndex = 0;
            CATEGORIAS.classList.remove('bg-violet-700');
            CATEGORIAS.classList.remove('ring-4');
        }

        if(ORDENAR.value === 'mayor'){

            const ordenAscendente = PRODUCTOS.slice().sort(productoAscendente);
            console.log('orden de mayor a menor' ,ordenAscendente);
            cargarProductos(ordenAscendente);

            BOTON_VERTODO.classList.remove('boton-active');
            ORDENAR.classList.add('bg-violet-700');
            ORDENAR.classList.add('ring-4');

        }else if(ORDENAR.value === 'menor'){

            const ordenDescendente = PRODUCTOS.slice().sort(productoDescendente);
            console.log('orden de menor a mayor', ordenDescendente);
            cargarProductos(ordenDescendente);

            BOTON_VERTODO.classList.remove('boton-active');
            ORDENAR.classList.add('bg-violet-700');
            ORDENAR.classList.add('ring-4');

        }else{
            cargarProductos(PRODUCTOS);

            BOTON_VERTODO.classList.remove('boton-active');
            ORDENAR.classList.add('bg-violet-700');
            ORDENAR.classList.add('ring-4');
        }

    })

})

//calcula el precio final de los productos que contienen descuentos.
function calcularPrecioFinal(param){

    let precioSinDescuento = param.precio;
    if (param.descuento) 
    {
        let descuentos = (100 - param.porcentajeDescuento) / 100;
        const precioFinal = precioSinDescuento * descuentos;

        return parseFloat(precioFinal.toFixed(2));
    }else
    {        
        const precioFinal = param.precio
        return precioFinal;
    }
}

/* crea una nueva lista de productos incluyendo los precios con descuentos calculados  */
const PRODUCTOS = PRODUCTO.map(producto =>{
    const precioFinal = calcularPrecioFinal(producto);
    return { ...producto, precioFinal };
});

/* funcion para mostrar todos los productos en la pantalla */

function cargarProductos(product) {

    CONTENEDOR_PRODUCTOS.innerHTML = ``;

    product.forEach(producto =>{

        let div = document.createElement("div");
        div.className = `max-w-[320px] w-[250px] lg:basis-1/3 grow relative`;
        // div.className = `max-w-[320px] w-[250px] lg:basis-1/3 grow relative ${producto.promoSocios ? `order-first` : 'order-last'}`; esta linea ordenaba los productos dependiendo si contienen promo para socios colocandolo primeros pero trae error al momento de utilizar los filtros.

        div.innerHTML = `
        <h4 class="grad rounded-b-lg p-3 w-20 text-center text-white font-bold ml-4 ${producto.descuento ? 'absolute' : 'hidden'} ">${producto.promo}</h4>
        <div class="h-52 bg-navy-700 border-4 border-navy-300 rounded-t-xl flex">
            <img src=${producto.img} alt="imagen productos ${producto.nombre}" class="m-auto w-48">
        </div>
        <div class="h-52 bg-navy-300 p-3 border-4 border-navy-300 rounded-b-xl text-white">
            <div class="h-2/3 mx-auto mt-2 px-4">
                <h2 class="text-2xl font-bold">${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
            </div>
            <div class="h1/3 w-full flex justify-around items-center mt-1 border-dashed border-navy-150/50 border-t-2 pt-3">
                ${producto.descuento ? `<del class="text-base text-white/70">${producto.precio.toFixed(2)} US$</del> <h3 class="text-xl">${producto.precioFinal.toFixed(2)} US$</h3> ` : `<h3 class="text-xl">${producto.precio.toFixed(2)} US$</h3>`}
                <button onclick="agregarAlCarrito('${producto.id}', '${producto.nombre}', ${producto.descuento? producto.precioFinal : producto.precio})" id="boton${producto.id}" class="boton boton-grad AGREGAR-PRODUCTO">Add</button>
            </div>
        </div>`;

        CONTENEDOR_PRODUCTOS.appendChild(div);

        
    })
    
}


// agregar productos al localStorage
function agregarAlCarrito (id , nombre, precio) {
    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoEnCarrito = carrito.find(producto => producto.id === id);

    if (productoEnCarrito)
    {
        productoEnCarrito.cantidad++;
    }else
    {
        carrito.push({id, nombre, precio, cantidad: 1});
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log('carrito' + carrito);
    mostrarCarrito();
}


//imprimir carrito en html
function mostrarCarrito(){
    const carrito = JSON.parse(localStorage.getItem('carrito'));

    //Carga los productos que se encuentran en el localStorage y los muestra en pantalla 
    if(carrito && carrito.length > 0){
        CONTENEDOR_CARRITO_MOBILE.innerHTML = '';

        carrito.forEach(producto =>{
            let div = document.createElement("div");
            div.className = "flex items-center m-1 justify-between gap-4 text-sm"

            div.innerHTML = `
            
            <div class="flex gap-4">
                <button onclick="eliminarProducto(${producto.id})"><span class="material-symbols-outlined">delete</span></button>
            </div>

            <div id="listaProductos" class="flex justify-between w-full">
                <h2>${producto.nombre}</h2>
                <h3>US$ ${(producto.precio * producto.cantidad).toFixed(2)}</h3>
            </div>

            <div class="flex">
                <button onclick="restarProductos(${producto.id})" class="border-navy-100 border-solid border rounded-l-full px-2">-</button>
                <span class="border-navy-100 border-solid border-y px-2">${producto.cantidad < 10 ? '0' + producto.cantidad : '' + producto.cantidad }</span>
                <button onclick="sumarProductos(${producto.id})" class="border-navy-100 border-solid border rounded-r-full px-2">+</button>
            </div>
            `

            CONTENEDOR_CARRITO_MOBILE.appendChild(div);
        })
    }else if (carrito && carrito.length === 0){
        CONTENEDOR_CARRITO_MOBILE.innerHTML = '';
        let div = document.createElement("div");
        div.innerHTML = '<h2 class="text-center">¡Oops! Parece que tu carrito está vacio</h2>';
        CONTENEDOR_CARRITO_MOBILE.appendChild(div);
    }

    //Carga los productos y los muestra en la pantalla desktop
    if(carrito && carrito.length > 0){
        CONTENEDOR_CARRITO_DESKTOP.innerHTML = '';

        carrito.forEach(producto =>{
            let div = document.createElement("div");
            div.className = "flex items-center m-1 justify-between gap-4 text-sm"

            div.innerHTML = `
            
            <div class="flex gap-4">
                <button onclick="eliminarProducto(${producto.id})"><span class="material-symbols-outlined">delete</span></button>
            </div>

            <div id="listaProductos" class="flex justify-between w-full">
                <h2>${producto.nombre}</h2>
                <h3>US$ ${(producto.precio * producto.cantidad).toFixed(2)}</h3>
            </div>

            <div class="flex">
                <button onclick="restarProductos(${producto.id})" class="border-navy-100 border-solid border rounded-l-full px-2">-</button>
                <span class="border-navy-100 border-solid border-y px-2">${producto.cantidad < 10 ? '0' + producto.cantidad : '' + producto.cantidad }</span>
                <button onclick="sumarProductos(${producto.id})" class="border-navy-100 border-solid border rounded-r-full px-2">+</button>
            </div>
            `

            CONTENEDOR_CARRITO_DESKTOP.appendChild(div);
        })
    }else if (carrito && carrito.length === 0){
        CONTENEDOR_CARRITO_DESKTOP.innerHTML = '';
        let div = document.createElement("div");
        div.innerHTML = '<h2 class="text-center text-navy-150 mt-2">Los productos que agregues aparecerán aquí</h2>';
        CONTENEDOR_CARRITO_DESKTOP.appendChild(div);
    }

    mostrarPreciosMobile();
    mostrarPreciosDesktop();
    actualizarCantidadProductos();
}

/* funciones para sumar restar y eliminar productos en el carrito */

function restarProductos (id){
    let carrito = JSON.parse(localStorage.getItem('carrito'));

    if (carrito && carrito.length > 0){

        let productoIndex = carrito.findIndex(producto => producto.id == id);
        if (productoIndex !==-1 && carrito[productoIndex].cantidad > 0) {

            carrito[productoIndex].cantidad--;

            if (carrito[productoIndex].cantidad === 0){
                carrito.splice(productoIndex, 1);
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarCarrito();
        }
    }    
}
function sumarProductos (id){
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    let productoIndex = carrito.findIndex(producto => producto.id == id);
    if (productoIndex !==-1 && carrito[productoIndex].cantidad > 0) {
                
        carrito[productoIndex].cantidad++;

        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    } 
}

function actualizarCantidadProductos() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];  
    
    CANTIDAD_PRODUCTO_MOBILE.innerHTML = '';
    let div = document.createElement("div");
    div.innerHTML =` <h2> ${carrito.length} </h2> `
    CANTIDAD_PRODUCTO_MOBILE.appendChild(div);        
    
}


function eliminarProducto(id){
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    let productoIndex = carrito.findIndex(producto => producto.id == id);
    
    carrito.splice(productoIndex, 1);
        
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();        
}

function mostrarPreciosMobile(){
    const carrito = JSON.parse(localStorage.getItem('carrito'));
    const totalCarrito = carrito.reduce((acu, producto)=> acu + (producto.precio * producto.cantidad), 0);

    CONTENEDOR_PRECIO_MOBILE.innerHTML = '';

    let div = document.createElement("div");
    div.className = "text-white bg-navy-300 border-y border-dashed border-navy-100 px-4 p-2"

    div.innerHTML =`
    <div class="text-white font-semibold p-1 flex justify-between">
        <h3>SUBTOTAL</h3>
        <h4>US$ ${totalCarrito.toFixed(2)}</h4>
    </div>
    <div class="text-white font-semibold p-1 flex justify-between">
        <h3>CARGO POR SERVICIO</h3>
        <h4>US$ 1.00</h4>
    </div>
    `

    CONTENEDOR_PRECIO_MOBILE.appendChild(div);
    CONTENEDOR_TOTAL_MOBILE.innerHTML ='';

    let total = document.createElement("div");
    total.className = "flex justify-between items-center text-white w-full px-4 pb-4"

    total.innerHTML = `
    <div class="text-xl w-1/2 font-semibold flex flex-wrap justify-around">
        <h3>TOTAL</h3>
        <h4>US$ ${totalCarrito > 1 ? (totalCarrito + 1).toFixed(2) : totalCarrito.toFixed(2)}</h4>
    </div>
    <div class="text-center w-1/2">
        <button class="boton boton-grad">COMPRAR</button>
    </div>
    `
    CONTENEDOR_TOTAL_MOBILE.appendChild(total);

}
function mostrarPreciosDesktop(){
    const carrito = JSON.parse(localStorage.getItem('carrito'));
    const totalCarrito = carrito.reduce((acu, producto)=> acu + (producto.precio * producto.cantidad), 0);

    CONTENEDOR_PRECIO_DESKTOP.innerHTML = '';

    let div = document.createElement("div");
    div.className = "text-white bg-navy-300 border-y border-dashed border-navy-100 p-4"

    div.innerHTML =`
    <div class="text-white font-semibold p-1 flex justify-between">
        <h3>SUBTOTAL</h3>
        <h4>US$ ${totalCarrito.toFixed(2)}</h4>
    </div>
    <div class="text-white font-semibold p-1 flex justify-between">
        <h3>CARGO POR SERVICIO</h3>
        <h4>US$ 1.00</h4>
    </div>
    `

    CONTENEDOR_PRECIO_DESKTOP.appendChild(div);
    CONTENEDOR_TOTAL_DESKTOP.innerHTML ='';

    let precioTotal = document.createElement("div");
    precioTotal.className = "text-3xl font-semibold flex justify-around"

    precioTotal.innerHTML = `
    <h3>TOTAL</h3>
    <h4>US$ ${totalCarrito > 1 ? (totalCarrito + 1).toFixed(2) : totalCarrito.toFixed(2)}</h4>
    `
    CONTENEDOR_TOTAL_DESKTOP.appendChild(precioTotal);

}

/* funciones para mostrar y ocultar cuando se hace click en algun boton */

BOTON_PRECIOS_MOBILE.addEventListener('click',(e)=>{
    e.preventDefault();

    CONTENEDOR_PRECIO_MOBILE.classList.toggle('hidden');
    botonPrecioMobile();
})

MOSTRAR_CARRITO_MOBILE.addEventListener('click', (e)=>{
    e.preventDefault();

    CONTENEDOR_CARRITO_MOBILE.classList.toggle('hidden');

})

function botonPrecioMobile(){

    if(CONTENEDOR_PRECIO_MOBILE.classList.contains('hidden')){
        BOTON_PRECIOS_MOBILE.innerHTML= `<span class="material-symbols-outlined">keyboard_double_arrow_up</span>`;
    }else{
        BOTON_PRECIOS_MOBILE.innerHTML=`<span class="material-symbols-outlined">keyboard_double_arrow_down</span>`;
    }
}

function desplegarCarrito(){
    CONTENEDOR_CARRITO_DESKTOP.classList.toggle('max-h-[100px]');
    CONTENEDOR_CARRITO_DESKTOP.classList.toggle('overflow-hidden');
    
    if(CONTENEDOR_CARRITO_DESKTOP.classList.contains('max-h-[100px]' && 'overflow-hidden')){
        BOTON_ASIDE_DESKTOP.innerHTML= `<span class="material-symbols-outlined">keyboard_double_arrow_down</span>`;        
    }else{
        BOTON_ASIDE_DESKTOP.innerHTML=`<span class="material-symbols-outlined">keyboard_double_arrow_up</span>`;        
    }
}

const elementToObserve = document.getElementById('elementToObserve');

function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.25;

    if (scrollPosition > triggerPoint) {
        // Si el usuario ha scrollado más del 25%, haz el elemento visible
        elementToObserve.classList.remove('hidden');
    } else {
        // Si no, mantiene la opacidad en 0
        elementToObserve.classList.add('hidden');
    }
}

// Agrega un listener para el evento de scroll
window.addEventListener('scroll', handleScroll);

// Llama a handleScroll al cargar la página para manejar la posición inicial
handleScroll();

actualizarCantidadProductos();
mostrarCarrito();
botonPrecioMobile();

