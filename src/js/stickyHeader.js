window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  console.log(header);
  header.classList.toggle("header--sticky", window.scrollY > 0);
});
