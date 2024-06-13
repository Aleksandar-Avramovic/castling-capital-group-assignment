document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".about-us"); // Add more sections as needed

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (window.innerWidth >= 600) {
          const animatedBlock = entry.target.querySelector(".animate-about");
          if (entry.isIntersecting && animatedBlock) {
            animatedBlock.classList.add("animate");

            // Remove the animation class after it completes to reset for the next time
            setTimeout(() => {
              animatedBlock.classList.remove("animate");
            }, 2000); // Match this timeout with the duration of your animation
          }
        }
      });
    },
    {
      threshold: 0.5, // Adjust this value based on when you want the animation to trigger
    }
  );

  sections.forEach((section) => {
    observer.observe(section);

    // Trigger animation on load if the section is already in view
    const rect = section.getBoundingClientRect();
    const isInViewport =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      const animatedBlock = entry.target.querySelector(".animate-about");
      if (animatedBlock) {
        animatedBlock.classList.add("animate");

        // Remove the animation class after it completes to reset for the next time
        setTimeout(() => {
          animatedBlock.classList.remove("animate");
        }, 2000); // Match this timeout with the duration of your animation
      }
    }
  });
});
