console.log("Hello!");

const colorsInputs = document.querySelectorAll('input[name="color"]');
colorsInputs.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  if (nameInput.value === "") {
    nameOutput.textContent = "Незнайомець";
  } else {
    nameOutput.textContent = event.target.value;
  }
});

const specificInput = document.querySelector("#validation-input");
specificInput.addEventListener("blur", (event) => {
  const requiredLength = Number(specificInput.dataset.length);
  const currentLength = event.target.value.length;

  if (requiredLength === currentLength) {
    specificInput.classList.remove("invalid");
    specificInput.classList.add("valid");
  } else {
    specificInput.classList.remove("valid");
    specificInput.classList.add("invalid");
  }
});

const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", (event) => {
  text.style.fontSize = event.target.value + "px";
});
