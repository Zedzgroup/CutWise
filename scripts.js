// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("CutWise script.js loaded!");

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Lazy Load Images
    const lazyImages = document.querySelectorAll("img[loading='lazy']");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // TikTok Login Integration
    document.getElementById("tiktok-login-btn")?.addEventListener("click", function () {
        window.open(
            "https://www.tiktok.com/auth/login",
            "_blank",
            "width=500,height=600"
        );
    });

    // AI Feature Animation Trigger
    const aiFeatures = document.querySelectorAll(".feature");

    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    aiFeatures.forEach(feature => featureObserver.observe(feature));

    // Light/Dark Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("cutwise-theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        });

        // Load saved theme
        if (localStorage.getItem("cutwise-theme") === "dark") {
            document.body.classList.add("dark-mode");
        }
    }
});