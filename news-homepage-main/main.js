let iconMenu = document.getElementsByClassName('icon-menu')[0];
let iconMenuClose = document.getElementsByClassName('icon-menu-close')[0];
let navigationMenuOverlay = document.getElementsByClassName('navigation-menu-overlay')[0];


iconMenu.addEventListener('click', () => {
  navigationMenuOverlay.classList.remove('hidden');
});

[iconMenuClose, navigationMenuOverlay].forEach(element => {
  element.addEventListener('click', (event) => {
    if (event.target === element) {
      navigationMenuOverlay.classList.add('hidden');
    }
  })
});

// iconMenuClose.addEventListener('click', () => {
//   navigationMenuOverlay.classList.add('hidden');
// })

// navigationMenuOverlay.addEventListener('click', () => {
//   navigationMenuOverlay.classList.add('hidden');
// })