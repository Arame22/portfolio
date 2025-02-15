document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Vérifier si l'utilisateur a déjà choisi un thème
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    // Toggle mode sombre/clair
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });

    // Effet de zoom sur les projets
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("mouseover", function () {
            project.style.transform = "scale(1.1)";
        });
        project.addEventListener("mouseleave", function () {
            project.style.transform = "scale(1)";
        });
    });

    // Animation du formulaire de contact
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Merci pour votre message ! Je vous répondrai bientôt.");
        form.reset();
    });

    // Animation au scroll (apparition fluide des sections)
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });
});
