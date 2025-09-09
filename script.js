const buttons = document.querySelectorAll('nav button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const section = document.getElementById(targetId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
