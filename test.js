var burger = document.getElementsByClassName('header-burger');
var active = document.getElementsByClassName('header-burger');
let menu = document.getElementsByClassName('nav-menu');
let body = document.getElementsByTagName('body');
burger[0].onclick = function() {
  active[0].classList.toggle("active");
  menu[0].classList.toggle("active");
  body[0].classList.toggle("lock");
}
