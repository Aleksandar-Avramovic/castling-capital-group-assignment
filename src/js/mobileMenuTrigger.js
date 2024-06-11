const mobileMenu = document.querySelector(".mobile-menu--toggle");
const navbar = document.querySelector(".mobile-menu");
const sidebar = document.getElementById("header-nav");
const headerLinks = document.querySelectorAll(".header__nav ul li");

// document.addEventListener("click", function (event) {
//   if (!sidebar.contains(event.target)) {
//     closeSidebar();
//     enableScroll();
//   }
// });

mobileMenu.addEventListener("click", function () {
  navbar.classList.toggle("mobile-menu--open");
  const isOpen = navbar.classList.contains("mobile-menu--open");

  if (isOpen) {
    openSidebar();
    disableScroll();
    headerLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeSidebar();
        enableScroll();
        navbar.classList.remove("mobile-menu--open");
      });
    });
  } else {
    closeSidebar();
    enableScroll();
  }
});

function openSidebar() {
  sidebar.style.display = "flex";
  mobileMenu.classList.add("active");
  stopAnimations();
}

function closeSidebar() {
  sidebar.style.display = "none";
  mobileMenu.classList.remove("active");
}

function disableScroll() {
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto";
}

function stopAnimations() {
  headerLinks.forEach((link) => {
    link.style.animation = "none";
    link.style.transform = "translateY(0)";
    link.style.opacity = "1";
  });
}
