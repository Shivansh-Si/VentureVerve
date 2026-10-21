// Demo registration-interest form.
// It only checks the fields and shows a message. Nothing is sent or saved.

const form = document.getElementById("interest-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  // stop the browser from reloading the page
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  let isValid = true;

  // clear the old messages first
  nameError.textContent = "";
  emailError.textContent = "";
  formMessage.textContent = "";
  formMessage.classList.remove("success");
  nameInput.classList.remove("invalid");
  emailInput.classList.remove("invalid");

  if (name === "") {
    nameError.textContent = "Please enter your name.";
    nameInput.classList.add("invalid");
    isValid = false;
  }

  // very simple email check: something@something.something
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email, like name@example.com.";
    emailInput.classList.add("invalid");
    isValid = false;
  }

  if (isValid) {
    formMessage.textContent =
      "Thanks, " + name + ". This is only a demo, so nothing was sent or saved.";
    formMessage.classList.add("success");
    form.reset();
  }
});
