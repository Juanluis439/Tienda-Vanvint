const articulosName = [
    { index: 0, name: "anello lexa", price: "€9,50", img: "img1.jpeg" },
    { index: 1, name: "anello lexa", price: "€9,50", img: "img2.jpeg" },
    { index: 2, name: "anello lexa", price: "€9,50", img: "img3.jpeg" },
    { index: 3, name: "anello lexa", price: "€9,50", img: "img4.jpeg" },
    { index: 4, name: "anello lexa", price: "€9,50", img: "img5.jpeg" },
    { index: 5, name: "anello lexa", price: "€9,50", img: "img6.jpeg" },
    { index: 6, name: "anello lexa", price: "€9,50", img: "img7.jpeg" },
    { index: 7, name: "anello lexa", price: "€9,50", img: "img8.jpeg" },
    { index: 8, name: "anello lexa", price: "€9,50", img: "img9.jpeg" },
    { index: 9, name: "anello lexa", price: "€9,50", img: "img10.jpeg" },
    { index: 10, name: "anello lexa", price: "€9,50", img: "img11.jpeg" },
    { index: 11, name: "anello lexa", price: "€9,50", img: "img12.jpeg" },
    { index: 12, name: "anello lexa", price: "€9,50", img: "img13.jpeg" },
    { index: 13, name: "anello lexa", price: "€9,50", img: "img14.jpeg" },
    { index: 14, name: "anello lexa", price: "€9,50", img: "img15.jpeg" },
    { index: 15, name: "anello lexa", price: "€9,50", img: "img16.jpeg" },
    { index: 16, name: "anello lexa", price: "€9,50", img: "img17.jpeg" },
    { index: 17, name: "anello lexa", price: "€9,50", img: "img18.jpeg" },
    { index: 18, name: "anello lexa", price: "€9,50", img: "img19.jpeg" },
    { index: 19, name: "anello lexa", price: "€9,50", img: "img20.jpeg" },
    { index: 20, name: "anello lexa", price: "€9,50", img: "img21.jpeg" },
    { index: 21, name: "anello lexa", price: "€9,50", img: "img22.jpeg" },
    { index: 22, name: "anello lexa", price: "€9,50", img: "img23.jpeg" },
    { index: 23, name: "anello lexa", price: "€9,50", img: "img24.jpeg" },
    { index: 24, name: "anello lexa", price: "€9,50", img: "img25.jpeg" },
    { index: 25, name: "anello lexa", price: "€9,50", img: "img26.jpeg" },
    { index: 26, name: "anello lexa", price: "€9,50", img: "img27.jpeg" },
    { index: 27, name: "anello lexa", price: "€9,50", img: "img28.jpeg" },
    { index: 28, name: "anello lexa", price: "€9,50", img: "img29.jpeg" },
    { index: 29, name: "anello lexa", price: "€9,50", img: "img30.jpeg" },
    { index: 30, name: "anello lexa", price: "€9,50", img: "img31.jpeg" },
    { index: 31, name: "anello lexa", price: "€9,50", img: "img32.jpeg" },
    { index: 32, name: "anello lexa", price: "€9,50", img: "img33.jpeg" },
    { index: 33, name: "anello lexa", price: "€9,50", img: "img34.jpeg" },
    { index: 34, name: "anello lexa", price: "€9,50", img: "img35.jpeg" },
    { index: 35, name: "anello lexa", price: "€9,50", img: "img36.jpeg" },
    { index: 36, name: "anello lexa", price: "€9,50", img: "img37.jpeg" },
    { index: 37, name: "anello lexa", price: "€9,50", img: "img38.jpeg" },
    { index: 38, name: "anello lexa", price: "€9,50", img: "img39.jpeg" },
    { index: 39, name: "anello lexa", price: "€9,50", img: "img40.jpeg" },
    { index: 40, name: "anello lexa", price: "€9,50", img: "img41.jpeg" }
];

window.onload = function() {
    let listContainer = document.querySelector(".product-list");
    articulosName.forEach((articulo, index) => {
        listContainer.insertAdjacentHTML('beforeend', `
            <div class="product-card" onclick="toggleCard(this)">
                <div class="front">
                    <img src="img/${articulo.img}" alt="Articulo ${index + 1}">
                    <h2>${articulo.name}</h2>
                </div>
                <div class="back">
                    <p>Precio: ${articulo.price}</p>
                    <button>Comprar</button>
                </div>
            </div>
        `);
    });
}

function toggleCard(card) {
    card.classList.toggle('flipped');
}

