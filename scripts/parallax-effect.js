document.addEventListener("DOMContentLoaded", () => {
    const postHeaderImg = document.querySelector(".post-header img");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        postHeaderImg.style.transform = `translateY(${scrollY * -0.2}px)`;
    });
});