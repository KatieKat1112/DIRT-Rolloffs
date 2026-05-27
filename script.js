// ===============================
// TYPEWRITER FOR HEADER + NAV ONLY
// ===============================

function runTypewriter() {
    // Only target header brand + nav links
    const elements = document.querySelectorAll(
        ".nav-brand .typewriter, nav a.typewriter, #mobileMenu a.typewriter"
    );

    elements.forEach((el) => {
        const text = el.textContent.trim();
        el.textContent = "";
        let i = 0;

        const interval = setInterval(() => {
            el.textContent += text.charAt(i);
            i++;

            if (i === text.length) {
                clearInterval(interval);
            }
        }, 40); // typing speed
    });
}

window.addEventListener("load", runTypewriter);


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


// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (!scrollBtn) return;
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


// ===============================
// DARK MODE TOGGLE
// ===============================

const darkToggle = document.getElementById("darkToggle");

if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}
