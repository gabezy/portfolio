export default function initFormContanct() {
  const form = document.querySelector('[data-form="form"]');

  if (form) {
    form.addEventListener("submit", sendForm);

    function sentForm(response) {
      if (response.ok) {
        form.innerHTML =
          "<p style='padding-block: 1rem; grid-column: 1/-1; justify-self: center; font-size: 1.4rem'><span style='color: var(--clr-typewriter); display: block; margin-bottom: 0.5rem''>Messange sent successfully</span>I will contact you soon</p>";
      } else {
        form.innerHTML =
          "<p style='padding-block: 1rem; grid-column: 1/-1; justify-self: center; margin-bottom: 0.5rem'>Erro sending email, you can send directly for my email:<span style='color: var; display: block;(--clr-typewriter);'>contact@gabrielmdev.com</span></p>";
      }
    }

    function sendForm(e) {
      e.preventDefault();
      const btn = document.querySelector('[data-form="btn"]');
      btn.disabled = true;
      btn.innerText = "Sending...";

      const data = new FormData(form);

      fetch("../../send.php", {
        method: "POST",
        body: data,
      }).then(sentForm);
    }
  }
}
