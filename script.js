const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelectorAll(".site-nav a");

const syncHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

const closeMenu = () => {
  header?.classList.remove("is-open");
  nav?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  header?.classList.toggle("is-open", Boolean(isOpen));
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});
