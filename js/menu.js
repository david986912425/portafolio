const homeElement = document.getElementById("home");
const projectElement = document.getElementById("project");
const educationElement = document.getElementById("education");
const contactElement = document.getElementById("contact");
const skillsComponent = document.getElementById("container-skills");
const projectComponent = document.getElementById("container-project");
const contactComponent = document.getElementById("container-contact");
const educationComponent = document.getElementById("container-education");
document.addEventListener("DOMContentLoaded", function () {
  homeElement.style.backgroundColor = "#10b981";
});

function handleElementClick(element, displayValue) {
  const elements = [
    homeElement,
    projectElement,
    educationElement,
    contactElement,
  ];
  const components = [
    skillsComponent,
    projectComponent,
    educationComponent,
    contactComponent,
  ];

  elements.forEach((el, index) => {
    el.style.backgroundColor = el === element ? "#10b981" : "transparent";
    components[index].style.display = el === element ? displayValue : "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  homeElement.style.backgroundColor = "#10b981";
  handleElementClick(homeElement, "block");
});

homeElement.addEventListener("click", function () {
  handleElementClick(homeElement, "block");
});

projectElement.addEventListener("click", function () {
  handleElementClick(projectElement, "flex");
});

educationElement.addEventListener("click", function () {
  handleElementClick(educationElement, "flex");
});

contactElement.addEventListener("click", function () {
  handleElementClick(contactElement, "block");
});
