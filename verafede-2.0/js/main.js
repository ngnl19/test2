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
   PRELOADER (LOADS ONCE PER TAB)
================================= */

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const hero = document.querySelector(".hero");

  if (!preloader) return;

  const hasLoaded = sessionStorage.getItem("preloaderShown");

  function startHeroAnimation() {
    if (hero) hero.classList.add("animate");
    animateLogos(); // 👈 TRIGGER LOGO ANIMATION HERE
  }

  if (!hasLoaded) {
    sessionStorage.setItem("preloaderShown", "true");

    const duration = Math.floor(Math.random() * 2000) + 3000;

    setTimeout(() => {
      preloader.classList.add("hide");

      setTimeout(() => {
        startHeroAnimation();
      }, 500);
    }, duration);
  } else {
    preloader.style.display = "none";
    startHeroAnimation();
  }
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
