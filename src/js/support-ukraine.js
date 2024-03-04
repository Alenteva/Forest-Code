import Swiper from 'swiper';
import 'swiper/css';

const supporters = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: '../images/blocks-img/save-the-children.png',
    imgRetinaTwo: '../images/blocks-img/save-the-children-2x.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '../images/blocks-img/project-hope.png',
    imgRetinaTwo: '../images/blocks-img/project-hope-2x.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: '../images/blocks-img/medical-corps.png',
    imgRetinaTwo: '../images/blocks-img/medical-corps-2x.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: '../images/blocks-img/razom.png',
    imgRetinaTwo: '../images/blocks-img/razom-2x.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: '../images/blocks-img/action-against-hunger.png',
    imgRetinaTwo: '../images/blocks-img/action-against-hunger-2x.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '../images/blocks-img/sergiy-prytula.png',
    imgRetinaTwo: '../images/blocks-img/sergiy-prytula-2x.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: '../images/blocks-img/sans-frontieres.png',
    imgRetinaTwo: '../images/blocks-img/sans-frontieres-2x.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: '../images/blocks-img/world-vision.png',
    imgRetinaTwo: '../images/blocks-img/world-vision-2x.png',
  },

  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '../images/blocks-img/united24.png',
    imgRetinaTwo: '../images/blocks-img/united24-2x.png',
  },
];

// const swiperOptions = {
//   direction: 'vertical',
//   navigation: {
//     nextEl: '.support-btn',
//   },
//   rewind: true,
//   allowTouchMove: false,
//   spaceBetween: 20,
//   slidesPerView: 'auto',
//   slidesPerGroup: 4,
//   breakpoints: {
//     768: {
//       slidesPerGroup: 6,
//     },
//   },
// };

// const swiper = new Swiper('.swiper-initialized', swiperOptions);
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  navigation: {
    nextEl: '.support-btn',
  },
  rewind: true,
  allowTouchMove: false,
  spaceBetween: 20,
  slidesPerView: 'auto',
  slidesPerGroup: 4,
  breakpoints: {
    768: {
      slidesPerGroup: 6,
    },
  },
});

const refs = {
  nextBtn: document.querySelector('.support-btn'),
  list: document.querySelector('.swiper-wrapper'),
  btn: document.querySelector('support-btn-svg'),
};

const markup = supporters
  .map(
    (el, index) =>
      ` <li class="support-item">
        <span class="support-number">${(index + 1).toString().padStart(2, '0')}
        </span>
        <a href = "${el.url}" title = "${
        el.title
      }" target='_blank' rel="noopener noreferrer nofollow" aria-label="Link to support fond">
      <img src = "${el.img}" class="support-img" srcset="${el.img} 1x, ${
        el.imgRetinaTwo
      } 2x,alt = "${el.title} logo"/>
      </a>
      </li>`
  )
  .join('');

refs.list.innerHTML = markup;

toggleBtn();

addEventListener('resize', toggleBtn);

function onBtnClick() {
  swiper.slideNext();
  if (swiper.isBeginning || swiper.isEnd) {
    rotateBtn();
  }
}
function toggleBtn() {
  const isHidden = refs.btn.classList.contains('hidden');
  if (supporters.length > swiper.params.slidesPerGroup) {
    if (isHidden) {
      refs.btn.classList.remove('hidden');
    }
    refs.nextBtn.addEventListener('click', onBtnClick);
  } else {
    if (!isHidden) {
      refs.btn.classList.add('hidden');
    }
  }
}

function rotateBtn() {
  refs.btn.classList.toggle('support-btn--up');
}
