document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  const subtitle = document.getElementById("form-subtitle");

  loginBtn.addEventListener("click", () => {
    subtitle.textContent = "Welcome Back!";
  });

  signupBtn.addEventListener("click", () => {
    subtitle.textContent = "Create an Account";
  });
});