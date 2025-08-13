// Navbar toggle for mobile
const toggleBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Smooth scroll to sections
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll to top button
const scrollBtn = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Placeholder for future JS features
console.log("VBVP site loaded.");

 




