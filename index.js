const productNames = [
    { index: 0, name: "anello lexa", price: "€9,50", img:"img1.jpeg" },
    { index: 1, name: "anello Summer", price: "€8,50", img:"img10.jpeg" },
    { index: 2, name: "Orecchini Lea, Nerlin", price: "€8", img: "img11.jpeg" },
    { index: 3, name: "anello lexa", price: "€8,50", img: "img12.jpeg" },
    { index: 4, name: "Orecchini Gaia", price: "€11", img: "img13.jpeg" },
    { index: 5, name: "anello lexa", price: "€8", img: "img14.jpeg" },
    { index: 6, name: "anello lexa", price: "€8", img: "img15.jpeg" },
    { index: 7, name: "anello lexa", price: "€8", img: "img16.jpeg" },
    { index: 8, name: "anello lexa", price: "€8", img: "img17.jpeg" },
    { index: 9, name: "anello lexa", price: "€8", img: "img18.jpeg" },
    { index: 10, name: "anello lexa", price: "€8", img: "img19.jpeg" },
    { index: 11, name: "anello lexa", price: "€8", img: "img2.jpeg" },
    { index: 12, name: "anello lexa", price: "€8", img: "img20.jpeg" },
    { index: 13, name: "anello lexa", price: "€8", img: "img3.jpeg"} ,
    { index: 14, name: "anello lexa", price: "€8", img: "img4.jpeg"} ,
    { index: 15, name: "anello lexa", price: "€8", img: "img5.jpeg"} ,
    { index: 16, name: "anello lexa", price: "€8", img: "img6.jpeg"} ,
    { index: 17, name: "anello lexa", price: "€8", img: "img7.jpeg"} ,
    { index: 18, name: "anello lexa", price: "€8", img: "img8.jpeg"} ,
    { index: 19, name: "anello lexa", price: "€8", img: "img9.jpeg"} ,
    { index: 20, name: "anello lexa", price: "€8", img: "img21.jpeg"}  
]

/*
    Reason: Esta funcion carga el catogo a la pantalla de productos  
*/
window.onload = function () {

    let listContainer = document.getElementById('swiper-wrapper');
    productNames.map((product, index) => {
        listContainer.insertAdjacentHTML('beforeend', `
        <div class="swiper-slide">
        <div class="icons">
            <i class="fa-solid fa-circle-arrow-left"></i>
            <img src="img-catalogo/logo.jpeg" alt="Logo">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="product-content">
            <div class="product-txt">
                <span>${product.price}</span>
                <h3>${product.name}</h3>
                <p>Anello in argento sterling 925 con zircone colorato blu.</p>
            </div>
            <div class="product-img">
                <img src="img-catalogo/${product.img}" alt="Producto ${index + 1}">
            </div>
        </div>
        <div>
            <a href="#" onclick="enviarWhatsApp('${product.name}')" class="btn-1">Acquistare</a>
        </div>
    </div>
        `)
    })

}