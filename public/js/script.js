// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Typewriter Effect
const typewriter = document.querySelector('.typewriter');
const text = 'Hello, Welcome to my Portfolio!';
let index = 0;
function type() {
    if (index < text.length) {
        typewriter.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
type();

// Chatbox Functionality
const chatboxToggle = document.querySelector('.chatbox-toggle');
const chatbox = document.querySelector('.chatbox');
chatboxToggle.addEventListener('click', () => {
    chatbox.classList.toggle('active');
});

// Contact Form Submission
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    // Handle form submission, e.g., send to API
    console.log('Contact Form Data', Object.fromEntries(formData));
});

// Project Loading from API
async function loadProjects() {
    const response = await fetch('https://api.example.com/projects');
    const projects = await response.json();
    const projectsContainer = document.querySelector('.projects');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectsContainer.appendChild(projectElement);
    });
}
loadProjects();

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});