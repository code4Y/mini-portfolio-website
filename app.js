const projectsBtn = document.querySelector(".Projects");
const skillsBtn = document.querySelector(".Skills");
const slider = document.querySelector(".slider");

projectsBtn.addEventListener("click", () => {
  slider.style.left = '6px'; 
  projectsBtn.classList.add("active");
  skillsBtn.classList.remove("active");
});

skillsBtn.addEventListener("click", () => {
  slider.style.left = 'calc(50% + 6px)';
  skillsBtn.classList.add("active");
  projectsBtn.classList.remove("active");
});
