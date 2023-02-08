const loginButton = document.querySelector('.sign-in-button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close-button');
const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.navigation');

function openModal() {
  modal.classList.add('modal_active');
}

function closeModal(event) {
  event.preventDefault();
  modal.classList.remove('modal_active');
}

function toggleBurgerMenu() {
  burgerMenu.classList.toggle('navigation_opened');
  burgerButton.classList.toggle('burger-button_opened');
}

function handleClickByOverlay(event) {
  if (event.target === modal) {
    closeModal(event);
  }
}

function handleEscapeDown(event) {
  if (event.key === 'Escape') {
    closeModal(event);
  }
}

document.addEventListener('keydown', handleEscapeDown);

modal.addEventListener('click', handleClickByOverlay);

loginButton.addEventListener('click', openModal);

modalCloseButton.addEventListener('click', closeModal);

burgerButton.addEventListener('click', toggleBurgerMenu);
