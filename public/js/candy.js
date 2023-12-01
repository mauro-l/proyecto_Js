const PRODUCTOS = [
    {
        img: "../asset/candy/balde-cine.png",
        nombre: "Combo balde",
        descripcion: "1 balde grande de palomitas de maiz + bebida grande",
        precio: 4.00,

        promoSocios: true,
        descuento: true,
        porcentajeDescuento: 50,
        promo: "Promo <br> Socios"
    },
    {
        img: "../asset/candy/combo-1.png",
        nombre: "Combo Mex",
        descripcion: "2 tacos + 1 burrito + 2 bebidas medianas",
        precio: 8.00,

        promoSocios: true,
        descuento: true,
        porcentajeDescuento: 50,
        promo: "Promo <br> Socios"
    },
    {
        img: "../asset/candy/combo-2.png",
        nombre: "Combo Familia",
        descripcion: "3 tacos + 2 bebidas medianas",
        precio: 6.00,

        promoSocios: false,
        descuento: true,
        porcentajeDescuento: 60,
        promo: "60 % <br> OFF "
    },
    {
        img: "../asset/candy/combo-3.png",
        nombre: "Combo Nachos",
        descripcion: "1 taco + nachos + 1 bebida grande",
        precio: 5.00,

        promoSocios: false,
        descuento: false,
        porcentajeDescuento: null,
        promo: " "
    },
    {
        img: "../asset/candy/balde-cine.png",
        nombre: "Combo balde",
        descripcion: "1 balde mediano de palomitas de maiz + bebida mediana",
        precio: 4.00,

        promoSocios: false,
        descuento: false,
        porcentajeDescuento: null,
        promo: " "
    },
    {
        img: "../asset/candy/combo-3.png",
        nombre: "Combo Nachos XL",
        descripcion: "2 taco + nachos + 2 bebida grande",
        precio: 6.00,
        
        promoSocios: true,
        descuento: true,
        porcentajeDescuento: 50,
        promo: "Promo <br> Socios "
    }
];

const CONTENEDOR_PRODUCTOS = document.getElementById('productos');

PRODUCTOS.forEach(producto =>{

    let precioConDescuento = producto.precio;

    if (producto.descuento) 
    {
        let descuentos = (100 - producto.porcentajeDescuento) / 100; 
        precioConDescuento = producto.precio * descuentos;
    }

    let div = document.createElement("div");
    div.className = `max-w-[320px] w-[250px] lg:basis-1/3 grow relative ${producto.promoSocios ? `order-first` : 'order-last'}`;

    div.innerHTML = `
    <h4 class="grad rounded-b-lg p-3 w-20 text-center text-white font-bold ml-4 ${producto.descuento ? 'absolute' : 'hidden'} ">${producto.promo}</h4>
    <div class="h-52 bg-navy-700 border-4 border-navy-300 rounded-t-xl flex">
        <img src=${producto.img} alt="imagen productos" class="m-auto w-48">
    </div>
    <div class="h-52 bg-navy-300 p-3 border-4 border-navy-300 rounded-b-xl text-white">
        <div class="h-2/3 mx-auto mt-2 px-4">
            <h2 class="text-2xl font-bold">${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
        </div>
        <div class="h1/3 w-full flex justify-around items-center mt-1 border-dashed border-navy-150/50 border-t-2 pt-3">
            ${producto.descuento ? `<del class="text-base text-white/70">${producto.precio} US$</del> <h3 class="text-xl">${precioConDescuento.toFixed(2)} US$</h3> ` : `<h3 class="text-xl">${producto.precio.toFixed(2)} US$</h3>`}
            <button class="boton boton-grad">Add</button>
        </div>
    </div>`;

    CONTENEDOR_PRODUCTOS.appendChild(div);

})