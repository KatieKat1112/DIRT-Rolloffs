// AUTO ANIMATE EVERYTHING
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".animate").forEach(el => observer.observe(el));

// HEADER SHRINK
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) header.classList.add("shrink");
  else header.classList.remove("shrink");
});

// SCROLL TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) backToTop.classList.add("show");
  else backToTop.classList.remove("show");
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
