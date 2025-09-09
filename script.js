// Smooth scroll for navigation buttons
const buttons = document.querySelectorAll('header nav button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const section = document.getElementById(btn.dataset.target);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
