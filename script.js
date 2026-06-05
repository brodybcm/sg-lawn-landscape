// South Georgia Lawn & Landscape — JavaScript
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 60); });
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Quote form
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-quote-btn');
    btn.textContent = '✅ Quote Request Sent! We\'ll call you within 24 hours.';
    btn.style.background = '#27ae60';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = 'Request My Free Quote 🌿'; btn.style.background = ''; btn.disabled = false; quoteForm.reset(); }, 5000);
  });
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.08 });
document.querySelectorAll('.service-card, .why-card, .testi-card, .area-item, .perk').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(25px)'; el.style.transition = 'opacity 0.55s ease, transform 0.55s ease'; observer.observe(el);
});
