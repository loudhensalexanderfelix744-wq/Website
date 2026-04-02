// Toggle menu for mobile
const toggle = document.querySelector('.toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Confirmation avant réservation
const reserveBtn = document.querySelector('.btn-reserve');
if (reserveBtn) {
  reserveBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche la redirection immédiate
    alert("Merci ! Votre réservation est en cours...");
    window.location.href = reserveBtn.href; // Redirige après l'alerte
  });
}