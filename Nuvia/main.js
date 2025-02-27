// Preloader: Hide after 3.5s
window.addEventListener('load', function () {
    document.body.style.overflow = 'hidden'; // Disable scroll while loading
    setTimeout(function () {
        document.getElementById('preloader').style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scroll
    }, 3500);
});

// Toggle Navigation
document.addEventListener('DOMContentLoaded', function () {
    const toggleNav = document.querySelector('.toggle-nav');
    const navLinks = document.querySelector('.nav-links');

    toggleNav.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

// Hero Slider
const sliderImages = document.querySelectorAll('.slider-images img');
let currentImage = 0;

function nextImage() {
    sliderImages[currentImage].classList.remove('active'); // Hide current image
    currentImage = (currentImage + 1) % sliderImages.length; // Move to next image
    sliderImages[currentImage].classList.add('active'); // Show next image
}

setInterval(nextImage, 3000); // Change image every 3 seconds

// Ensure first image is active on page load
window.onload = () => {
    sliderImages[0].classList.add('active');
};

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});