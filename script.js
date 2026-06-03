// TYPEWRITER
document.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector(".typewriter");
    if (!el) return;

    const text = el.getAttribute("data-text");
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 80);
        } else {
            el.style.borderRight = "none";
        }
    }

    type();
});

// SCROLL REVEAL
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            reveals[i].classList.add("active");
        }
    }
}

// DARK MODE
const toggle = document.getElementById("darkToggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
}

// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".header-right");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// LIGHTBOX (Gallery)
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

if (lightbox && lightboxImg && closeLightbox) {
    document.querySelectorAll(".gallery-img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// Dark Mode Toggle
const darkToggle = document.getElementById("darkToggle");

if (darkToggle) {
    darkToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
    });
}
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        q.parentElement.classList.toggle('active');
    });
});
