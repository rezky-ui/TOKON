document.addEventListener("DOMContentLoaded", () => {
    console.log("TOKON berhasil dimuat");

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const menu = card.querySelector("h3")?.textContent || "Menu";
            console.log("Membuka:", menu);
        });
    });
});
