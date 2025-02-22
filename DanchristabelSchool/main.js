// Preloader: Hide after 3.5s
window.addEventListener('load', function () {
    document.body.style.overflow = 'hidden'; // Disable scroll while loading
    setTimeout(function () {
        document.getElementById('preloader').style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scroll
    }, 3500);
});


// Back to Top Functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.addEventListener('scroll', function () {
  const btn = document.getElementById('backToTop');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

// Toggle Contact Modal (WhatsApp & Call)
function toggleContactModal() {
  const modal = document.getElementById('contactModal');
  modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}
// Close contact modal if clicking outside
window.addEventListener('click', function(e) {
  const modal = document.getElementById('contactModal');
  const btn = document.querySelector('.contact-btn');
  if (!modal.contains(e.target) && e.target !== btn) {
    modal.style.display = 'none';
  }
});

// Toggle Mobile Navigation Menu
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}