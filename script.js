const navButton = document.querySelectorAll('.nav-button');
const screenOverlay = document.querySelector('.screen-overlay');
const themeButton = document.querySelector('.theme-button i');

if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  themeButton.classList.replace('fa-moon', 'fa-sun');
} else {
  themeButton.classList.replace('fa-sun', 'fa-moon');
}
//Toggle dark monde when theme buttons is clicked
themeButton.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  themeButton.classList.toggle('fa-sun', isDarkMode);
  themeButton.classList.toggle('fa-moon', isDarkMode);
});

//Toggle sidebar visibility when nav buttons are clicked
navButton.forEach(button => {
  button.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-hidden');
  });
});

//Toggle sidebar visibility when screen overlay is clicked
screenOverlay.addEventListener('click', () => {
  document.body.classList.toggle('sidebar-hidden');
});

if (window.innerWidth >= 768) {
  document.body.classList.remove('sidebar-hidden');
}
