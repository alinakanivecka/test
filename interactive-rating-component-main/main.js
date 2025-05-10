let ratingButton = document.querySelectorAll(".rating-button");
let submitButton = document.getElementsByClassName("submit-btn")[0];
let ratingCard = document.getElementsByClassName("rating-card")[0];
let selectedCard = document.getElementsByClassName("selected-card")[0];
let selectedRatingElement = document.getElementsByClassName("selected-rating__value")[0];

ratingButton.forEach((button) => {
  button.addEventListener("click", () => {
    deselectRatingButtons();
    button.classList.add("selected");
    selectedRatingElement.textContent = button.textContent;
    submitButton.disabled = false;
  });
});

submitButton.addEventListener("click", () => {
  ratingCard.classList.add("disable-card");
  selectedCard.classList.remove("disable-card");
});

function deselectRatingButtons() {
  ratingButton.forEach((button) => {
    button.classList.remove("selected");
  });
}
