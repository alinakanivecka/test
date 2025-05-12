let questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  let questionTextWrapper = question.querySelector(".question-text__wrapper");
  questionTextWrapper.addEventListener("click", () => {
    if (question.classList.contains("question-text-opened")) {
      question.classList.remove("question-text-opened");
      question.querySelector(".icon-plus").src = "assets/images/icon-plus.svg";
    } else {
      question.classList.add("question-text-opened");
      question.querySelector(".icon-plus").src = "assets/images/icon-minus.svg";
    }
  });
});
