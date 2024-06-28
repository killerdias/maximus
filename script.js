document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 100;
        document.querySelector(".carousel-inner").style.transform = `translateX(${offset}%)`;
    }

    window.prevSlide = function() {
        showSlide(currentSlide - 1);
    }

    window.nextSlide = function() {
        showSlide(currentSlide + 1);
    }
    
    // Initialize the carousel
    showSlide(currentSlide);
    
    // Form submission logic
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const slideInterval = 3000; // Intervalo de tempo em milissegundos

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 100;
        document.querySelector(".carousel-inner").style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Set up interval for automatic sliding
    setInterval(nextSlide, slideInterval);

    // Attach controls to window object for manual control
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

    // Initialize the carousel
    showSlide(currentSlide);

    // Form submission logic
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = item.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});
