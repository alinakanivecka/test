let shareButton = document.getElementsByClassName('share-button')[0];
let popup = document.getElementsByClassName('popup')[0];
let avatarName = document.getElementsByClassName('avatar-name')[0];

shareButton.addEventListener('click', (event) => {
  if (!avatarName.classList.contains('active-share')) {
    avatarName.classList.add('active-share');
    event.stopPropagation();
  }
});

window.addEventListener('click', (event) => {
  if (!popup.contains(event.target)) {
    avatarName.classList.remove('active-share');
  }
})