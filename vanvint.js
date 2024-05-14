function enviarWhatsApp(producto) {
    const telefono = '+393409691101';
    const mensaje = '¡Hola! Estoy interesado en comprar el producto: ' + producto;
    const enlaceWhatsApp = 'https://wa.me/' + telefono + '?text=' + encodeURIComponent(mensaje);
    window.location.href = enlaceWhatsApp;
}


