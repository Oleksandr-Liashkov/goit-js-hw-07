const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput() {
  const trimmedInput = input.value.trim();
  if (trimmedInput === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = trimmedInput;
  }
}
