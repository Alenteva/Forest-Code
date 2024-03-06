import { darkHome } from './home.js';

const switcher = document.querySelector('.header-switch');
const bodyWallpaper = document.querySelector('body');
const header = document.querySelector('.header');
const svgElement1 = document.querySelector('.header-logo-svg');
const svgElement2 = document.querySelector('.shop-list-svg-basket');
const menu = document.querySelector('.header-menu');
const shopList = document.querySelector('.shop-list');

const isDarkTheme = localStorage.getItem('darkTheme');

if (isDarkTheme === 'true') {
  document.body.classList.add('dark-theme');
  darckWallpaper();
  // darkHome();
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
    '<svg width="28" height="28"><use href="../images/icon.svg#icon-menu2"></use></svg>';
  if (shopList.classList.contains('active-shop')) {
    svgElement2.innerHTML =
      '<svg class="shop-list-svg-basket" width="14" height="18"><use href="../images/icon.svg#icon-shopping-bag"></use></svg>';
  } else {
    svgElement2.innerHTML =
      '<svg class="shop-list-svg-basket" width="20" height="20"><use href="../images/icon.svg#icon-shopping-bag2"></use></svg>';
  }
}

function whiteWallpaper() {
  bodyWallpaper.style.backgroundColor = '#F6F6F6';
  bodyWallpaper.style.color = '#111111';
  header.style.backgroundColor = '#ffffff';
  header.style.borderColor = '#111111';
  menu.innerHTML =
    '<svg width="28" height="28"><use href="../images/icon.svg#icon-menu"></use></svg>';
  svgElement2.innerHTML =
    '<svg class="shop-list-svg-basket" width="20" height="20"><use href="../images/icon.svg#icon-shopping-bag"></use></svg>';
}

document.addEventListener('DOMContentLoaded', function () {
  const homeLink = document.querySelector('.home');
  const shopLink = document.querySelector('.shop-list');
  homeLink.addEventListener('click', function () {
    homeLink.classList.add('active-home');
    shopLink.classList.remove('active-home');
    localStorage.setItem('activeButton', 'home');
  });
  shopLink.addEventListener('click', function () {
    shopLink.classList.add('active-shop');
    homeLink.classList.remove('active-shop');
    localStorage.setItem('activeButton', 'shop');
  });
  const activeButton = localStorage.getItem('activeButton'); // Перевірка localStorage при завантаженні сторінки
  if (activeButton === 'home') {
    homeLink.classList.add('active-home');
  } else if (activeButton === 'shop') {
    shopLink.classList.add('active-shop');
  }
});
