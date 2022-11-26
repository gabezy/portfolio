export default function initAnimatedScroll() {
  const sectionsScroll = document.querySelectorAll("[data-anime^='scroll']");
  const mobile = window.matchMedia("(max-width:800px)");
  const mode = "activate";

  if (sectionsScroll.length) {
    if (!mobile.matches) {
      sectionsScroll[0].classList.add(mode);
      sectionsScroll[1].classList.add(mode);
    }
    sectionsScroll[0].classList.add(mode);
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
