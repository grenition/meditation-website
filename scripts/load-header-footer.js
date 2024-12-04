function loadHTML(filePath, containerId, callback) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error loading ' + filePath);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            if (callback) callback();
        })
        .catch(error => {
            console.error('Error loading ' + filePath + ':', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    loadHTML('elements/header.html', 'header-placeholder', function() {
        const script = document.createElement('script');
        script.src = 'scripts/mobile-menu.js';
        document.body.appendChild(script);
    });

    loadHTML('elements/footer.html', 'footer-placeholder');

    const images = document.querySelectorAll("img");

    images.forEach(img => {
        if (img.complete) {
            img.classList.add("loaded");
        } else {
            img.addEventListener("load", () => {
                img.classList.add("loaded");
            });
        }
    });
});