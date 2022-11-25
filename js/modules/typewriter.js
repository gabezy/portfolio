export default function initTypewriter() {
  const outputDiv = document.querySelector("[data-typewriter]");
  if (outputDiv) {
    const text =
      "I am a front-end developer who knows about UX Design and back-end. <s>HTML<s>, <s>CSS<s> & <s>JavaScript<s> are my <s>best-friends<s>Located in brasília, Brazil";
    const splittedText = text.split("<s>");
    console.log(splittedText);

    splittedText.forEach(() => {
      const span = document.createElement("span");
      outputDiv.appendChild(span);
    });

    const spanList = document.querySelectorAll("[data-typewriter] span");

    let i = 0;
    let counter = 0;

    const typewriterInterval = setInterval(() => {
      const currentSpan = spanList[counter];
      currentSpan.innerHTML += splittedText[counter][i];
      if (counter % 2 != 0) {
        currentSpan.classList.add("detail");
      }
      i++;

      if (i === splittedText[counter].length) {
        counter++, (i = 0);
      }
      if (counter === spanList.length) {
        clearInterval(typewriterInterval);
      }
    }, 40);
  }
}
