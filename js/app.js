
const about = document.querySelector(".about-header");
const projects = document.querySelector(".projects-header");
const contact = document.querySelector(".contact-header");

const aboutLink = document.querySelector(".about-link");
const projectsLink = document.querySelector(".projects-link");
const contactLink = document.querySelector(".contact-link");

aboutLink.addEventListener('click', ()=> {
    about.classList.add("shadows-text");
    setTimeout(aboutShadow, 2000);
});

function aboutShadow(){
    about.classList.remove("shadows-text");
}

projectsLink.addEventListener('click', ()=> {
    projects.classList.add("shadows-text");
    setTimeout(projectsShadow, 2000);
});

function projectsShadow(){
    projects.classList.remove("shadows-text");
}

contactLink.addEventListener('click', ()=> {
    contact.classList.add("shadows-text");
    setTimeout(contactShadow, 2000);
});

function contactShadow(){
    contact.classList.remove("shadows-text");
}