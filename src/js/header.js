const switcher = document.querySelector('.header-switch');
const bodyWallpaper = document.querySelector('body');
const header = document.querySelector('.header');
const svgElement2 = document.querySelector('.shop-list-svg-basket');
const menu = document.querySelector('.header-menu');
const shopList = document.querySelector('.shop-list');
const topicMain = document.querySelector('body');

const isDarkTheme = localStorage.getItem('darkTheme');

if (isDarkTheme === 'true') {
  document.body.classList.add('dark-theme');
  topicMain.classList.remove('light');
  topicMain.classList.add('dark');
} else {
  topicMain.classList.remove('dark');
  topicMain.classList.add('light');
}

switcher.addEventListener('click', () => {
  if (switcher.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('darkTheme', 'true');
    topicMain.classList.remove('light');
    topicMain.classList.add('dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('darkTheme', 'false');
    topicMain.classList.remove('dark');
    topicMain.classList.add('light');
  }
});

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
