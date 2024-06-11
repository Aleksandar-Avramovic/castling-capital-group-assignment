const animContainer = document.getElementById("anim-container");
var animItem = bodymovin.loadAnimation({
  wrapper: animContainer,
  animType: "svg",
  loop: false,
  path: "./src/js/animation.json",
});
