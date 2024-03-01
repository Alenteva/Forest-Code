export function initBurgerMenu() {
  const burgerToggle = document.getElementById('burgerToggle');
  const burgerMenu = document.getElementById('burgerMenu');

  burgerToggle.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger-menu-show');

    if (burgerMenu.classList.contains('burger-menu-show')) {
      burgerToggle.innerHTML = `
        <svg width="28" height="28">
          <use href="../images/symbol-defs.svg#icon-close"></use>
        </svg>`;
    } else {
      burgerToggle.innerHTML = `
        <svg width="28" height="28">
          <use href="../images/symbol-defs.svg#icon-menu"></use>
        </svg>`;
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initBurgerMenu();
});
