function showSection(sectionId) {
  document.getElementById('landing').style.display = 'none';
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'flex';
}

function showLanding() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById('landing').style.display = 'flex';
}
