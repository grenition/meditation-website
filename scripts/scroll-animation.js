document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.block');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    blocks.forEach(block => {
        observer.observe(block);
    });

    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }
});