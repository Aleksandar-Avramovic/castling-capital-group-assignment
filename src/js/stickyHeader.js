const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header__logo");
const links = document.querySelectorAll(".header__nav ul li");

// window.addEventListener("load", function () {
//   if (
//     !header.classList.contains("header--sticky") ||
//     !window.innerWidth <= 768
//   ) {
//     startAnimations();
//   } else {
//     stopAnimations();
//   }
// });

window.addEventListener("scroll", function () {
  header.classList.toggle("header--sticky", window.scrollY > 0);

  // if (header.classList.contains("header--sticky") || window.innerWidth <= 768) {
  //   stopAnimations();
  //   header.style.height = "66px";
  //   headerLogo.style.width = "80%";
  // } else {
  //   header.style.height = "86px";
  //   header.style.transition = "0.3s";
  //   headerLogo.style.width = "100%";
  //   headerLogo.style.transition = "0.3s";
  // }
});

// function startAnimations() {
//   links.forEach((link, index) => {
//     link.style.animation = "fall 1s cubic-bezier(0.22, 0.61, 0.36, 1) forwards";
//     link.style.animationDelay = index * 0.2 + "s";
//   });

//   if (!window.innerWidth <= 768) {
//     headerLogo.style.animation = "zoomIn 1s ease-out forwards";
//   } else {
//     stopAnimations();
//   }
// }

// function stopAnimations() {
//   links.forEach((link) => {
//     link.style.animation = "none";
//     link.style.transform = "translateY(0)";
//     link.style.opacity = "1";
//   });
//   headerLogo.style.animation = "none";
//   headerLogo.style.transform = "scale(1)";
// }
