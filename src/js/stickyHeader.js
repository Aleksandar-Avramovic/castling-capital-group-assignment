window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const headerLogo = document.querySelector(".header__logo");
  header.classList.toggle("header--sticky", window.scrollY > 0);

  if (header.classList.contains("header--sticky")) {
    header.style.height = "56px";
    headerLogo.style.width = "80%";
  } else {
    header.style.height = "86px";
    headerLogo.style.width = "100%";
  }
});
