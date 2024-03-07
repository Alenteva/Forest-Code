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
  const currentLocation = window.location.href;
  const homeLink = document.querySelector('.home');
  const shopLink = document.querySelector('.shop-list');

  if (currentLocation.includes('index.html')) {
    homeLink.classList.add('active-home');
    shopLink.classList.remove('active-shop');
  } else if (currentLocation.includes('shopping-list.html')) {
    shopLink.classList.add('active-shop');
    homeLink.classList.remove('active-home');
  }
});
