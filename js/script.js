// Typewriter Effect
// const outputDiv = document.getElementById("typed-content");
// const txt =
//   "I am a front-end developer who knows about UX Design and back-end. <s>HTML<s>, <s>CSS<s> & <s>JavaScript<s> are my best-friends<s>Located in brasília, Brazil";
// const splitted = txt.split("<s>");

// splitted.forEach(function () {
//   const s = document.createElement("span");
//   outputDiv.appendChild(s);
// });

// const spans = outputDiv.querySelectorAll("span");

// let i = 0;
// let currentSpan = 0;

// const intervalId = setInterval(function () {
//   spans[currentSpan].innerHTML += splitted[currentSpan][i];
//   i++;

//   if (i === splitted[currentSpan].length) {
//     currentSpan++, (i = 0);
//     if (currentSpan === splitted.length) {
//       clearInterval(intervalId);
//     }
//   }
// }, 40);

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

// Mobile menu
const mobileNav = document.querySelector(".js-mobile");

if (mobileNav) {
  const hamburgerMenu = document.querySelector("i");

  function showMobileMenu() {
    const mode = "activate";
    let hamburgerIcon = hamburgerMenu.className.includes("bars");
    if (hamburgerIcon) hamburgerMenu.className = "fa-solid fa-xmark";
    else hamburgerMenu.className = "fa-solid fa-bars";

    mobileNav.classList.toggle(mode);
    document.body.classList.toggle(mode);
  }

  hamburgerMenu.addEventListener("click", showMobileMenu);
}
