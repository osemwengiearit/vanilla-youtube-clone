const navButton = document.querySelector('.nav-button');

//Toggle sidebar visibility when nav buttons are clicked
navButton.addEventListener('click', () => {
  document.body.classList.toggle('sidebar-hidden');
});
