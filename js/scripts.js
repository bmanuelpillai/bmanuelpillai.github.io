// Toggle level content visibility
function toggleLevel(levelNum) {
  const content = document.querySelector(`#level-${levelNum} .level-content`);
  if (content) {
    content.classList.toggle('active');
  }
}

// Activate a specific level
function activateLevel(levelNum) {
  // Hide all level contents
  document.querySelectorAll('.level-content').forEach(content => {
    content.classList.remove('active');
  });

  // Show the target level content
  const targetContent = document.querySelector(`#level-${levelNum} .level-content`);
  if (targetContent) {
    targetContent.classList.add('active');
  }

  // Scroll to the level
  const targetLevel = document.querySelector(`#level-${levelNum}`);
  if (targetLevel) {
    targetLevel.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

// Initialize everything on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  // Open all level contents by default
  document.querySelectorAll('.level-content').forEach(content => {
    content.classList.add('active');
  });

  // Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function () {
      sidebar.classList.toggle('active');
    });
  }

  // Load Menu
  const menuContainer = document.getElementById('menu');
  if (menuContainer) {
    fetch('menu.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.text();
      })
      .then(data => {
        menuContainer.innerHTML = data;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  document.getElementById("menu-button").addEventListener("click", toggleMenu);

  function toggleMenu() {
    const menu = document.getElementById("main-navigation");
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
  }

});
