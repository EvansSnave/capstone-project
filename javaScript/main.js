
// Navigator mobile menu

let hamburger = document.querySelector(".navigator-menu__burger");
let menu = document.querySelector(".hidden-menu");
let closeButton = document.querySelector(".hidden-menu__x-element");
let body = document.body;

hamburger.addEventListener("click", ()=>{
  menu.style.display = "block";
  body.style.overflow = "hidden";
});

closeButton.addEventListener("click", ()=>{
  menu.style.display = "none";
  body.style.overflow = "visible";
});
