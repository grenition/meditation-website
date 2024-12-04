document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");

    function generateCards(data) {
        data.forEach(person => {
            const card = document.createElement("div");
            card.classList.add("person-card");
            card.innerHTML = `
                <img src="${person.image}" alt="${person.name}">
                <div class="info">
                    <h2>${person.name}</h2>
                    <p>${person.description}</p>
                </div>
                <div class="close-btn">✕</div>
            `;
            gallery.appendChild(card);

            const closeButton = card.querySelector(".close-btn");
            card.addEventListener("click", () => {
                if (!card.classList.contains("expanded")) {
                    document.querySelectorAll(".person-card").forEach(c => c.classList.remove("expanded"));
                    card.classList.add("expanded");
                }
            });

            closeButton.addEventListener("click", (e) => {
                e.stopPropagation(); // Не триггерить клик на карточке
                card.classList.remove("expanded");
            });
        });
    }

    fetch("data/people.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Не удалось загрузить данные");
            }
            return response.json();
        })
        .then(data => generateCards(data))
        .catch(error => console.error("Ошибка:", error));
});