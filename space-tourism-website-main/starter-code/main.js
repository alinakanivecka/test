async function main() {
  const result = await fetch("data.json");
  const data = await result.json();
  const bodyElement = document.querySelector("body");
  const iconClose = document.querySelector(".icon-close");
  const iconHamburger = document.querySelector(".icon-hamburger");
  const menuOverlay = document.querySelector(".menu-overlay");
  const linkPage = document.querySelectorAll(".link");
  const exploreButton = document.querySelector(".explore-button");

  const pages = [
    {
      pageLinkSelector: ".home-page-link",
      pageBlockSelector: ".home-page",
      pageBackgroundImageDesktop: "assets/home/background-home-desktop.jpg",
      pageBackgroundImageTablet: "assets/home/background-home-tablet.jpg",
      pageBackgroundImageMobile: "assets/home/background-home-mobile.jpg",
    },
    {
      pageLinkSelector: ".destination-page-link",
      pageBlockSelector: ".destination-page",
      pageBackgroundImageDesktop:
        "assets/destination/background-destination-desktop.jpg",
      pageBackgroundImageTablet:
        "assets/destination/background-destination-tablet.jpg",
      pageBackgroundImageMobile:
        "assets/destination/background-destination-mobile.jpg",
    },
    {
      pageLinkSelector: ".crew-page-link",
      pageBlockSelector: ".crew-page",
      pageBackgroundImageDesktop: "assets/crew/background-crew-desktop.jpg",
      pageBackgroundImageTablet: "assets/crew/background-crew-tablet.jpg",
      pageBackgroundImageMobile: "assets/crew/background-crew-mobile.jpg",
    },
    {
      pageLinkSelector: ".technology-page-link",
      pageBlockSelector: ".technology-page",
      pageBackgroundImageDesktop:
        "assets/technology/background-technology-desktop.jpg",
      pageBackgroundImageTablet:
        "assets/technology/background-technology-tablet.jpg",
      pageBackgroundImageMobile:
        "assets/technology/background-technology-mobile.jpg",
    },
  ];

  iconHamburger.addEventListener("click", () => {
    menuOverlay.classList.remove("hidden");
  });

  [iconClose, ...linkPage].forEach((element) => {
    element.addEventListener("click", () => {
      menuOverlay.classList.add("hidden");
    });
  });

  pages.forEach((page) => {
    document.querySelectorAll(page.pageLinkSelector).forEach((element) => {
      element.addEventListener("click", () => {
        changePage(page);
      });
    });
  });

  exploreButton.addEventListener("click", () => {
    changePage(pages[1]);
  });

  document
    .querySelectorAll(".destination-page__tabs li")
    .forEach((tab, index) => {
      tab.addEventListener("click", () => {
        const selectedTabConfig = data.destinations[index];
        document.querySelector(".tab-content__title").textContent =
          selectedTabConfig.name;
        document.querySelector(".tab-content__description").textContent =
          selectedTabConfig.description;
        document.querySelector(".destination-image").src =
          selectedTabConfig.images.png;
        document.querySelector(".statistic-item__distance").textContent =
          selectedTabConfig.distance;
        document.querySelector(".statistic-item__period").textContent =
          selectedTabConfig.travel;

        setActivePagination(".destination-page__tabs li", tab);
      });
    });

  document
    .querySelectorAll(".crew-page__paginations button")
    .forEach((pagination, index) => {
      pagination.addEventListener("click", () => {
        const selectedPaginationConfig = data.crew[index];
        document.querySelector(".crew-page-name").textContent =
          selectedPaginationConfig.name;
        document.querySelector(".crew-page-rank").textContent =
          selectedPaginationConfig.role;
        document.querySelector(".crew-page__bio").textContent =
          selectedPaginationConfig.bio;
        document.querySelector(".crew-page__image").src =
          selectedPaginationConfig.images.png;

        setActivePagination(".crew-page__paginations button", pagination);
      });
    });

  document
    .querySelectorAll(".technology-page__paginations button")
    .forEach((pagination, index) => {
      pagination.addEventListener("click", () => {
        const selectedPaginationConfig = data.technology[index];
        document.querySelector(".technology-page-name").textContent =
          selectedPaginationConfig.name;
        document.querySelector(".technology-page__description").textContent =
          selectedPaginationConfig.description;
        document.querySelector(".technology-page__image-desktop").src =
          selectedPaginationConfig.images.portrait;
        document.querySelector(".technology-page__image-mobile").src =
          selectedPaginationConfig.images.landscape;

        setActivePagination(".technology-page__paginations button", pagination);
      });
    });

  function changePage(page) {
    document.querySelector(".home-page").classList.add("hidden");
    document.querySelector(".destination-page").classList.add("hidden");
    document.querySelector(".crew-page").classList.add("hidden");
    document.querySelector(".technology-page").classList.add("hidden");
    document.querySelector(page.pageBlockSelector).classList.remove("hidden");

    document.querySelectorAll(".home-page-link").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelectorAll(".destination-page-link").forEach((element) => {
      element.classList.remove("active");
    });

    document.querySelectorAll(".crew-page-link").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelectorAll(".technology-page-link").forEach((element) => {
      element.classList.remove("active");
    });

    document.querySelectorAll(page.pageLinkSelector).forEach((element) => {
      element.classList.add("active");
    });

    bodyElement.style.setProperty(
      "--desktop-bg-image-url",
      `url(${page.pageBackgroundImageDesktop})`
    );
    bodyElement.style.setProperty(
      "--tablet-bg-image-url",
      `url(${page.pageBackgroundImageTablet})`
    );
    bodyElement.style.setProperty(
      "--mobile-bg-image-url",
      `url(${page.pageBackgroundImageMobile})`
    );
  }

  function setActivePagination(
    navigationButtonSelector,
    selectedNavigationButton
  ) {
    document
      .querySelectorAll(navigationButtonSelector)
      .forEach((pagination) => {
        pagination.classList.remove("active");
      });

    selectedNavigationButton.classList.add("active");
  }
}

main();
