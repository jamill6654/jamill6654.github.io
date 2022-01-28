
const about = document.querySelector(".about-header");
const projects = document.querySelector(".projects-header");
const contact = document.querySelector(".contact-header");

const aboutLink = document.querySelector(".about-link");
const projectsLink = document.querySelector(".projects-link");
const contactLink = document.querySelector(".contact-link");

console.log(aboutLink);
aboutLink.addEventListener('click', ()=> {
    about.classList.add("shadow");
});

projectsLink.addEventListener('click', ()=> {
    projects.classList.add("shadow");
});

contactLink.addEventListener('click', ()=> {
    contact.classList.add("shadow");
});