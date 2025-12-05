const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleLoginForm);

function handleLoginForm(event) {
  event.preventDefault();

  const emailField = loginForm.elements.email;
  const passwordField = loginForm.elements.password;

  const emailValue = emailField.value.trim();
  const passwordValue = passwordField.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  loginForm.reset();
}
