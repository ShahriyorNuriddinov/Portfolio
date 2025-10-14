const indicator = document.querySelector(".nav-indicator");
const items = document.querySelectorAll(".nav-item");

function handleIndicator(el) {
  items.forEach((item) => {
    item.classList.remove("is-active");
    item.removeAttribute("style");
  });

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute("active-color");

  el.classList.add("is-active");
  el.style.color = el.getAttribute("active-color");
}

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    handleIndicator(e.target);
  });
  item.classList.contains("is-active") && handleIndicator(item);
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const overlay = document.getElementById("overlay");
  const mobileMenu = document.querySelector(".mobile-menu");
  function updateMenuState() {
    if (menuToggle.checked) {
      overlay.classList.remove("hidden");
      mobileMenu.classList.remove("translate-x-full");
      document.body.style.overflow = "hidden";
    } else {
      overlay.classList.add("hidden");
      mobileMenu.classList.add("translate-x-full");
      document.body.style.overflow = "";
    }
  }
  menuToggle.addEventListener("change", updateMenuState);
  overlay.addEventListener("click", function () {
    menuToggle.checked = false;
    updateMenuState();
  });
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.checked = false;
      updateMenuState();
    });
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuToggle.checked) {
      menuToggle.checked = false;
      updateMenuState();
    }
  });
});