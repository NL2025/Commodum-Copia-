# Commodum Copia – Webontwikkeling Vraag 3

##  Inhoudsopgave

1. [index.html](#1-indexhtml) – Startpagina  
2. [categorieen.html](#2-categorieenhtml) – Overzicht van categorieën  
3. [producten.html](#3-productenhtml) – Lijst van producten  
4. [product.html](#4-producthtml) – Detailpagina van één product  
5. [bestelling.html](#5-bestellinghtml) – Bestelformulier en bevestiging  
6. [inloggen.html](#6-inloggenhtml) – Inlog- en uitlogfunctionaliteit  
7. [css/style.css](#7-cssstylecss) – Stijlen voor de website  
8. [js/*](#8-javascriptbestanden) – JavaScript-functionaliteit  
9. [data/products.json](#9-productsjson) – Productgegevens  
10. [images/*](#10-afbeeldingen) – Afbeeldingen van producten  
11. [README.md](#11-readmemd) – Deze beschrijving  
12. [Video-uitleg](#12-video-uitleg) – Korte demonstratie van de app

---

##  Bestanden en Beschrijvingen

### 1. `index.html`
- Startpagina met algemene informatie over de supermarkt.

### 2. `categorieen.html`
- Lijst van productcategorieën met links naar producten per categorie.

### 3. `producten.html`
- Dynamisch overzicht van alle producten, geladen vanuit `products.json`.

### 4. `product.html`
- Detailpagina van één product op basis van ID in de URL. Bevat knop "Voeg toe aan winkelwagen".

### 5. `bestelling.html`
- Overzicht van producten in winkelwagen en formulier voor klantgegevens.

### 6. `inloggen.html`
- Eenvoudig login-formulier met lokale validatie. Bevat login- en uitlogfunctionaliteit via LocalStorage.

### 7. `css/style.css`
- Algemene stijlen, header background, lay-out voor producten, formulieren en knoppen.

### 8. JavaScript-bestanden
- `js/script.js`: Laadt producten in `producten.html`.  
- `js/product.js`: Laadt details voor een individueel product.  
- `js/bestelling.js`: Laadt winkelwagen en verwerkt bestelformulier.  
- `js/login.js`: Verwerkt inloggen en uitloggen.

### 9. `data/products.json`
- Voorbeeldgegevens van producten (zoals appels en brood).

### 10. `images/`
- Bevat alle gebruikte productafbeeldingen zoals `appels.jpg`, `brood.jpg`, `fruit.jpg`.

---

##  Video-uitleg (max 3 min)

- In de video geef ik een rondleiding door de site.
- Ik toon de navigatie, hoe je producten toevoegt aan de winkelwagen, hoe je inlogt, en hoe je een bestelling plaatst.
- Ik vertel ook kort over hoe de bestanden georganiseerd zijn.

---

##  Veiligheid en Privacy

- Geen gevoelige gegevens worden opgeslagen.
- LocalStorage wordt alleen gebruikt voor gebruikersnaam en winkelwagen tijdelijk.
- Geen externe API’s, alle gegevens lokaal.
- Validatie op het formulier voorkomt lege invoer.

---

##  Verwerkte Feedback van Vraag 1

- Toegevoegd: `product.html`, `bestelling.html`, `inloggen.html`.
- Alle pagina's nu dynamisch en interactief.
- Navigatie verbeterd en gestructureerd volgens instructies.
- Toegevoegd: uitlegvideo en volledige documentatie.

---

