export function initBurgerMenu() {
  const burgerToggle = document.getElementById('burgerToggle');
  const burgerMenu = document.getElementById('burgerMenu');

  burgerToggle.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger-menu-show');

    if (burgerMenu.classList.contains('burger-menu-show')) {
      burgerToggle.innerHTML = `
        <svg width="18" height="18" stroke="#000">
          <use href="/images/icons/symbol-defs.svg#icon-close"></use>
        </svg>`;
    } else {
      burgerToggle.innerHTML = `
        <svg width="28" height="28">
          <use href="/images/icons/symbol-defs.svg#icon-menu"></use>
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

shoppingList.addEventListener('click', () => {
  home.classList.remove('active');
  shoppingList.classList.add('active');
});


