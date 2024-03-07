import children from '../images/blocks-img/save-the-children.png';
import children2x from '../images/blocks-img/save-the-children-2x.png';
import hope from '../images/blocks-img/project-hope.png';
import hope2x from '../images/blocks-img/project-hope-2x.png';
import corp from '../images/blocks-img/medical-corps.png';
import corp2x from '../images/blocks-img/medical-corps-2x.png';
import hunger from '../images/blocks-img/razom.png';
import hunger2x from '../images/blocks-img/razom-2x.png';
import together from '../images/blocks-img/action-against-hunger.png';
import together2x from '../images/blocks-img/action-against-hunger-2x.png';
import foundation from '../images/blocks-img/sergiy-prytula.png';
import foundation2x from '../images/blocks-img/sergiy-prytula-2x.png';
import medical from '../images/blocks-img/sans-frontieres.png';
import medical2x from '../images/blocks-img/sans-frontieres-2x.png';
import world from '../images/blocks-img/world-vision.png';
import world2x from '../images/blocks-img/world-vision-2x.png';
import united from '../images/blocks-img/united24.png';
import united2x from '../images/blocks-img/united24-2x.png';

const charityFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: children,
    retinaImg: children2x,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: hope,
    retinaImg: hope2x,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: corp,
    retinaImg: corp2x,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: together,
    retinaImg: together2x,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: hunger,
    retinaImg: hunger2x,
  },
  {
    title: 'Sergiy Prytula Charity   Foundation',
    url: 'https://prytulafoundation.org/en',
    img: foundation,
    retinaImg: foundation2x,
  },
  {
    title: 'Medicins Sans   Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medical,
    retinaImg: medical2x,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united,
    retinaImg: united2x,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: world,
    retinaImg: world2x,
  },
];

import Swiper from 'swiper';
import 'swiper/css';

const charityElem = document.querySelector('.swiper-wrapper');
const swiperBtnElem = document.querySelector('.support-swiper-btn');
const arrowElem = document.querySelector('.swiper-button-icon');

swiperBtnElem.addEventListener('click', onBtnClick);

export function fundsMarkup() {
  const result = charityFunds
    .map(({ title, url, img }, index) => {
      const paddedIndex = (index + 1).toString().padStart(2, '0');
      return `<div class="swiper-slide ">
      <a class="support-funds-link" href="${url}" target="_blank"
                    rel="noopener noreferrer nofollow">
      <p class="support-fund-number">${paddedIndex}</p>
                <img class="support-funds-list-link-image" src="${img}"
                    alt="${title}"
            </a></div>`;
    })
    .join('');
  charityElem.innerHTML = result;
}
fundsMarkup();

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: false,
  effect: 'slide',
  slidesPerView: 6,
  slidesPerGroup: 6,
});
swiper.on('reachBeginning', function () {
  arrowElem.style.transform = '';
});
swiper.on('reachEnd', function () {
  arrowElem.style.transform = 'rotate(180deg)';
});

export function onBtnClick(e) {
  if (arrowElem.style.transform == '') {
    swiper.slideNext(2000);
  } else {
    swiper.slidePrev(2000);
  }
}
