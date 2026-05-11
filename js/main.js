const toggle = document.querySelector(".navbar__toggle");
const toggleImg = toggle ? toggle.querySelector("img") : null;
const menu = document.querySelector(".navbar__menu");

if (toggle && menu) {
  const open = () => {
    menu.classList.add("navbar__menu--open");
    if (toggleImg) toggleImg.src = "/assets/svg's/xmark.svg";
  };
  const close = () => {
    menu.classList.remove("navbar__menu--open");
    if (toggleImg) toggleImg.src = "/assets/svg's/bars.svg";
  };
  toggle.addEventListener("click", () => {
    menu.classList.contains("navbar__menu--open") ? close() : open();
  });
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", close);
  });
}

const badge = document.getElementById("badge");
const footer = document.getElementById("footer");

if (badge && footer) {
  const observer = new IntersectionObserver(([entry]) => {
    badge.style.visibility = entry.isIntersecting ? "hidden" : "visible";
  });
  observer.observe(footer);
}
