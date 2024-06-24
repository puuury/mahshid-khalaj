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


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.slider-nav a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const slideId = this.getAttribute('href');
            document.querySelector(slideId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.slider-nav a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const slideId = this.getAttribute('href');
            const targetSlide = document.querySelector(slideId);
            targetSlide.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.slider-nav a');
    const slider = document.querySelector('#slider2');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const slideId = this.getAttribute('href').substring(1);
            const targetSlide = document.getElementById(slideId);

            const slideWidth = targetSlide.offsetWidth;
            const slideIndex = Array.from(targetSlide.parentNode.children).indexOf(targetSlide);

            slider.scroll({
                left: slideIndex * slideWidth,
                behavior: 'smooth'
            });
        });
    });
});
