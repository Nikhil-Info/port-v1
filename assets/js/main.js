// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const iconMoon = document.querySelector('.icon-moon');
const iconSun = document.querySelector('.icon-sun');

// Set theme function
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  // Update icons visibility
  if (theme === 'dark') {
    iconMoon.style.display = 'block';
    iconSun.style.display = 'none';
  } else {
    iconMoon.style.display = 'none';
    iconSun.style.display = 'block';
  }
}

// Initialize theme
const currentTheme = localStorage.getItem('theme') || 
                    (prefersDarkScheme.matches ? 'dark' : 'light');
setTheme(currentTheme);

// Toggle theme
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', e => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});



// Rest of your existing JS...
const date = document.getElementById('date');
const setCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  date.textContent = currentYear;
};
setCurrentYear();

// hamburger menu
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const socials = document.querySelector('.social-nav');
const navLinks = document.querySelectorAll('.nav-links');

const toggleMobileMenu = () => {
  hamburger.classList.toggle('open');
  navList.classList.toggle('open');
  socials.classList.toggle('open');
  document.body.classList.toggle('open');
};

navLinks.forEach(link => link.addEventListener('click', toggleMobileMenu));
hamburger.addEventListener('click', toggleMobileMenu);

// initialize aos (library for scroll animation)
AOS.init();