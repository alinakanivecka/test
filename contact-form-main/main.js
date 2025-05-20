let firstNameWrapper = document.getElementsByClassName("first-name-wrapper")[0];
let lastNameWrapper = document.getElementsByClassName("last-name-wrapper")[0];
let messageWrappper = document.getElementsByClassName("message-wrappper")[0];
let emailWrapper = document.getElementsByClassName("email-wrapper")[0];
let checkbox = document.getElementById("check");
let contactFormCheckboxWrapper = document.getElementsByClassName(
  "contact-form__checkbox-wrapper"
)[0];
let submitButton = document.getElementsByClassName("submit-btn")[0];
let queryTypeWrapper = document.getElementsByClassName("query-type")[0];
let successMessage = document.getElementsByClassName("success-message")[0];

firstNameWrapper
  .getElementsByTagName("input")[0]
  .addEventListener("input", () => {
    validatefirstName();
  });

lastNameWrapper
  .getElementsByTagName("input")[0]
  .addEventListener("input", () => {
    validateLastName();
  });

messageWrappper
  .getElementsByTagName("textarea")[0]
  .addEventListener("input", () => {
    validateMessage();
  });

emailWrapper.getElementsByTagName("input")[0].addEventListener("input", () => {
  validateEmail();
});

checkbox.addEventListener("change", () => {
  validateConsentCheckbox();
});

queryTypeWrapper.querySelectorAll('input[type="radio"]').forEach((element) => {
  element.addEventListener("change", () => {
    let error = queryTypeWrapper.getElementsByClassName("error")[0];
    if (element.checked) {
      error.textContent = "";
    }
  });
});

submitButton.addEventListener("click", () => {
  validateConsentCheckbox();
  validateQueryType();
  validatefirstName();
  validateLastName();
  validateEmail();
  validateMessage();

  if (!hasError()) {
    successMessage.classList.remove("hidden");
    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 5000);
    clearForm();
  }
});

function validateConsentCheckbox() {
  let error = contactFormCheckboxWrapper.getElementsByClassName("error")[0];
  if (!checkbox.checked) {
    error.textContent =
      "To submit this form, please consent to being contacted";
  } else {
    error.textContent = "";
  }
}

function validatefirstName() {
  let error = firstNameWrapper.getElementsByClassName("error")[0];
  let input = firstNameWrapper.getElementsByTagName("input")[0];

  if (input.value === "") {
    error.textContent = "This field is required";
    input.classList.add("invalid-input");
  } else {
    error.textContent = "";
    input.classList.remove("invalid-input");
  }
}

function validateLastName() {
  let error = lastNameWrapper.getElementsByClassName("error")[0];
  let input = lastNameWrapper.getElementsByTagName("input")[0];

  if (input.value === "") {
    error.textContent = "This field is required";
    input.classList.add("invalid-input");
  } else {
    error.textContent = "";
    input.classList.remove("invalid-input");
  }
}

function validateEmail() {
  let error = emailWrapper.getElementsByClassName("error")[0];
  let input = emailWrapper.getElementsByTagName("input")[0];

  if (input.value === "") {
    error.textContent = "This field is required";
    input.classList.add("invalid-input");
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value)) {
    input.classList.add("invalid-input");
    error.textContent = "Please enter a valid email address";
  } else {
    error.textContent = "";
    input.classList.remove("invalid-input");
  }
}

function validateMessage() {
  let error = messageWrappper.getElementsByClassName("error")[0];
  let input = messageWrappper.getElementsByTagName("textarea")[0];

  if (input.value === "") {
    error.textContent = "This field is required";
    input.classList.add("invalid-input");
  } else {
    error.textContent = "";
    input.classList.remove("invalid-input");
  }
}

function validateQueryType() {
  let radioButtons = queryTypeWrapper.querySelectorAll('input[type="radio"]');
  let error = queryTypeWrapper.getElementsByClassName("error")[0];
  let oneIsChecked = false;

  radioButtons.forEach((element) => {
    if (element.checked) {
      oneIsChecked = true;
    }
  });
  if (!oneIsChecked) {
    error.textContent = "Please select a query type";
  }
}

function hasError() {
  let hasError = false;
  let errors = document.querySelectorAll(".error");
  errors.forEach((element) => {
    if (element.textContent !== "") {
      hasError = true;
    }
  });

  return hasError;
}

function clearForm() {
  let inputs = document.querySelectorAll("input[type=text],textarea");
    inputs.forEach((element) => {
      element.value = "";
    });
    let checkableInputs = document.querySelectorAll("input[type=radio],input[type=checkbox]");
    checkableInputs.forEach((element) => {
      element.checked = false;
    });
}
