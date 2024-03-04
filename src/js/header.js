const switcher = document.querySelector('.header-switch');
const bodyWallpaper = document.querySelector('body');
const header = document.querySelector('.header');
const svgElement1 = document.querySelector('.header-logo-svg');
const svgElement2 = document.querySelector('.shop-list-svg-basket');
const links = document.querySelector('.header-nav');
const home = document.querySelector('.home');
const menu = document.querySelector('.header-menu');

const isDarkTheme = localStorage.getItem('darkTheme');

if (isDarkTheme === 'true') {
  document.body.classList.add('dark-theme');
  darckWallpaper();
} else {
  whiteWallpaper();
}

switcher.addEventListener('click', () => {
  if (switcher.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('darkTheme', 'true');
    darckWallpaper();
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('darkTheme', 'false');
    whiteWallpaper();
  }
});

function darckWallpaper() {
  bodyWallpaper.style.backgroundColor = '#202024';
  bodyWallpaper.style.color = '#ffffff';
  header.style.backgroundColor = '#111111';
  header.style.borderColor = '#ffffff';
  menu.innerHTML =
    '<svg width="28" height="28"><use href="./images/icons/symbol-defs.svg#icon-menu2"></use></svg>';
  svgElement1.innerHTML =
    '<svg class="header-logo-svg" width="109" height="28"><use href="./images/icons/symbol-defs.svg#icon-logo2"></use></svg>';
  svgElement2.innerHTML =
    '<svg class="shop-list-svg-basket" width="14" height="18"><use href="./images/icons/symbol-defs.svg#icon-icon-basket2"></use></svg>';
}

function whiteWallpaper() {
  bodyWallpaper.style.backgroundColor = '#F6F6F6';
  bodyWallpaper.style.color = '#111111';
  header.style.backgroundColor = '#ffffff';
  header.style.borderColor = '#111111';
  menu.innerHTML =
    '<svg width="28" height="28"><use href="./images/icons/symbol-defs.svg#icon-menu"></use></svg>';
  svgElement1.innerHTML =
    '<svg class="header-logo-svg" width="109" height="28"><use href="./images/icons/symbol-defs.svg#icon-logo"></use></svg>';
  svgElement2.innerHTML =
    '<svg class="shop-list-svg-basket" width="14" height="18"><use href="./images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>';
}
