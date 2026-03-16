Promise.all([
  fetch("/components/header.html").then(r => r.text()),
  fetch("/components/navbar.html").then(r => r.text()),
  fetch("/components/badge.html").then(r => r.text()),
  fetch("/components/footer.html").then(r => r.text()),
  fetch("/components/kicker.html").then(r => r.text())
]).then(([headerHtml, navbarHtml, badgeHtml, footerHtml, kickerHtml]) => {
  document.getElementById("header").innerHTML = headerHtml;
  document.getElementById("navbar").innerHTML = navbarHtml;
  document.getElementById("badge").innerHTML = badgeHtml;
  document.getElementById("footer").innerHTML = footerHtml;
  document.querySelectorAll(".kicker").forEach(el => el.innerHTML = kickerHtml);

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

  const observer = new IntersectionObserver(([entry]) => {
    badge.style.visibility = entry.isIntersecting ? "hidden" : "visible";
  });

  observer.observe(footer);
});
