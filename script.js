// Define variables for dynamic content
const studentName = "Lea Michalíková";
const supervisorName = "Ing. Viktor Kocur, PhD.";
const workTitle = "Kalibrácia dopravnej kamery pomocou detekcie úbežníkov vozidiel";
const email = "michalikova36@uniba.sk";
const studyProgram = "aplikovaná informatika";
const acadYear = "2024/2025";
const annotation = "Kalibrácia kamery je proces pri ktorom sú určené jej vnútorné a vonkajšie parametre. Vďaka nim je možné následne uvažovať o geometrii zachytenej scény a zisťovať tak priestorové vzťahy objektov na rovine vozovky ako aj ich vzdialenosti."
const goal = "Spracovať prehľad automatických a semi-automatických metód kalibrácie dopravných kamier. Navrhnúť a experimentálne vyhodnotiť možnosti zlepšenia existujúceho riešenia."

const diaryEntries = [
    { dateRange: "17.2. - 23.2.",
        content: "Vytvorenie stránky pre bakalársku prácu." },
    { dateRange: "24.2. - 2.3.",
        content: "Prvotný pokus o spustenie existujúceho kódu, hľadanie a riešenie problémov spojených s jeho nefunkčnosťou (nekompatibilita verzií modelov)." },
    { dateRange: "3.3. - 9.3.",
        content: "Preskúmanie dostupných modelov pre trénovanie - čítanie dokumentácie, výber vhodného architektonického riešenia." },
    { dateRange: "10.3. - 16.3.",
        content: "Prepojenie vzdialeného prostredia s lokálnym pre jednoduchšie pracovanie s kódom." },
    { dateRange: "17.3. - 23.3.",
        content: "Zoznamovanie sa s novým modelom - snaha upraviť kód tak, aby sa správal čo najbližšie k pôvodnej verzii - zachovanie logiky a výstupov pri adaptácii na nové architektúry." },
    { dateRange: "24.3. - 30.3.",
        content: "Upravovanie súbora 'preview_heatmap.py' použitím nového modelu tak, aby sa dal spustiť." },
    { dateRange: "31.3. - 6.4.",
        content: "Pokračovanie v úpravách a testovaní súboru 'preview_heatmap.py' – ladenie chýb a zabezpečenie kompatibility s novým modelom." },
    { dateRange: "7.4. - 13.4.",
        content: "Spojazdnenie súboru 'preview_heatmap.py'." },
    { dateRange: "14.4. - 20.4.",
        content: "Upravovanie súborov 'detect_bcp.py' a 'detect_bcs.py' použitím nového modelu tak, aby sa dali spustiť." },
    { dateRange: "21.4. - 27.4.",
        content: "Spojazdnenie súborov 'detect_bcp.py' a 'detect_bcs.py'." },
    { dateRange: "28.4. - 4.5.",
        content: "Zoznamovanie sa s výstupmi nového modelu, zbežné porovnanie výsledkov medzi pôvodným a novým modelom." },
    { dateRange: "5.5. - 11.5.",
        content: "Preusporiadanie výstupných a vstupných súborov, záloha všetkých podstatných dát lokálne, príprava projektu na archiváciu." },
    { dateRange: "12.5. - 18.5.",
        content: "Spisovanie vykonaných krokov a úprav kódu ako podklad pre bakalársku prácu."},
    { dateRange: "19.5. - 25.5.",
        content: "Preloženie bakalárskej práce o rok kvôli nedostatku času na jej dokončenie." }
];

const sources = [
    "Kocur V, Ftáčnik M. Traffic Camera Calibration via Vehicle Vanishing Point Detection. InInternational Conference on Artificial Neural Networks 2021 Sep 14 (pp. 628-639). Springer, Cham.",
    "F. BAÁŠ. Stanovení pozice objektu. PhD thesis, Brno: Vysoké učení technické v Brně. Fakulta elektrotechniky a komunikačních technologií, 2019.",
    "Surya SC Congress, Anand J Puppala, and Cody L Lundberg. Total system error analysis of uav-crp technology for monitoring transportation infrastructure assets. Engineering Geology, 247:104–116, 2018.",
    "Pierre Drap and Julien Lefèvre. An exact formula for calculating inverse radial lens distortions. Sensors, 16(6):807, 2016.",
    "Markéta Dubská and Adam Herout. Real projective plane mapping for detection of orthogonal vanishing points. In BMVC, 2013.",
    "Markéta Dubská, Adam Herout, and Jakub Sochor. Automatic camera calibration for traffic understanding. In BMVC, 2014.",
    "Carsten Rother. A new approach to vanishing point detection in architectural environments. Image and Vision Computing, 20(9-10):647–655, 2002.",
    "Kyung-Seok Seo, Jung-Hwa Lee, and Heung-Moon Choi. An efficient detection of vanishing points using inverted coordinates image space. Pattern Recognition Letters, 27(2):102–108, 2006.",
    "Jakub Sochor, Jakub Špaňhel, and Adam Herout. Boxcars: Improving fine-grained recognition of vehicles using 3-d bounding boxes in traffic surveillance. IEEE transactions on intelligent transportation systems, 20(1):97–108, 2018.",
    "H. C. Standage. The Camera Obscura: Its Uses, Action, and Construction, volume IV, pages 67–71. 1885.",
    "Carlo Tomasi. A simple camera model. Notes from computer science, 527, 2015.",
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
