const productNames = [
    { index: 0, name: "anello lexa", price: "€9,50", img:"img1.png" },
    { index: 1, name: "anello Summer", price: "€8,50", img:"img10.jpeg" },
    { index: 2, name: "Orecchini Lea, Nerlin", price: "€8,00", img: "img11.jpeg" },
    { index: 4, name: "Orecchini Gaia", price: "€11", img: "img13.png" },
    { index: 5, name: "Anello Coquett", price: "€8", img: "img14.png" },
    { index: 6, name: "Orecchini Silvia", price: "€9,00", img: "img15.jpeg" },
    { index: 7, name: "Orecchini Aura", price: "€7,50", img: "img16.png" },
    { index: 8, name: "Orecchini Amelia", price: "€7,50", img: "img17.jpeg" },
    { index: 9, name: "Anello Tiffany", price: "€8,00", img: "img18.jpeg" },
    { index: 10, name: "Orecchini Elisabeth", price: "€9,00", img: "img19.jpeg" },
    { index: 11, name: "Mono Orecchini Melisa", price: "€10,00", img: "img2.png" },
    { index: 12, name: "Orecchini Ros", price: "€8,00", img: "img20.jpeg" },
    { index: 13, name: "Orecchini Coquette", price: "€8", img: "img3.png"} ,
    { index: 14, name: "Orecchini Rosa", price: "€8,50", img: "img4.jpeg"} ,
    { index: 15, name: "Orecchini Delia", price: "€7,00", img: "img5.jpeg"} ,
    { index: 16, name: "Orecchini Drop clr oro", price: "€9,00", img: "img6.jpeg"} ,
    { index: 17, name: "Orecchini Saliscendi", price: "€12,00", img: "img7.jpeg"} ,
    { index: 18, name: "Anello Fede", price: "€4,50", img: "img8.jpeg"} ,
    { index: 19, name: "anello Double", price: "€8,50", img: "img9.jpeg"} ,
    { index: 20, name: "Collana Heart", price: "€15,00", img: "img21.png"}  
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
            <img src="img-catalogo/logo.png" alt="Logo">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="product-content">
            <div class="product-txt">
                <span>${product.price}</span>
                <h3>${product.name}</h3>
                <p>argento sterling 925.</p>
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