let isWindowLoaded = false;
let isDataFetched = false;
let json;

// Function to fetch data from json
function fetchJSONData() {
    fetch('./data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            json = data;
            isDataFetched = true;
            updateContent();
        })
        .catch(error => console.error('Failed to fetch data:', error));
}
fetchJSONData();

window.addEventListener("load",
    () => {
        isWindowLoaded = true;
        updateContent();
    }
)

// Function to update the content dynamically
function updateContent() {
    if (!isWindowLoaded || !isDataFetched) { return }

    document.getElementById('student-name').innerText = json["studentName"];
    document.getElementById('supervisor-name').innerText = json["supervisorName"];
    document.getElementById('work-title').innerText = json["workTitle"];
    document.getElementById('email').innerText = json["email"];
    document.getElementById('study-program').innerText = json["studyProgram"];
    document.getElementById('acad-year').innerText = json["acadYear"];
    document.getElementById('annotation').innerText = json["annotation"];
    document.getElementById('goal').innerText = json["goal"];

    // weekly diary
    const diaryContainer = document.getElementById('diary');
    json["diaryEntries"].forEach((entry, index) => {
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

    json["sources"].forEach((source, index) => {
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
