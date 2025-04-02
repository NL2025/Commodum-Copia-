document.addEventListener('DOMContentLoaded', () => {
    // Elementen ophalen
    const productenGrid = document.getElementById('producten-grid');
    const featuredProducts = document.getElementById('featured-products');
    const winkelwagenItems = document.getElementById('winkelwagen-items');
    const totaalPrijsElement = document.getElementById('totaal-prijs');
    const cartCountElements = document.querySelectorAll('#cart-count');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const winkelwagenTotaal = document.querySelector('.winkelwagen-totaal');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const categorySelect = document.getElementById('category-select');
    const clearCartBtn = document.getElementById('clear-cart');
    const betaalBtn = document.getElementById('betaal-btn');

    // Winkelwagen ophalen uit localStorage of nieuw array maken
    let winkelwagen = JSON.parse(localStorage.getItem('winkelwagen')) || [];

    // Winkelwagen bijwerken in localStorage
    function updateLocalStorage() {
        localStorage.setItem('winkelwagen', JSON.stringify(winkelwagen));
        updateCartCount();
    }

    // Update winkelwagen teller
    function updateCartCount() {
        const totalItems = winkelwagen.reduce((total, item) => total + item.aantal, 0);
        cartCountElements.forEach(element => {
            element.textContent = totalItems;
        });
    }

    // Producten laden
    async function laadProducten() {
        try {
            const response = await fetch('producten.json');
            const data = await response.json();
            
            // Producten weergeven op productenpagina
            if (productenGrid) {
                toonProducten(data.producten);
                
                // Voeg categorieën toe aan filter
                if (categorySelect) {
                    const categories = [...new Set(data.producten.map(product => product.categorie))];
                    categories.forEach(category => {
                        const option = document.createElement('option');
                        option.value = category;
                        option.textContent = category;
                        categorySelect.appendChild(option);
                    });
                }
                
                // Zoekfunctionaliteit
                if (searchBtn && searchInput) {
                    searchBtn.addEventListener('click', () => filterProducten(data.producten));
                    searchInput.addEventListener('keyup', (event) => {
                        if (event.key === 'Enter') {
                            filterProducten(data.producten);
                        }
                    });
                }
                
                // Categorie filter
                if (categorySelect) {
                    categorySelect.addEventListener('change', () => filterProducten(data.producten));
                }
            }
            
            // Featured producten op homepage
            if (featuredProducts) {
                toonFeaturedProducten(data.producten);
            }
        } catch (error) {
            console.error('Fout bij laden producten:', error);
        }
    }
    
    // Filter producten op basis van zoekopdracht en categorie
    function filterProducten(producten) {
        const zoekterm = searchInput ? searchInput.value.toLowerCase() : '';
        const categorie = categorySelect ? categorySelect.value : 'all';
        
        const gefilterd = producten.filter(product => {
            const matches
