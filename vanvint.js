function enviarWhatsApp() {
  const telefono = "+393409691101"; // Número sin 'wa.me/'

  // Crear mensaje con la información del carrito
  let mensaje = "Ciao! Sono interessato ad acquistare i seguenti prodotti:\n\n";

  carrito.forEach((producto) => {
    mensaje += `Nombre: ${producto.nombre}\n`;
    mensaje += `Cantidad: ${producto.cantidad}\n`;
    mensaje += `Precio: €${producto.precio.toFixed(2)}\n`;
    mensaje += `Imagen: ${window.location.origin}/${producto.img}\n\n`; // Puedes modificar esta línea si quieres mostrar la imagen o solo el nombre del archivo
  });

  // Crear el enlace de WhatsApp con el mensaje
  const enlaceWhatsApp =
    "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

  // Redirigir al enlace de WhatsApp
  window.location.href = enlaceWhatsApp;
}
