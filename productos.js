const articulosName = [
    { index: 0, name: "anello lexa", price: "€9,50", img: "img1.jpeg" },
    { index: 1, name: "prueba", price: "€9,50", img: "img2.jpeg" },
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
    { index: 40, name: "anello lexa", price: "€9,50", img: "img41.jpeg" },
    { index: 41, name: "Orechinni Amelia", price: "€7,50", img: "img42.jpeg" },
    { index: 42, name: "Orecchini Rosa", price: "€9,50", img: "img43.jpeg" },
    { index: 43, name: "Orechinni Aura", price: "€7,50", img: "img44.jpeg" },
    { index: 44, name: "Anello Tiffany", price: "€8,00", img: "img45.jpeg" },
    { index: 45, name: "Orechinni Lea", price: "€8,50", img: "img46.jpeg" },
    { index: 46, name: "Anello Assia", price: "€9,50", img: "img47.jpeg" },
    { index: 47, name: "Anello Snake", price: "€9,50", img: "img48.jpeg" },
    { index: 48, name: "Punti Luce", price: "€6,50", img: "img49.jpeg" },
    { index: 49, name: "Anello Anabel", price: "€9,50", img: "img50.jpeg" },
    { index: 50, name: "Orecchini Drop", price: "€9,00", img: "img51.jpeg" },
    { index: 51, name: "Anello Maria", price: "€9,90", img: "img52.jpeg" },
    { index: 52, name: "Anello Isabel", price: "€9,50", img: "img53.jpeg" },
    { index: 53, name: "Orechinni Ria", price: "€7,50", img: "img54.jpeg" },
    { index: 54, name: "Anello Valery", price: "€9,50", img: "img55.jpeg" },
    { index: 55, name: "anello lexa", price: "€9,50", img: "img56.jpeg" },
    { index: 56, name: "anello lexa", price: "€9,50", img: "img57.jpeg" },
    { index: 57, name: "anello lexa", price: "€9,50", img: "img58.jpeg" },
    { index: 58, name: "anello lexa", price: "€9,50", img: "img59.jpeg" },
    { index: 59, name: "anello lexa", price: "€9,50", img: "img60.jpeg" }
];

window.onload = function() {
    const resultContainer = document.getElementById("resultadoContainer");
    const searchInput = document.getElementById("buscador");

    function renderResults(results) {
        resultContainer.innerHTML = '';
        results.forEach((articulo, index) => {
            resultContainer.insertAdjacentHTML('beforeend', `<div class="card-container">
                <div class="card">
                    <img src="img-productos/${articulo.img}" alt="Articulo ${index + 1}">
                </div>
                <div class="info-card">
                    <div>
                        <h2>${articulo.name}</h2>
                    </div>
                    <div>
                        <p>${articulo.price}</p>
                    </div>
                    <div>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>`);
        });
    }

    function filterResults() {
        const query = buscador.value.toLowerCase();
        const filteredResults = articulosName.filter(articulo => articulo.name.toLowerCase().includes(query));
        renderResults(filteredResults);
    }

    buscador.addEventListener('input', filterResults);

    // Render all items initially
    renderResults(articulosName);
};

function toggleCard(card) {
    card.classList.toggle('flipped');
}