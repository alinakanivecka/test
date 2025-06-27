const tabImage = document.querySelector(".feature__image");
const tabTitle = document.querySelector(".simple-bookmarking h2");
const tabDescription = document.querySelector(".simple-bookmarking p");
const tabElements = document.querySelectorAll(".feature__tab");
const questions = document.querySelectorAll(".question");
const input = document.getElementById("email");
const inputWrapper = document.getElementsByClassName("input-wrapper")[0];
const iconHamburger = document.getElementsByClassName("icon-hamburger")[0];
const iconClose = document.getElementsByClassName("icon-close")[0];
const overlay = document.getElementsByClassName('overlay')[0];

const tabs = [
  {
    image: "images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    description: `Organize your bookmarks however you like. Our simple drag-and-drop interface
                  gives you complete control over how you manage your favourite sites.`,
  },
  {
    image: "images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    description: `Our powerful search feature will help you find saved sites in no time at all. 
                  No need to trawl through all of your bookmarks.`,
  },
  {
    image: "images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    description: ` Easily share your bookmarks and collections with others. Create a shareable 
                   link that you can send at the click of a button.`,
  },
];

tabElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    const currentTab = tabs[index];
    tabTitle.textContent = currentTab.title;
    tabDescription.textContent = currentTab.description;
    tabImage.src = currentTab.image;
    removeTabActiveStates();
    element.classList.add("active-tab");
  });
});

questions.forEach((question) => {
  const questionTextWrapper = question.querySelector(".question-text__wrapper");
  questionTextWrapper.addEventListener("click", () => {
    question.classList.toggle("question-text-opened");
  });
});

input.addEventListener("input", (event) => {
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(event.target.value)) {
    inputWrapper.classList.add("invalid-input");
  } else {
    inputWrapper.classList.remove("invalid-input");
  }
});

iconHamburger.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});

iconClose.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

function removeTabActiveStates() {
  tabElements.forEach((element) => {
    element.classList.remove("active-tab");
  });
}
