import initMobileNav from "./modules/mobileMenu.js";
import initAnimatedScroll from "./modules/animateScroll.js";
import initTypewriter from "./modules/typewriter.js";
import initFormContanct from "./modules/form.js";

initMobileNav();
initTypewriter();
initAnimatedScroll();
initFormContanct();

// // Dark Mode

// const icon = document.getElementById("icon");
// const github = document.getElementById("github");
// const mail = document.getElementById("mail");
// const detail = document.getElementById("detail");
// const column = document.getElementById("column");
// const column2 = document.getElementById("column2");

// icon.onclick = function () {
//   document.body.classList.toggle("dark-mode");
//   if (document.body.classList.contains("dark-mode")) {
//     icon.src = "/img/darkmode/logo-dark.svg";
//     github.src = "/img/darkmode/github-dark.svg";
//     mail.src = "/img/darkmode/mail-dark.svg";
//     detail.src = "/img/darkmode/detail-dark.svg";
//     column.src = "/img/darkmode/column-dark.svg";
//     column2.src = "/img/darkmode/column-dark.svg";
//   } else {
//     icon.src = "/img/logo.svg";
//     github.src = "/img/github.svg";
//     mail.src = "/img/mail.svg";
//     detail.src = "/img/detail.svg";
//     column.src = "/img/column.svg";
//     column2.src = "/img/column.svg";
//   }
// };
