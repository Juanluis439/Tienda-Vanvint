const articulosName = [
    { index: 0, name: "anello lexa", price: "€9,50", img: "img1.png" },
    { index: 1, name: "Orecchini Rosa", price: "€9,50", img: "img2.png" },
    { index: 2, name: "Anello Talia", price: "€8,00", img: "img3.png" },
    { index: 3, name: "Orechinni Amelia", price: "€7,50", img: "img4.png" },
    { index: 4, name: "Anello Tiffany", price: "€8,00", img: "img5.jpeg" },
    { index: 7, name: "Anello Miride", price: "€9,50", img: "img8.png" },
    { index: 8, name: "Orecchini Hoop Lisa", price: "€8,50", img: "img9.jpeg" },
    { index: 9, name: "Orecchini Hoop Daría", price: "€10,00", img: "img10.png" },
    { index: 10, name: "Orecchini Gaia", price: "€11,00", img: "img11.jpeg" },
    { index: 11, name: "Orechinni Aura", price: "€7,50", img: "img12.png" },
    { index: 12, name: "Orecchini Ros", price: "€8,00", img: "img13.png" },
    { index: 13, name: "Anello Vinz", price: "€7,00", img: "img14.jpeg" },
    { index: 14, name: "Punti Luce", price: "€6,50", img: "img15.png" },
    { index: 15, name: "Anello Assia", price: "€9,50", img: "img16.png" },
    { index: 16, name: "Orechinni Drop clr oro", price: "€9,00", img: "img17.png" },
    { index: 17, name: "Orechinni Drop", price: "€9,00", img: "img18.png" },
    { index: 18, name: "Anello Coquette", price: "€9,90", img: "img19.png" },
    { index: 19, name: "Anello Mon amour", price: "€11,00", img: "img57.png" },
    { index: 20, name: "Anello Snake", price: "€9,50", img: "img21.png" },
    { index: 21, name: "Anello Isabel", price: "€9,50", img: "img22.png" },
    { index: 22, name: "Anello Anabel", price: "€9,50", img: "img23.png" },
    { index: 23, name: "Anello Fede", price: "€4,50", img: "img24.jpeg" },
    { index: 24, name: "Orecchini Lea", price: "€8,50", img: "img25.png" },
    { index: 26, name: "Anello Daris", price: "€10,00", img: "img27.png" },
    { index: 28, name: "Anello Maria", price: "€9,50", img: "img29.png" },
    { index: 29, name: "anello lexa", price: "€9,50", img: "img30.png" },
    { index: 30, name: "Orecchini Melita", price: "€7,00", img: "img31.jpeg" },
    { index: 31, name: "Bracciale Aurora", price: "€10,00", img: "img32.jpeg" },
    { index: 32, name: "Anello infinity", price: "€8,50", img: "img33.jpeg" },
    { index: 33, name: "Cuban Bracciale", price: "€8,50", img: "img34.jpeg" },
    { index: 34, name: "Collana Heart", price: "€15,00", img: "img35.jpeg" },
    { index: 35, name: "Orecchini Silvia", price: "€9,00", img: "img36.jpeg" },
    { index: 36, name: "Anello Summer", price: "€8,50", img: "img37.jpeg" },
    { index: 37, name: "Collana e bracciale Aida", price: "€12,00", img: "img38.jpeg" },
    { index: 38, name: "Orecchini Elisabeth", price: "€9,00", img: "img39.jpeg" },
    { index: 39, name: "Orecchino Flora", price: "€12,00", img: "img40.jpeg" },
    { index: 54, name: "Anello Valery", price: "€9,50", img: "img55.png" },
    { index: 55, name: "Anello Lara", price: "€9,50", img: "img56.png" },
    { index: 57, name: "Anello Alma", price: "€9,50", img: "img58.png" },
    { index: 58, name: "Anello Aitana", price: "€9,50", img: "img59.png" }
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
                        <a href="#" onclick="enviarWhatsApp('${articulo.name}')" class="btn-1">Acquistare</a>
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