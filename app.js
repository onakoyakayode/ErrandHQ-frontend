const toggleBtn = document.querySelector('.toggle-btn')
const navBar = document.querySelector('ul.nav-links')


toggleBtn.addEventListener('click', (e) => {
  if (navBar.style.left === "-120%") {
    navBar.style.left = "0%"
  } else {
    navBar.style.left = "-120%"
  }
});





