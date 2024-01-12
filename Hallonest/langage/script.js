//Couleur du fond
let themeSelector = document.querySelector('#theme');
themeSelector.addEventListener('change', function() {
  let body = document.querySelector('body');
  body.classList.remove("light-mode", "pink-mode", "blue-mode", "green-mode", "yellow-mode", "dark-mode");

  body.classList.add(`${this.value}-mode`);
});


// Navbar
window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})