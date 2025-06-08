const bestelLijst = document.getElementById("bestel-lijst");
const totaalBedrag = document.getElementById("totaalbedrag");

let winkelwagen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
let totaal = 0;

fetch("data/products.json")
  .then(res => res.json())
  .then(data => {
    winkelwagen.forEach(productId => {
      const product = data.find(p => p.product_id === productId);
      if (product) {
        const li = document.createElement("li");
        li.textContent = `${product.naam} - € ${product.prijs}`;
        bestelLijst.appendChild(li);
        totaal += parseFloat(product.prijs);
      }
    });
    totaalBedrag.textContent = totaal.toFixed(2);
  });

document.getElementById("bestelformulier").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Bedankt voor je bestelling!");
  localStorage.removeItem("winkelwagen");
  window.location.href = "index.html";
});
