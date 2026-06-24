const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const bookingForm = document.getElementById('bookingForm');
const year = document.getElementById('year');
const serviceButtons = document.querySelectorAll('.service-book');

const salonWhatsApp = '923090001092';

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

serviceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const service = button.getAttribute('data-service');
    document.getElementById('service').value = service;
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  });
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;

  const message = `Hello Jaynaan Beauty Salon, I want to book an appointment.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0APreferred Date: ${encodeURIComponent(date)}`;
  window.open(`https://wa.me/${salonWhatsApp}?text=${message}`, '_blank');
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.16
});

reveals.forEach((element) => observer.observe(element));


document.addEventListener('click', function (event) {
  const navLinks = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');
  if (!navLinks || !menuToggle) return;

  const clickedInsideMenu = navLinks.contains(event.target);
  const clickedToggle = menuToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedToggle && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('#navLinks a').forEach(function (link) {
  link.addEventListener('click', function () {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
    if (!navLinks || !menuToggle) return;
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
