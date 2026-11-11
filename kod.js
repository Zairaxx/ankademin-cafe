document.querySelector("#namn").textContent = "Ankademin Café";
document.querySelector("#slogan").textContent = "Stockholm's no.1 coding cafe!"

document.body.style.background = "violet";

let prices = document.querySelectorAll(".pris");
prices.forEach((pris, index) => {
    if (index === 2) {
        pris.textContent = "15kr"
    } else {
        pris.textContent = "19kr"
    }
})

// prices[2].textContent = "15kr";
// document.querySelector("li:nth-child(3) span.pris").textContent = "19kr";

let newProduct = document.querySelector("li.produkt:nth-child(4)");

newProduct.innerHTML = "Kanelbulle <span class='pris'>99kr</span>"

let h3 = document.createElement("h3");
h3.textContent = "Öppettider: Alla dagar kl 18-21";

let p = document.createElement("p");
p.textContent = "Till Ankademin Café är alla välkomna att sitta och koda och ta en mysig fika!"

document.querySelector("#website").append(h3,p);


let allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach(p => p.style.color = "darkgreen");