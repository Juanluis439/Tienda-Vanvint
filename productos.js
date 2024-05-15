const productNames = [
    "img1.jpeg",
    "img10.jpeg",
    "img11.jpeg",
    "img12.jpeg",
    "img13.jpeg",
    "img14.jpeg",
    "img15.jpeg",
    "img16.jpeg",
    "img17.jpeg",
    "img18.jpeg",
    "img19.jpeg",
    "img2.jpeg",
    "img20.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img7.jpeg",
    "img8.jpeg",
    "img9.jpeg"
]

/*
    Reason: Esta funcion carga el catogo a la pantalla de productos  
*/
window.onload = function () {

    let listContainer = document.getElementById('swiper-wrapper');
    productNames.map((productImagePath, index) => {
        listContainer.insertAdjacentHTML('beforeend', `
        <div class="swiper-slide">
        <div class="icons">
            <i class="fa-solid fa-circle-arrow-left"></i>
            <img src="img-productos/logo.jpeg" alt="Logo">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="product-content">
            <div class="product-txt">
                <span>€8</span>
                <h3>Anello Lexa</h3>
                <p>Anello in argento sterling 925 con zircone colorato blu. Misura: 7, Italiana 14</p>
            </div>
            <div class="product-img">
                <img src="img-productos/${productImagePath}" alt="Producto 1">
            </div>
        </div>
        <div>
            <a href="#" onclick="enviarWhatsApp('Anello Lexa')" class="btn-1">Comprar</a>
        </div>
    </div>
        `)
    })

}