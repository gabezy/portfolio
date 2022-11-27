export default function initDarkMode() {}

const logo = document.querySelector('[data-theme="logo"]');
const github = document.querySelector('[data-theme="github"]');
const columns = document.querySelectorAll('[data-theme="column"]');
const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (logo && github && columns.length && darkMode) {
  logo.src = "/img/darkmode/logo-dark.svg";
  github.src = "/img/darkmode/github-dark.svg";
  columns.forEach((column) => {
    column.src = "/img/darkmode/column-dark.svg";
  });
}
