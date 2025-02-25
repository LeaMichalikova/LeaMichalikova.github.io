// Define variables for dynamic content
const studentName = "Lea Michalíková";
const supervisorName = "Ing. Viktor Kocur, PhD.";
const workTitle = "Kalibrácia dopravnej kamery pomocou detekcie úbežníkov vozidiel";
const email = "michalikova36@uniba.sk";
const studyProgram = "Aplikovaná informatika";
const acadYear = "2024/2025";
const annotation = "Sem pôjde anotácia práce.";
const goal = "Sem pôjde cieľ práce."

const diaryEntries = [
    { dateRange: "17.2. - 23.2.",
        content: "Vytvorenie stránky pre bakalársku prácu." },
    { dateRange: "24.2. - 2.3.",
        content: "" },
    { dateRange: "3.3. - 9.3.",
        content: "" },
    { dateRange: "3.3. - 9.3.",
        content: "" },
    { dateRange: "10.3. - 16.3.",
        content: "" },
    { dateRange: "17.3. - 23.3.",
        content: "" },
    { dateRange: "24.3. - 30.3.",
        content: "" },
    { dateRange: "31.3. - 6.4.",
        content: "" },
    { dateRange: "7.4. - 13.4.",
        content: "" },
    { dateRange: "14.4. - 13.4.",
        content: "" },
    { dateRange: "21.4. - 27.4.",
        content: "" },
    { dateRange: "28.4. - 4.5.",
        content: "" },
    { dateRange: "5.5. - 11.5.",
        content: "" },
    { dateRange: "12.5. - 18.5.",
        content: "" },
    { dateRange: "19.5. - 25.5.",
        content: "" },
    { dateRange: "26.5. - 1.6.",
        content: "" },
    { dateRange: "2.6. - 8.6.",
        content: "" },
    { dateRange: "9.6. - 15.6.",
        content: "" },
    { dateRange: "16.6. - 22.6.",
        content: "" },
    { dateRange: "23.6. - 29.6.",
        content: "" }
];

const sources = [
    "Sem pôjde prvý zdroj.",
    "Sem pôjde druhý zdroj.",
    "A tak ďalej.",
];

// Function to update the content dynamically
function updateContent() {
    document.getElementById('student-name').innerText = studentName;
    document.getElementById('supervisor-name').innerText = supervisorName;
    document.getElementById('work-title').innerText = workTitle;
    document.getElementById('email').innerText = email;
    document.getElementById('study-program').innerText = studyProgram;
    document.getElementById('acad-year').innerText = acadYear;
    document.getElementById('annotation').innerText = annotation;
    document.getElementById('goal').innerText = goal;

    // weekly diary
    const diaryContainer = document.getElementById('diary');
    diaryEntries.forEach((entry, index) => {
        const diaryEntry = document.createElement('div');
        diaryEntry.classList.add('diary-entry');

        const dateDiv = document.createElement('div');
        dateDiv.classList.add('diary-date-container');

        const weekDiv = document.createElement('div');
        weekDiv.classList.add('diary-week');
        weekDiv.innerText = `${index + 1}. týždeň`;

        const dateTextDiv = document.createElement('div');
        dateTextDiv.classList.add('diary-date');
        dateTextDiv.innerText = entry.dateRange;

        dateDiv.appendChild(weekDiv);
        dateDiv.appendChild(dateTextDiv);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('diary-content');
        const paragraph = document.createElement('p');
        paragraph.innerText = entry.content;
        contentDiv.appendChild(paragraph);

        const diaryItem = document.createElement('div');
        diaryItem.classList.add('diary-item');

        diaryItem.appendChild(dateDiv);
        diaryItem.appendChild(contentDiv);

        diaryEntry.appendChild(diaryItem);

        diaryContainer.appendChild(diaryEntry);
    });

    // Sources section
    const sourcesContainer = document.getElementById('sources-list');

    sources.forEach((source, index) => {
        const sourceEntry = document.createElement('div');
        sourceEntry.classList.add('source-entry');

        // Index number container
        const indexDiv = document.createElement('div');
        indexDiv.classList.add('source-index');
        indexDiv.innerText = `${index + 1}.`;

        // Source content
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('source-content');
        contentDiv.innerText = source; // Assuming `source` is a string (adjust if it's an object)

        // Wrapping it
        const sourceItem = document.createElement('div');
        sourceItem.classList.add('source-item');

        sourceItem.appendChild(indexDiv);
        sourceItem.appendChild(contentDiv);
        sourceEntry.appendChild(sourceItem);
        sourcesContainer.appendChild(sourceEntry);
    });

}

// Call the function to update content after the page loads
window.onload = updateContent;
// updateContent();

// Corrects view position after clicking on a nav section
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;

        window.scrollTo({
            top: targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - 50,
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
