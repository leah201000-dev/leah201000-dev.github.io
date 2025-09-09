function showSection(id) {
  document.getElementById('landing').style.display = 'none';
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function showLanding() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById('landing').style.display = 'flex';
}
