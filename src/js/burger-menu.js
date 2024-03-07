export function initBurgerMenu() {
  const burgerToggle = document.getElementById('burgerToggle');
  const burgerMenu = document.getElementById('burgerMenu');

  burgerToggle.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger-menu-show');

    if (burgerMenu.classList.contains('burger-menu-show')) {
      const closeIconPath = './images/icon.svg#icon-close'; 
      burgerToggle.innerHTML = `
      <svg width="18" height="18" stroke="#000">
        <use href="${closeIconPath}"></use>
      </svg>`;
    } else {
      const menuIconPath = './images/icon.svg#icon-menu'; 
      burgerToggle.innerHTML = `
      <svg width="28" height="28">
        <use href="${menuIconPath}"></use>
      </svg>`;
    }
  });

}

document.addEventListener('DOMContentLoaded', function () {
  initBurgerMenu();
});

const home = document.getElementById('home');
const shoppingList = document.getElementById('shopping-list');

home.classList.add('active');

const handleClick = event => {
  if (event.target === home) {
    home.classList.add('active');
    shoppingList.classList.remove('active');
  } else if (event.target === shoppingList) {
    home.classList.remove('active');
    shoppingList.classList.add('active');
  }
};


