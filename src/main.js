// Add simple scroll effect to header
const header = document.getElementById('header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('shadow-lg', 'bg-white/95');
            header.classList.remove('bg-white/80');
        } else {
            header.classList.remove('shadow-lg', 'bg-white/95');
            header.classList.add('bg-white/80');
        }
    });
}

// Hero Slideshow
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

if (slides.length > 0) {
    setInterval(() => {
        slides[currentSlide].classList.remove('opacity-60');
        slides[currentSlide].classList.add('opacity-0');

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.remove('opacity-0');
        slides[currentSlide].classList.add('opacity-60');
    }, 5000); // Change image every 5 seconds
}


