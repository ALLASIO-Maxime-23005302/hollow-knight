function noir() {
  var element = document.body;
  element.classList.remove("light-mode", "pink-mode", "blue-mode", "green-mode", "yellow-mode");
  element.classList.add("dark-mode");
}
function blanc() {
  var element = document.body;
  element.classList.remove("dark-mode", "pink-mode", "blue-mode", "green-mode", "yellow-mode");
  element.classList.add("light-mode");

}
function rose() {
  var element = document.body;
  element.classList.remove("light-mode", "dark-mode", "blue-mode", "green-mode", "yellow-mode");
  element.classList.add("pink-mode");
}
function bleu() {
  var element = document.body;
  element.classList.remove("light-mode", "pink-mode", "dark-mode", "green-mode", "yellow-mode");
  element.classList.add("blue-mode");
}
function vert() {
  var element = document.body;
  element.classList.remove("light-mode", "pink-mode", "blue-mode", "dark-mode", "yellow-mode");
  element.classList.add("green-mode");
}
function jaune() {
  var element = document.body;
  element.classList.remove("light-mode", "pink-mode", "blue-mode", "green-mode", "dark-mode");
  element.classList.add("yellow-mode");
}
