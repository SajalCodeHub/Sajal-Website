console.log("✅ hire.js loaded!");

// 🌫️ Floating Smoke Particles
function createParticles(count = 12) {
  const container = document.querySelector(".smoke-particles") || document.body;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.classList.add("particle");
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(p);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector(".smoke-particles")) {
    const layer = document.createElement("div");
    layer.className = "smoke-particles";
    document.querySelector(".magic-header")?.appendChild(layer);
  }
  createParticles();
});

// ✅ Toast Notification
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `custom-toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("visible"), 100);
  setTimeout(() => {
    toast.classList.remove("visible");
    toast.addEventListener("transitionend", () => toast.remove());
  }, 4000);
}

// ✉️ Hire Form Submission with Spinner + reCAPTCHA
const form = document.querySelector(".hire-form");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const specialization = form.elements["specialization"].value.trim() || "N/A";
  const project = form.elements["project"].value.trim();
  const collabType = form.elements["collabType"].value || "General";
  const recaptchaToken = grecaptcha.getResponse();

  const button = form.querySelector("button");
  const originalText = button.innerText;
  button.disabled = true;
  button.innerHTML = `<span class="spinner"></span> Sending...`;

  if (!recaptchaToken) {
    showToast("❌ Please complete the reCAPTCHA to verify you're human.", "error");
    button.disabled = false;
    button.innerText = originalText;
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("specialization", specialization);
  formData.append("project", project);
  formData.append("collabType", collabType);
  formData.append("g-recaptcha-response", recaptchaToken);

  try {
    const response = await fetch("sendmailer.php", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      showToast("✅ " + result.message, "success");
      form.reset();
      grecaptcha.reset();
    } else {
      showToast("❌ " + result.message, "error");
    }
  } catch (err) {
    console.error("Fetch Error:", err);
    showToast("❌ Network error. Please try again.", "error");
  }

  button.disabled = false;
  button.innerText = originalText;
});
