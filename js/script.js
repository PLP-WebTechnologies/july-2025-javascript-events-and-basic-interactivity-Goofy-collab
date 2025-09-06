// Part 1: Event Handling

document.getElementById("messageBtn").addEventListener("click", function () {
  document.getElementById("message").textContent = "You clicked the button!";
});


// Part 2: Interactive Elements

// Light/Dark Mode Toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// FAQ Toggle
const faqToggle = document.querySelector(".faq-toggle");
const faqAnswer = document.querySelector(".faq-answer");
faqToggle.addEventListener("click", () => {
  faqAnswer.classList.toggle("hidden");
});

// Part 3: Form Validation

const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop form from submitting by default

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error spans
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formSuccess = document.getElementById("formSuccess");

  let isValid = true;

  // Name Validation
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation (regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password Validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // If all valid
  if (isValid) {
    formSuccess.textContent = "Form submitted successfully!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});
