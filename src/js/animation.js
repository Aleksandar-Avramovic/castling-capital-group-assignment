const animContainer = document.getElementById("anim-container");
var animItem = bodymovin.loadAnimation({
  wrapper: animContainer,
  animType: "svg",
  loop: true,
  path: "animation.json",
});
