// Fade-up animation
const animatedElements = document.querySelectorAll('.animate');

function animateOnScroll() {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// MOBILE MENU TOGGLE
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}
