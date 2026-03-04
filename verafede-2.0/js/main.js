/* ===============================
   THEME TOGGLE
================================= */
const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
} else {
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  html.setAttribute("data-theme", systemPrefersDark.matches ? "dark" : "light");
}

// Toggle theme safely
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

/* ===============================
   MOBILE NAVIGATION
================================= */
const toggle = document.getElementById("mobileToggle");
const navList = document.querySelector(".nav-list");

if (toggle && navList) {
  toggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
}

/* ===============================
   LET'S TALK MODAL
================================= */
const talkModal = document.getElementById("talkModal");

if (talkModal) {
  const openTalk = document.getElementById("openTalk");
  const talkOverlay = document.getElementById("talkOverlay");
  const talkClose = document.getElementById("talkClose");

  function openTalkModal(e) {
    e.preventDefault();
    talkModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeTalkModal() {
    talkModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  if (openTalk) openTalk.addEventListener("click", openTalkModal);
  if (talkOverlay) talkOverlay.addEventListener("click", closeTalkModal);
  if (talkClose) talkClose.addEventListener("click", closeTalkModal);
}

/* ===============================
   HERO HOVER WITH REVERSE LOGOS
================================= */

window.addEventListener("load", () => {
  const hero = document.getElementById("hero");
  const logos = document.querySelectorAll(".hero-logos .logo-item");

  if (!hero) return;

  function animateIn() {
    logos.forEach((logo, index) => {
      logo.classList.remove("out-left", "out-right");

      if (index % 2 === 0) {
        logo.classList.add("logo-left");
      } else {
        logo.classList.add("logo-right");
      }

      setTimeout(() => {
        logo.classList.add("in");
      }, index * 150);
    });

    hero.classList.add("active");

    setTimeout(() => {
      hero.classList.add("animate");
    }, 300);
  }

  function animateOut() {
    logos.forEach((logo, index) => {
      logo.classList.remove("in");

      if (index % 2 === 0) {
        logo.classList.add("out-left");
      } else {
        logo.classList.add("out-right");
      }
    });

    hero.classList.remove("animate");
    hero.classList.remove("active");
  }

  hero.addEventListener("mouseenter", animateIn);
  hero.addEventListener("mouseleave", animateOut);
});

/* ===============================
   HERO LOGO STAGGER ANIMATION
================================= */

function animateLogos() {
  const logos = document.querySelectorAll(".hero-logos .logo-item");

  logos.forEach((logo, index) => {
    // Set alternating direction
    if (index % 2 === 0) {
      logo.classList.add("logo-left");
    } else {
      logo.classList.add("logo-right");
    }

    // Stagger entrance
    setTimeout(() => {
      logo.classList.add("show");
    }, index * 200);
  });
}
