const switcher = document.querySelector('.header-switch');
const bodyWallpaper = document.querySelector('body');
const header = document.querySelector('.header');
const svgElement = document.querySelector('.shop-list-basket');

switcher.addEventListener('click', wallpaper);

function wallpaper() {
  if (switcher.checked) {
    darckWallpaper();
  } else {
    whiteWallpaper();
  }
}

function darckWallpaper() {
  bodyWallpaper.style.backgroundColor = '#202024';
  bodyWallpaper.style.color = '#ffffff';
  header.style.backgroundColor = '#111111';
  header.style.borderColor = '#ffffff';
}

function whiteWallpaper() {
  bodyWallpaper.style.backgroundColor = '#b6b6b6';
  bodyWallpaper.style.color = '#111111';
  header.style.backgroundColor = '#ffffff';
  header.style.borderColor = '#111111';
}
