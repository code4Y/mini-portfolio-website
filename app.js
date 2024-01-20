const projectsBtn = document.querySelector(".Projects");
const skillsBtn = document.querySelector(".Skills");
const slider = document.querySelector(".slider");
const projectSec = document.querySelector(".project-section"); 
const skillSec = document.querySelector(".skill-section");

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
