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

// Toggle menu visibility
function toggleMenu() {
  const menu = document.getElementById("main-navigation");
  if (menu) {
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
      menuButton.classList.toggle('open');
    }
  }
}

// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Function to scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  return false;
}

// Initialize everything on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  // Open all level contents by default
  document.querySelectorAll('.level-content').forEach(content => {
    content.classList.add('active');
  });

  // Load the header
  fetch('header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      // Set the page-specific title
      const pageTitle = document.getElementById('page-title');
      if (pageTitle) {
        pageTitle.innerText = document.title || 'The Big Picture';
      }
    })
    .catch(error => {
      console.error('There was a problem loading the header:', error);
    });

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
});
