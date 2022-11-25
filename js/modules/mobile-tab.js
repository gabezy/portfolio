export default function initMobileNav() {
  const mobileNav = document.querySelector(".js-mobile");
  const mode = "activate";

  if (mobileNav) {
    const hamburgerMenu = document.querySelector("i");
    const mobileInternalLinks = document.querySelectorAll(
      ".mobile-menu a[href^='#']"
    );
    function showMobileMenu() {
      let hamburgerIcon = hamburgerMenu.className.includes("bars");
      if (hamburgerIcon) hamburgerMenu.className = "fa-solid fa-xmark";
      else hamburgerMenu.className = "fa-solid fa-bars";

      mobileNav.classList.toggle(mode);
      document.body.classList.toggle(mode);
    }

    function hiddenMobileNav() {
      mobileNav.classList.remove(mode);
      document.body.classList.remove(mode);
      hamburgerMenu.className = "fa-solid fa-bars";
    }

    hamburgerMenu.addEventListener("click", showMobileMenu);
    mobileInternalLinks.forEach((link) => {
      link.addEventListener("click", hiddenMobileNav);
    });
  }
}
