const body = document.body,
  signInForm = document.querySelector("#sign-in"),
  signInBtn = document.querySelector(".sign-in"),
  noAccountBtn = document.querySelector("#reg-btn"),
  passwordResetBtn = document.querySelector(".password-reset"),
  regForm = document.querySelector("#reg-form"),
  createAccountBtn = document.querySelector(".account"),
  googleSignUpBtn = document.querySelector(".google"),
  backBtn = document.querySelector("#back-btn"),
  backHomeBtn = document.querySelector("#back-home"),
  courseContainer = document.querySelector("#course-container"),
  offer = document.querySelector("#offer");
const myForm = document.getElementById("my-form");
const offerList = document.querySelector(".offer-list");

// code to display registration form
noAccountBtn.addEventListener("click", () => {
  signInForm.classList.replace("flex", "hidden");
  regForm.classList.replace("hidden", "flex");
  backBtn.classList.remove("hidden");
  backHomeBtn.classList.remove("hidden");
});
// code to go back to sign-in form
backBtn.addEventListener("click", () => {
  regForm.classList.replace("flex", "hidden");
  signInForm.classList.replace("hidden", "flex");
  backBtn.classList.add("hidden");
});
backHomeBtn.addEventListener("click", () => {});

// form validation
const formEl = document.getElementById("my-form");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

function login(e) {
  e.preventDefault();

  const email = emailEl.value;
  const password = passwordEl.value;

  if (!email || !email.includes("@")) {
    alert("Please enter your email");
    return;
  }
  if (!password) {
    alert("Please enter your password");
    return;
  }

  console.log({ email, password });
}

formEl.addEventListener("submit", (e) => login(e));
