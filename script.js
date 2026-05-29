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

// DARK MODE TOGGLE
const toggle = document.getElementById("darkToggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
}
// CONTACT FORM SUCCESS MESSAGE
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        successMsg.style.display = "block";
        form.reset();

        setTimeout(() => {
            successMsg.style.display = "none";
        }, 3000);
    });
}
// FAQ ACCORDION
const accHeaders = document.querySelectorAll(".accordion-header");

accHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const body = header.nextElementSibling;
        body.style.display = body.style.display === "block" ? "none" : "block";
    });
});
