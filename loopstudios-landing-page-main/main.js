let iconMenu = document.getElementsByClassName('icon-menu')[0];
let iconClose = document.getElementsByClassName('icon-close')[0];
let mobileMenuNavigation = document.getElementsByClassName('mobile-menu-navigation')[0];

iconMenu.addEventListener('click', () => {
  mobileMenuNavigation.classList.remove('hidden');
});

iconClose.addEventListener('click', () => {
  mobileMenuNavigation.classList.add('hidden');
});