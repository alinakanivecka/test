let imagePreviews = Array.from(
  document.querySelectorAll(".image-cards .image-preview")
);
let overlayImagePreviews = Array.from(
  document.querySelectorAll(".image-cards-overlay .image-preview")
);
let bigImagePreviews = document.querySelectorAll(".image-preview-big");
let imageCardsOverlay = document.querySelector(".image-cards-overlay");
let iconClose = document.querySelector(".icon-close");
let iconNext = document.querySelector(".icon-next");
let iconNextMobile = document.querySelector('.icon-next-mobile'); 
let iconPrevious = document.querySelector(".icon-previous");
let iconPreviousMobile = document.querySelector('.icon-previous-mobile');
let iconPlus = document.querySelector(".icon-plus");
let headerIconCart = document.querySelector(".header__icon-cart");
let cartPopup = document.querySelector(".cart-popup");
let iconMinus = document.querySelector(".icon-minus");
let selectedAmount = document.querySelector(".amount");
let addToCartButton = document.querySelector('.add-to-cart__button');
let cartStatusEmpty = document.querySelector('.cart-status-empty');
let cartStatusFilled = document.querySelector('.cart-status-filled');
let cartItemsAmount = document.querySelector('.cart-items-amount');
let cartTotalPrice = document.querySelector('.cart-total-price');
let iconDelete = document.querySelector('.icon-delete');
let cartBadge = document.querySelector('.cart-badge');
let iconMenu = document.querySelector('.icon-menu');
let menuOverlay = document.querySelector('.menu-overlay');
let iconCloseMobile = document.querySelector('.icon-close-mobile');
let selectedIndex = 0;

addEventListenersForImagePreviews(imagePreviews);
addEventListenersForImagePreviews(overlayImagePreviews);

[imageCardsOverlay, iconClose].forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target === element) {
      imageCardsOverlay.classList.add("hidden");
    }
  });
});

bigImagePreviews[0].addEventListener("click", () => {
  imageCardsOverlay.classList.remove("hidden");
});

[iconNext, iconNextMobile].forEach((element) => {
  element.addEventListener("click", () => {
  if (selectedIndex === overlayImagePreviews.length - 1) {
    selectedIndex = 0;
  } else {
    selectedIndex++;
  }
  changeSelectedImage(selectedIndex);
});
});


[iconPrevious, iconPreviousMobile].forEach((element) => {
  element.addEventListener("click", () => {
  if (selectedIndex === 0) {
    selectedIndex = overlayImagePreviews.length - 1;
  } else {
    selectedIndex--;
  }
  changeSelectedImage(selectedIndex);
});
});


iconPlus.addEventListener("click", () => {
  selectedAmount.textContent = +selectedAmount.textContent + 1;
});

iconMinus.addEventListener("click", () => {
  if (+selectedAmount.textContent > 1) {
    selectedAmount.textContent = +selectedAmount.textContent - 1;
  }
});

headerIconCart.addEventListener("click", () => {
  cartPopup.classList.remove("hidden");
});

document.addEventListener("click", (event) => {
  if (!cartPopup.contains(event.target) && event.target !== headerIconCart) {
    cartPopup.classList.add("hidden");
  }
});

addToCartButton.addEventListener('click', () => {
  cartStatusFilled.classList.remove('hidden');
  cartStatusEmpty.classList.add('hidden');
  cartBadge.classList.remove('hidden');
  let newAmount = +cartItemsAmount.textContent + +selectedAmount.textContent;
  cartItemsAmount.textContent = newAmount;
  cartTotalPrice.textContent =  '$' + (125 * cartItemsAmount.textContent).toFixed(2);
  cartBadge.textContent = newAmount;
});

iconDelete.addEventListener('click', () => {
  cartStatusFilled.classList.add('hidden');
  cartStatusEmpty.classList.remove('hidden');
  cartBadge.classList.add('hidden');
});

iconMenu.addEventListener('click', () => {
  menuOverlay.classList.remove('hidden');
});

[iconCloseMobile, menuOverlay].forEach(element => {
  element.addEventListener('click', (event) => {
    if(event.target === element) {
      menuOverlay.classList.add('hidden');
    }
  })
})

function resetActivePreview() {
  [...imagePreviews, ...overlayImagePreviews].forEach((element) => {
    element.classList.remove("image-preview-active");
  });
}

function updateBigPreviewImageSrc(src) {
  bigImagePreviews.forEach((element) => {
    element.src = src;
  });
}

function addEventListenersForImagePreviews(imagePreviewsElements) {
  imagePreviewsElements.forEach((element) => {
    element.addEventListener("click", () => {
      selectedIndex = imagePreviewsElements.indexOf(element);
      changeSelectedImage(selectedIndex);
    });
  });
}

function changeSelectedImage(selectedIndex) {
  resetActivePreview();
  imagePreviews[selectedIndex].classList.add("image-preview-active");
  overlayImagePreviews[selectedIndex].classList.add("image-preview-active");
  updateBigPreviewImageSrc(
    imagePreviews[selectedIndex].getElementsByTagName("img")[0].src
  );
}
