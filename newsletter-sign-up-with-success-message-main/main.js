let input = document.getElementById("email");
let error = document.getElementsByClassName("error")[0];
let submitButton = document.getElementsByClassName("submit-button")[0];
let cardFormContent = document.getElementsByClassName("card-form_content")[0];
let successMessage = document.getElementsByClassName("success-message")[0];
let confirmationEmail = document.getElementsByClassName('confirmation-email')[0];
let dismissButton = document.getElementsByClassName('dismiss-button')[0];

input.addEventListener("input", (event) => {
  if (event.target.value === "") {
    error.textContent = "Email required";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(event.target.value)) {
    input.classList.add("invalid-input");
    error.textContent = "Valid email required";
  } else {
    error.textContent = "";
    input.classList.remove("invalid-input");
  }
});

submitButton.addEventListener("click", (event) => {
  if (!input.classList.contains("invalid-input") && input.value) {
    cardFormContent.classList.add("page-hidden");
    successMessage.classList.remove("page-hidden");
    confirmationEmail.textContent = input.value;
  } else {
    input.dispatchEvent(new Event('input'))
  }

  event.preventDefault();
});

dismissButton.addEventListener('click', () => {
  successMessage.classList.add("page-hidden");
  cardFormContent.classList.remove("page-hidden");
});


