
const about = document.querySelector(".about-header");
const projects = document.querySelector(".projects-header");
const contact = document.querySelector(".contact-header");

const aboutLink = document.querySelector(".about-link");
const projectsLink = document.querySelector(".projects-link");
const contactLink = document.querySelector(".contact-link");

aboutLink.addEventListener('click', ()=> {
    about.classList.add("shadows-text");
    setTimeout(aboutShadow, 3500);
});

function aboutShadow(){
    about.classList.remove("shadows-text");
}

projectsLink.addEventListener('click', ()=> {
    projects.classList.add("shadows-text");
    setTimeout(projectsShadow, 3500);
});

function projectsShadow(){
    projects.classList.remove("shadows-text");
}

contactLink.addEventListener('click', ()=> {
    contact.classList.add("shadows-text");
    setTimeout(contactShadow, 3500);
});

function contactShadow(){
    contact.classList.remove("shadows-text");
}