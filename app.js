const projectsBtn = document.querySelector(".Projects");
const skillsBtn = document.querySelector(".Skills");
const slider = document.querySelector(".slider");
const projectSec = document.querySelector(".project-section"); 
const skillSec = document.querySelector(".skill-section");
const themeToggler = document.querySelector(".themeToggle");

projectsBtn.addEventListener("click", () => {
  slider.style.left = '6px'; 
  projectSec.classList.toggle("hidden");
  skillSec.classList.toggle("hidden");
});

skillsBtn.addEventListener("click", () => {
  slider.style.left = 'calc(50% + 6px)';
  projectSec.classList.toggle("hidden");
  skillSec.classList.toggle("hidden");
});

themeToggler.addEventListener("click", () => {
  var element = document.getElementById("icon");
  if (element.classList.contains("ri-moon-line")) {
    element.classList.remove("ri-moon-line");
    element.classList.add("ri-sun-line");
  } else {
    element.classList.remove("ri-sun-line");
    element.classList.add("ri-moon-line");
  }
  document.body.classList.toggle("dark-mode");
});