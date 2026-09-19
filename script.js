// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", false);
  });
});

// ===== Highlight active nav link on scroll =====
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");

const highlightNav = () => {
  const scrollPos = window.scrollY + 140;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!link) return;

    if (scrollPos >= top && scrollPos < top + height) {
      navItems.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    }
  });
};

window.addEventListener("scroll", highlightNav);
highlightNav();

// ===== Contact form (front-end only demo) =====
const form = document.getElementById("contactForm");
const submitLabel = document.getElementById("submitLabel");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) return;

  // NOTE: This just simulates sending. To actually receive messages,
  // connect this form to a service like Formspree, EmailJS, or your
  // own backend endpoint and replace this block with a fetch() call.
  submitLabel.textContent = "Sending...";

  setTimeout(() => {
    submitLabel.textContent = "Message sent!";
    form.reset();
    setTimeout(() => {
      submitLabel.textContent = "Send Message";
    }, 2500);
  }, 700);
});
