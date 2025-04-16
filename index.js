const productNames = [
  { index: 0, name: "Anello Lexa", price: "13.90", img: "img1.jpg" },
  { index: 1, name: "Anello Daris", price: "14.00", img: "img2.jpg" },
  { index: 2, name: "Anello Maria", price: "13.90", img: "img3.jpg" },
  { index: 3, name: "Anello Anabel", price: "13.90", img: "img4.jpg" },
  { index: 4, name: "Anello Snake", price: "13.90", img: "img5.jpg" },
  { index: 5, name: "Anello Infinity", price: "12.90", img: "img6.jpg" },
  { index: 6, name: "Anello Susan", price: "14.90", img: "img7.jpg" },
  { index: 7, name: "Anello Valery", price: "10.00", img: "img8.jpg" },
  { index: 8, name: "Anello Andrea", price: "14.90", img: "img9.png" },
  { index: 9, name: "Anello Mon Amour", price: "15.00", img: "img10.jpg" },
  { index: 10, name: "Anello Double", price: "11.90", img: "img11.jpg" },
  { index: 11, name: "Anello Isabel", price: "13.90", img: "img12.jpg" },
  { index: 12, name: "Anello Vivian", price: "12.90", img: "img13.jpg" },
  { index: 13, name: "Anello Briar", price: "12.00", img: "img14.jpg" },
  { index: 14, name: "Anello Laura", price: "9.00", img: "img15.jpg" },
  { index: 15, name: "Anello Assia", price: "€9,50", img: "img16.jpg" },
  {
    index: 16,
    name: "Orecchini Aura",
    price: "10.00",
    img: "img17.jpg",
  },
  { index: 17, name: "Orecchini Amelia", price: "13.00", img: "img18.jpg" },
  { index: 18, name: "Earcuff", price: "7.00", img: "img19.jpg" },
  { index: 19, name: "Piercing cerchietto", price: "5.00", img: "img20.jpg" },
  { index: 20, name: "Bracciale Aurora", price: "14.86", img: "img21.png" },
  { index: 21, name: "Orecchini Ros", price: "12.90", img: "img22.png" },
  { index: 22, name: "Orecchini Drop", price: "10.90", img: "img23.jpg" },
  { index: 23, name: "Orecchini Saliscendi", price: "12.00", img: "img24.jpg" },
  { index: 24, name: "Orecchini Ámbar", price: "12.50", img: "img25.jpg" },
  { index: 25, name: "Piercing Flower", price: "7.00", img: "img26.jpg" },
  { index: 26, name: "Piercing Aila", price: "6.50", img: "img27.jpg" },
  { index: 27, name: "Orecchini Laura", price: "10.90", img: "img29.jpg" },
  { index: 28, name: "Orecchini Nadette", price: "10.90", img: "img30.jpg" },
  {
    index: 29,
    name: "Earcuff orecchio completo",
    price: "14.99",
    img: "img31.jpg",
  },
  { index: 30, name: "Earcuff Coquette", price: "14.99", img: "img32.jpg" },
  { index: 31, name: "Orecchini Nerlin", price: "12.00", img: "img33.jpg" },
  { index: 32, name: "Orecchini Drop", price: "10.00", img: "img34.jpg" },
  { index: 33, name: "Orecchini Rosa", price: "14.00", img: "img35.jpg" },
  { index: 34, name: "Orecchini Delia", price: "10.00", img: "img36.jpg" },
  { index: 35, name: "Anello Summer", price: "€8,50", img: "img37.jpg" },
  {
    index: 36,
    name: "Orecchini Melita",
    price: "12.50",
    img: "img38.jpg",
  },
  { index: 37, name: "Punti luce", price: "7.00", img: "img39.jpg" },
  { index: 38, name: "Orecchino Flora", price: "14.00", img: "img40.jpg" },
];
let carrito = [];

try {
  const data = JSON.parse(localStorage.getItem("carrito"));
  if (Array.isArray(data)) {
    carrito = data.filter((item) => item && typeof item === "object");
  }
} catch (error) {
  carrito = [];
}
let contadorCarrito = 0;

actualizarBurbuja();
actualizarCarrito();

/* Aqui esta el contenedor de las secciones*/

const imagenes = [
  {
    src: "img-new/anelli.PNG",
    href: "productos.html?categoria=anello",
    top: "0px",
  },
  {
    src: "img-new/orecchini.PNG",
    href: "productos.html?categoria=orecchini",
    top: "250px",
  },
  {
    src: "img-new/collane.PNG",
    href: "productos.html?categoria=collana",
    top: "500px",
  },
];

const contenedor = document.getElementById("contenedor-seccion");

imagenes.forEach(({ src, href, top }) => {
  const a = document.createElement("a");
  a.href = href;
  a.style.position = "absolute";
  a.style.top = top;

  const img = document.createElement("img");
  img.src = src;
  img.alt = "Imagen";
  img.classList.add("imagen");

  a.appendChild(img);
  contenedor.appendChild(a);
});

/*Esta funcion carga mi catalogo */
// Función para mostrar el carrito
function mostrarCarrito() {
  document.getElementById("modalCarrito").style.display = "flex";
}

// Función para cerrar el carrito
function cerrarCarrito(event) {
  // Verificar si el click proviene del fondo (modal) o del botón de cerrar (span)
  if (
    event.target.id === "modalCarrito" ||
    event.target.classList.contains("cerrar-carrito")
  ) {
    document.getElementById("modalCarrito").style.display = "none";
  }
}

// Renderizar los productos en la página
window.onload = function () {
  let listContainer = document.getElementById("swiper-wrapper");
  productNames.map((product, index) => {
    listContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="swiper-slide">
          <div class="icons">
            <i class="fa-solid fa-circle-arrow-left"></i>
            <img src="img-new/logo.png" alt="Logo">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="product-content">
            <div class="product-txt">
              <span>${product.price}</span>
              <h3>${product.name}</h3>
              <p>argento sterling 925.</p>
            </div>
            <div class="product-img">
              <img src="img-new/${product.img}" alt="Producto ${index + 1}">
            </div>
          </div>
          <div>
            <a href="#" onclick="agregarAlCarrito('${product.name}', '${
        product.price
      }', '${
        product.img
      }'); return false;" class="btn-1">aggiungere al carrello</a>
        </div>
        </div>
      `
    );
  });
};

// Función para agregar productos al carrito

function agregarAlCarrito(nombre, precio, img) {
  precio = parseFloat(precio); // Asegurar que el precio es un número
  let productoExistente = carrito.find(
    (producto) => producto.nombre === nombre
  );

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      nombre: nombre,
      precio: precio, // Ya convertido en número
      img: `img-new/${img}`,
      cantidad: 1,
    });
  }

  contadorCarrito++;
  actualizarBurbuja();
  actualizarCarrito();
  guardarCarritoEnLocalStorage();
}
function limpiarPrecio(precio) {
  return parseFloat(precio.replace("€", "").replace(",", ".")) || 0;
}

function actualizarBurbuja() {
  let cantidadTotal = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  const notificacionCarrito = document.getElementById("notificacionCarrito");
  if (cantidadTotal > 0) {
    notificacionCarrito.textContent = cantidadTotal;
    notificacionCarrito.style.display = "inline-block";
  } else {
    notificacionCarrito.style.display = "none";
  }
}

function actualizarCarrito() {
  const carritoContainer = document.getElementById("productosCarrito");
  carritoContainer.innerHTML = ""; // Limpiar el contenido del carrito

  carrito.forEach((producto) => {
    const subtotal = (producto.precio * producto.cantidad).toFixed(2); // Calcular subtotal correctamente

    const itemHTML = `
      <div class="carrito-item">
        <img src="${producto.img}" alt="${producto.nombre}" class="producto-img" />
        <div class="detalle-producto">
          <p class="nombre-producto">${producto.nombre}</p>
          <div class="cantidad">
            <button class="btn-menos" onclick="modificarCantidad('${producto.nombre}', false)">-</button>
            <input type="text" value="${producto.cantidad}" class="input-cantidad" disabled />
            <button class="btn-mas" onclick="modificarCantidad('${producto.nombre}', true)">+</button>
          </div>
        </div>
        <p class="subtotal">Subtotale: €<span id="subtotal-${producto.nombre}">${subtotal}</span></p>
        <button class="btn-eliminar" onclick="eliminarDelCarrito('${producto.nombre}')">🗑️</button>
      </div>
    `;
    carritoContainer.insertAdjacentHTML("beforeend", itemHTML);
  });
}

function modificarCantidad(nombreProducto, aumentar) {
  const producto = carrito.find((p) => p.nombre === nombreProducto);
  if (producto) {
    if (aumentar) {
      producto.cantidad++;
    } else if (producto.cantidad > 1) {
      producto.cantidad--;
    }
    actualizarCarrito();
    actualizarBurbuja();
    guardarCarritoEnLocalStorage();
  }
}

function eliminarDelCarrito(nombreProducto) {
  carrito = carrito.filter((p) => p.nombre !== nombreProducto);
  actualizarCarrito();
  actualizarBurbuja();
  guardarCarritoEnLocalStorage();
}
function guardarCarritoEnLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
