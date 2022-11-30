export default function initFormContanct() {
  const form = document.querySelector('[data-form="form"]');

  if (form) {
    form.addEventListener("submit", sendForm);

    function sentForm(response) {
      if (response.ok) {
        form.innerHTML =
          "<p class='sent-message'><span>Messange sent successfully</span>I will contact you soon</p>";
      } else {
        form.innerHTML =
          "<p class='erro-message'>Erro sending email, you can send directly for my email: <span>contact@gabrielmdev.com</span></p>";
      }
    }

    function sendForm(e) {
      e.preventDefault();
      const btn = document.querySelector('[data-form="btn"]');
      btn.disabled = true;
      btn.innerText = "Sending...";

      const data = new FormData(form);

      fetch("./send.php", {
        method: "POST",
        body: data,
      }).then(sentForm);
    }
  }
}
