const userInput = document.getElementById("userInput");
const countryCode = document.getElementById("countryCode");
const passwordGroup = document.getElementById("passwordGroup");
const loginBtn = document.getElementById("loginBtn");
const loginForm = document.getElementById("loginForm");

userInput.addEventListener("input", () => {
  const value = userInput.value.trim();
  const isPhone = /^[0-9]+$/.test(value);
  const isEmail = /\S+@\S+\.\S+/.test(value);

  if (isPhone && value.length >= 7) {
    // Phone login mode
    countryCode.style.display = "inline-block";
    passwordGroup.style.display = "block";
    loginBtn.style.display = "block";
  } else if (isEmail) {
    // Email login mode
    countryCode.style.display = "none";
    passwordGroup.style.display = "block";
    loginBtn.style.display = "block";
  } else {
    // Reset UI
    countryCode.style.display = "none";
    passwordGroup.style.display = "none";
    loginBtn.style.display = "none";
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = document.getElementById("password").value.trim();

  if (password.length > 3) {
    showPopup("🎉 Congratulations! Login Successful.");
    loginForm.reset();
    countryCode.style.display = "none";
    passwordGroup.style.display = "none";
    loginBtn.style.display = "none";
  } else {
    showPopup("⚠️ Please enter a valid password.", true);
  }
});

function showPopup(message, isError = false) {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.style.background = isError ? "#dc3545" : "#28a745";
  popup.textContent = message;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 3000);
}
