const iconMenu = document.getElementsByClassName("icon-menu")[0];
const iconClose = document.getElementsByClassName("icon-close")[0];
const prevPageButtons = document.querySelectorAll(".icon-left");
const nextPageButtons = document.querySelectorAll(".icon-right");
const pageTitle = document.querySelector(".text-content__discover h1");
const pageDescription = document.querySelector(".text-content__discover p");
const desktopPageImage = document.querySelector(".desktop-image-hero-1");
const mobilePageImage = document.querySelector(".mobile-image-hero-1");
const overlayNavigation =
  document.getElementsByClassName("overlay-navigation")[0];
let pageIndex = 0;
const pages = [
  {
    title: "Discover innovative ways to decorate",
    description: `We provide unmatched quality, comfort, and style for property owners across the country.
                  Our experts combine form and function in bringing your vision to life. Create a room in your
                  own style with our collection and make your property a reflection of you and what you love.`,
    desktopImage: "images/desktop-image-hero-1.jpg",
    mobileImage: "images/mobile-image-hero-1.jpg",
  },
  {
    title: "We are available all across the globe",
    description: `With stores all over the world, it's easy for you to find furniture for your home or place of business.
                  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
                  store locator. Any questions? Don't hesitate to contact us today.`,
    desktopImage: "images/desktop-image-hero-2.jpg",
    mobileImage: "images/mobile-image-hero-2.jpg",
  },
  {
    title: "Manufactured with the best materials",
    description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
                  to ensure that every product is made as perfect and as consistent as possible. With three decades of
                  experience in this industry, we understand what customers want for their home and office.`,
    desktopImage: "images/desktop-image-hero-3.jpg",
    mobileImage: "images/mobile-image-hero-3.jpg",
  },
];

prevPageButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (pageIndex === 0) {
      pageIndex = pages.length - 1;
    } else {
      pageIndex--;
    }

    upadatePageContent();
  });
});

nextPageButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (pageIndex === pages.length - 1) {
      pageIndex = 0;
    } else {
      pageIndex++;
    }

    upadatePageContent();
  });
});

iconMenu.addEventListener("click", () => {
  overlayNavigation.classList.remove("hidden");
});

[iconClose, overlayNavigation].forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element === event.target) {
      overlayNavigation.classList.add("hidden");
    }
  });
});

function upadatePageContent() {
  const currentPage = pages[pageIndex];
  pageTitle.textContent = currentPage.title;
  pageDescription.textContent = currentPage.description;
  desktopPageImage.src = currentPage.desktopImage;
  mobilePageImage.src = currentPage.mobileImage;
}
