const hamburger = document.querySelector('.hamburger');
const mobileNavLinks = document.querySelector('.mobile-nav-links');

hamburger.addEventListener('click', function() {
    mobileNavLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});