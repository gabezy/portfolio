import outsideClick from "./outsideClick.js";

export default function initMobileNav() {
  const menuBtn = document.querySelector("[data-mobile='btn']");
  const mobileMenu = document.querySelector("[data-mobile='menu']");
  const mobileNav = document.querySelector("[data-mobile='nav']");
  const mobileLinks = document.querySelectorAll(".mobile-menu a[href^='#']");
  const mode = "activate";
  const events = ["click", "touchstart"];
  const body = document.body;

  if (mobileMenu) {
    events.forEach((userEvents) => {
      menuBtn.addEventListener(userEvents, openMenu);
    });

    function openMenu(e) {
      e.preventDefault();
      this.classList.toggle(mode);
      mobileMenu.classList.toggle(mode);
      body.classList.toggle(mode);
      const htmlEvent = outsideClick(mobileNav, events, () => {
        this.classList.remove(mode);
        mobileMenu.classList.remove(mode);
        body.classList.remove(mode);
      });

      toLink.htmlEvent = htmlEvent;
    }
    const toLink = {
      handleEvent() {
        const html = document.documentElement;
        menuBtn.classList.remove(mode);
        mobileMenu.classList.remove(mode);
        body.classList.remove(mode);
        html.removeAttribute("data-outiside");
        events.forEach((userEvents) => {
          html.removeEventListener(userEvents, this.htmlEvent);
        });
      },
    };

    events.forEach((userEvents) => {
      mobileLinks.forEach((links) => {
        links.addEventListener(userEvents, toLink);
      });
    });
  }
}
