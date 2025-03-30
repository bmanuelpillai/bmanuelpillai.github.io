// Toggle level content visibility
function toggleLevel(levelNum) {
  const content = document.querySelector(`#level-${levelNum} .level-content`);
  content.classList.toggle('active');
}

// Activate a specific level
function activateLevel(levelNum) {
  // Hide all level contents
  document.querySelectorAll('.level-content').forEach(content => {
    content.classList.remove('active');
  });

  // Show the target level content
  document.querySelector(`#level-${levelNum} .level-content`).classList.add('active');

  // Scroll to the level
  document.querySelector(`#level-${levelNum}`).scrollIntoView({
    behavior: 'smooth'
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
  // Open all level contents by default
  document.querySelectorAll('.level-content').forEach(content => {
    content.classList.add('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('active');
  });
});
