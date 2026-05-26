// ===============================
// FADE-UP SCROLL ANIMATIONS
// ===============================

const animatedElements = document.querySelectorAll('.animate');

function animateOnScroll() {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight - 80) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ===============================
// MOBILE MENU TOGGLE
// ===============================

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("open");
}
