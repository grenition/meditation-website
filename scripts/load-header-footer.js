function loadHTML(filePath, containerId) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Loading error ' + filePath);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => {
            console.error('Loading error ' + filePath + ':', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    loadHTML('../elements/header.html', 'header-placeholder');
    loadHTML('../elements/footer.html', 'footer-placeholder');
});