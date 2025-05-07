let billInput = document.querySelector(".bill-input input");
let peopleAmountInput = document.querySelector(".people-amount-input input");
let peopleAmountInputContainer = document.querySelector(".people-amount-input");
let billInputContainer = document.querySelector(".bill-input");
let tipButtons = document.querySelectorAll(".tip-btn");
let customTipInput = document.querySelector(".input-custom");
let tipPerPersonElement = document.querySelector(".tip-per-person");
let totalBillPerPersonElement = document.querySelector(
  ".total-bill-per-person"
);
let resetButton = document.querySelector('.reset-btn');
let billAmount = 0;
let peopleAmount = 0;
let tipPercentage = 0;

peopleAmountInput.addEventListener("input", (event) => {
  if (+peopleAmountInput.value <= 0) {
    peopleAmountInputContainer.classList.add("invalid");
  } else {
    peopleAmountInputContainer.classList.remove("invalid");
  }

  peopleAmount = +peopleAmountInput.value;
  calculateBills();
  enableResetButton();
});

billInput.addEventListener("input", (event) => {
  if (+billInput.value <= 0) {
    billInputContainer.classList.add("invalid");
  } else {
    billInputContainer.classList.remove("invalid");
  }

  billAmount = +billInput.value;
  calculateBills();
  enableResetButton();
});

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    deselectTipButtons();
    button.classList.add("active-btn");
    customTipInput.value = "";
    tipPercentage = +button.textContent.slice(0, -1);
    calculateBills();
    enableResetButton();
  });
  
});

customTipInput.addEventListener("input", () => {
  deselectTipButtons();
  tipPercentage = +customTipInput.value;
  calculateBills();
  enableResetButton();
});

resetButton.addEventListener('click', () => {
  billInput.value = 0;
  peopleAmountInput.value = 0;
  customTipInput.value = 0;
  billAmount = 0;
  peopleAmount = 0;
  tipPercentage = 0;
  deselectTipButtons();
  disableResetButton();
  calculateBills();
})

function enableResetButton() {
   resetButton.classList.remove('disabled-btn');
}

function disableResetButton() {
  resetButton.classList.add('disabled-btn');
}

function deselectTipButtons() {
  tipButtons.forEach((button) => {
    button.classList.remove("active-btn");
  });
}

function calculateBills() {
  let totalBillPerPerson = 0;
  let tipPerPerson = 0;

  if (billAmount !== 0 && peopleAmount !== 0) {
    let totalTip = (tipPercentage * billAmount) / 100;
    let totalAmount = billAmount + totalTip;
    totalBillPerPerson = totalAmount / peopleAmount;
    tipPerPerson = totalTip / peopleAmount;
  }

  totalBillPerPersonElement.textContent = "$" + totalBillPerPerson.toFixed(2);
  tipPerPersonElement.textContent = "$" + tipPerPerson.toFixed(2);
}

