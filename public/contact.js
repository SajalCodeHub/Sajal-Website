console.log("📬 contact.js loaded!");

const form = document.querySelector("#contact-form");
const messageBox = document.getElementById("form-message");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const message = form.elements["message"].value.trim();
  const recaptchaToken = grecaptcha.getResponse();

  const button = form.querySelector("button");
  const originalText = button.innerText;
  button.disabled = true;
  button.innerHTML = `<span class="spinner"></span> Sending...`;

  // Clear any previous inline message
  messageBox.textContent = "";

  if (!recaptchaToken) {
    messageBox.textContent = "⚠️ Please complete the reCAPTCHA.";
    messageBox.style.color = "#ef4444";
    button.disabled = false;
    button.innerText = originalText;
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);
  formData.append("g-recaptcha-response", recaptchaToken);

  try {
    const response = await fetch("sendmailer.php", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      messageBox.textContent = "📨 Your message has been sent to Sajal. He’ll get back to you soon!";
      messageBox.style.color = "#10b981";
      form.reset();
      grecaptcha.reset();
    } else {
      messageBox.textContent = "❌ " + result.message;
      messageBox.style.color = "#ef4444";
    }
  } catch (err) {
    console.error("Fetch Error:", err);
    messageBox.textContent = "❌ Network error. Please try again.";
    messageBox.style.color = "#ef4444";
  }

  button.disabled = false;
  button.innerText = originalText;
});
