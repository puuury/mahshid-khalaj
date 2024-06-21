document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.slider-nav a');
    const slider = document.getElementById('slider');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const slideIndex = this.getAttribute('data-slide');
            const slideWidth = slider.scrollWidth / slider.children.length;
            slider.scrollTo({
                left: slideWidth * slideIndex,
                behavior: 'smooth'
            });
        });
    });
});
