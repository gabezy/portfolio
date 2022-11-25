export default function initAnimatedScroll() {
  const sectionsScroll = document.querySelectorAll("[data-anime^='scroll']");
  const mode = "activate";

  if (sectionsScroll.length) {
    sectionsScroll[0].classList.add(mode);
    sectionsScroll[1].classList.add(mode);
    function animatedScroll() {
      sectionsScroll.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 500) {
          section.classList.add(mode);
        }
      });
    }

    window.addEventListener("scroll", animatedScroll);
  }
}
