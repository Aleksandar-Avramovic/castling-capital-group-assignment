document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (let link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 86,
        behavior: "smooth",
      });
    });
  }
});
