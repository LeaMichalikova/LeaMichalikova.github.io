// Define variables for dynamic content
var studentName = "Lea Michalíková";
var supervisorName = "Ing. Viktor Kocur, PhD.";
var workTitle = "Kalibrácia dopravnej kamery pomocou detekcie úbežníkov vozidiel";
var email = "michalikova36@uniba.sk";
var annotation = "This is a brief annotation about the work.";
var goal = "Cieľ";
var workDescription = "This section describes the actual work done during the project.";
var weeklyDiary = "This week's progress includes research and testing.";

var sources = [
    "Source 1",
    "Source 2",
    "Source 3"
];

// Function to update the content dynamically
function updateContent() {
    document.getElementById('student-name').innerText = studentName;
    document.getElementById('supervisor-name').innerText = supervisorName;
    document.getElementById('work-title').innerText = workTitle;
    // document.getElementById('work-title2').innerText = workTitle;
    document.getElementById('email').innerText = email;
    document.getElementById('email2').innerText = email;
    document.getElementById('annotation').innerText = annotation;
    document.getElementById('goal').innerText = goal;
    //unused myb
    // document.getElementById('sources-list').innerText = sources.join('\n');
    document.getElementById('sources-list').innerHTML = sources.join('<br><br>');

    // document.getElementById('work-description').innerText = workDescription;
    // document.getElementById('weekly-diary').innerText = weeklyDiary;
}

// Call the function to update content after the page loads
window.onload = updateContent;
// updateContent();

// Corrects view position after clicking on a nav section
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default instant jump

        const targetId = this.getAttribute('href').substring(1); // Get section ID
        const targetSection = document.getElementById(targetId);
        const headerHeight = document.querySelector('header').offsetHeight; // Get header height

        window.scrollTo({
            top: targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - 50, // Adjust for header & spacing
            behavior: 'smooth'
        });
    });
});

// Active section in nav on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li");

function updateActiveSection() {
    let scrollPosition = window.scrollY + window.innerHeight / 3;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove("selected");
                if (link.querySelector("a").getAttribute("href").substring(1) === section.id) {
                    link.classList.add("selected");
                }
            });
        }
    });
}

window.addEventListener("scroll", updateActiveSection);
updateActiveSection();
