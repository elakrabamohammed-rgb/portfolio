// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ACTIVE NAVIGATION LINK

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active-link");
        }

    });

});
// BILINGUAL PORTFOLIO

const englishButton = document.getElementById("english-btn");
const frenchButton = document.getElementById("french-btn");

function changeLanguage(language) {
    document.documentElement.lang = language;

    document.querySelectorAll("[data-en][data-fr]").forEach(element => {
        element.innerHTML = element.dataset[language];
    });

    englishButton.classList.toggle("active", language === "en");
    frenchButton.classList.toggle("active", language === "fr");
}

// Language buttons
englishButton.addEventListener("click", () => {
    changeLanguage("en");
});

frenchButton.addEventListener("click", () => {
    changeLanguage("fr");
});

// English is the default language
changeLanguage("en");