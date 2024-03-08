import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
let arrayBooksShop = getMapFromLocalStorage();
updateLocalStorage();
const mainContentUl = document.querySelector('.list-books-shopping');
const loadingIndicator = document.querySelector('.container-loader');
const ulPagination = document.querySelector('.ul-pagination');
// new code //
window.addEventListener('load', async e => {
  e.preventDefault();
  if (arrayBooksShop.size === 0) {
    document.querySelector('.empty-shop-list').style.display = 'flex';
    ulPagination.style.display = 'none';
  } else {
    await createSubArray(0, 3);
    showPagination();
    scrollUp();
  }
  addColorLastWord('Shopping List');
  loadingIndicator.style.display = 'none';
});
async function showPagination() {
  const sizeMap = arrayBooksShop.size;
  const page = sizeMap / 3;
  let booksCard = `
      <div class="svg-li-pagination-container">
          <li class="svg-li-pagination-l" data-id="start"><<</li>
          <li class="svg-li-pagination-l" data-id="prev"><</li>
      </div>
      <div class="li-pagination-container">
          <li class="page-li-pagination-hidden-el-l"></li>`;
  if (sizeMap > 3) {
    booksCard += `<li id="1" class="page-li-pagination page-one" data-id="1">1</li>`;
    if (sizeMap % 3 === 0) {
      for (let i = 2; i <= page; i++) {
        booksCard += `<li id="${i}" class="page-li-pagination" data-id="${i}">${i}</li>`;
      }
    } else {
      for (let i = 2; i <= page + 1; i++) {
        booksCard += `<li id="${i}" class="page-li-pagination" data-id="${i}">${i}</li>`;
      }
    }
  } else {
    booksCard += `<li id="1" class="page-li-pagination page-one" data-id="1">1</li>`;
  }
  booksCard += `
          <li class="page-li-pagination-hidden-el-r"></li>
      </div>
      <div class="svg-li-pagination-container">
          <li class="svg-li-pagination-r" data-id="next">></li>
          <li class="svg-li-pagination-r" data-id="last">>></li>
      </div>`;
  ulPagination.innerHTML = booksCard;
  hiddenLiPagination(0);
  ulPagination.style.display = 'flex';
}
async function showBooksInShoppingList(data) {
  try {
    let booksCard = `
          <li class="list-all-books-in-shoplist">
              <div style="min-width: 116px;">
                  <img class="image-example-shop-list" src="${data.book_image}" alt="${data.title}">
              </div>
              <div class="content-shop-list">
                  <div class="main-content-shop-list">
                      <div class="top-content-shop-list">
                          <div class="card-book-container data-shop-list">
                              <p class="p-title">${data.title}</p>
                              <p class="p-category">${data.category}</p>
                          </div>
                          <div data-title="${data.title}" class="svg-delete-shop-list svg-delete">
                              <svg data-title="${data.title}" class="svg-delete" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path data-title="${data.title}" class="svg-delete" d="M8.25 2.75H13.75M2.75 5.5H19.25M17.4167 5.5L16.7738 15.1427C16.6774 16.5894 16.6291 17.3128 16.3167 17.8613C16.0416 18.3441 15.6266 18.7323 15.1265 18.9747C14.5585 19.25 13.8335 19.25 12.3836 19.25H9.61643C8.1665 19.25 7.44153 19.25 6.87348 18.9747C6.37336 18.7323 5.95841 18.3441 5.68332 17.8613C5.37085 17.3128 5.32263 16.5894 5.22618 15.1427L4.58333 5.5M9.16667 9.625V14.2083M12.8333 9.625V14.2083" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                          </div>
                      </div>
                      <p class="description-shop-list">${data.description}</p>
                  </div>
                  <div class="bottom-content-shop-list">
                      <p>${data.author}</p>
                      <div class="links-books">
                        <a href="${data.link_amazon}" rel="amazon ${data.title}" target="_blank""><img src="./images/myPhotos/amazon.png" alt="amazon" class="filter-img"></a>
                        <a href="${data.link_goto}" rel="apple-book" target="_blank""><img src="./images/myPhotos/book.png" alt="amazon" class="filter-img"></a>
                      </div>
                  </div>
              </div>
          </li>`;
    return booksCard;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
    });
  }
}
async function createSubArray(startIndex, endIndex) {
  const arraySubset = Array.from(arrayBooksShop.values()).slice(
    startIndex,
    endIndex
  );
  console.log(Object.values(arraySubset));
  let booksCard = ``;
  for (let object_book of arraySubset) {
    booksCard += await showBooksInShoppingList(object_book);
  }
  mainContentUl.innerHTML = booksCard;
}
mainContentUl.addEventListener('click', async e => {
  if (e.target.classList.contains('svg-delete')) {
    loadingIndicator.style.display = 'block';
    arrayBooksShop.delete(e.target.dataset.title);
    await createSubArray(0, 3);
    if (arrayBooksShop.size !== 0) {
      await showPagination();
    } else {
      ulPagination.style.display = 'none';
      document.querySelector('.empty-shop-list').style.display = 'flex';
    }
    loadingIndicator.style.display = 'none';
    updateLocalStorage();
  }
});
async function hiddenLiPagination(startElement) {
  const distance = isWidthDevice();
  document.querySelectorAll('.page-li-pagination').forEach((element, index) => {
    if (index < startElement - distance || index > startElement + distance) {
      element.style.display = 'none';
    } else {
      element.style.display = 'flex';
    }
  });
  const totalElements =
    document.querySelectorAll('.page-li-pagination').length - 1;
  if (startElement > distance) {
    document.querySelector('.page-li-pagination-hidden-el-l').style.display =
      'flex';
    document.querySelector('.page-li-pagination-hidden-el-l').innerHTML = '...';
  } else {
    document.querySelector('.page-li-pagination-hidden-el-l').style.display =
      'none';
  }
  if (startElement < totalElements - distance) {
    document.querySelector('.page-li-pagination-hidden-el-r').style.display =
      'flex';
    document.querySelector('.page-li-pagination-hidden-el-r').innerHTML = '...';
  } else {
    document.querySelector('.page-li-pagination-hidden-el-r').style.display =
      'none';
  }
}
ulPagination.addEventListener('click', async e => {
  e.preventDefault();
  if (
    e.target.classList.contains('svg-li-pagination-l') ||
    e.target.classList.contains('svg-li-pagination-r') ||
    e.target.classList.contains('page-li-pagination')
  ) {
    const perPage = 3;
    let startIndex;
    let pageActive;
    try {
      switch (e.target.getAttribute('data-id')) {
        case 'start':
          startIndex = 0;
          pageActive = 1;
          if (document.querySelector('.page-one').id === '1')
            throw new Error('First page');
          document.querySelector('.page-one').classList.remove('page-one');
          document.getElementById('1').classList.add('page-one');
          break;
        case 'next':
          startIndex =
            parseInt(document.querySelector('.page-one').textContent) * perPage;
          if (startIndex >= arrayBooksShop.size) throw new Error('Last page');
          let id = document.querySelector('.page-one').textContent;
          document.getElementById(id).classList.remove('page-one');
          id = (parseInt(id) + 1).toString();
          document.getElementById(id).classList.add('page-one');
          pageActive = parseInt(document.getElementById(id).id);
          break;
        case 'last':
          const sizeMap = arrayBooksShop.size;
          const page = Math.floor(sizeMap / perPage);
          if (sizeMap % perPage === 0) {
            startIndex = (page - 1) * perPage;
            pageActive = page;
          } else {
            startIndex = sizeMap - (sizeMap - page * perPage);
            pageActive = page + 1;
          }
          if (startIndex >= sizeMap) throw new Error('Last page');
          else if (
            document.querySelector('.page-one').id ===
            Math.ceil(sizeMap / perPage).toString()
          ) {
            throw new Error('Last page');
          }
          document.querySelector('.page-one').classList.remove('page-one');
          let countLi = document
            .querySelectorAll('.page-li-pagination')
            .length.toString();
          document.getElementById(countLi).classList.add('page-one');
          break;
        case 'prev':
          startIndex =
            (parseInt(document.querySelector('.page-one').textContent) - 1) *
              perPage -
            3;
          if (startIndex < 0) throw new Error('First page');
          let idPrev = document.querySelector('.page-one').textContent;
          document.getElementById(idPrev).classList.remove('page-one');
          idPrev = (parseInt(idPrev) - 1).toString();
          document.getElementById(idPrev).classList.add('page-one');
          pageActive = parseInt(document.getElementById(idPrev).id);
          break;
        default:
          startIndex =
            (parseInt(e.target.getAttribute('data-id')) - 1) * perPage;
          document.querySelector('.page-one').classList.remove('page-one');
          e.target.classList.add('page-one');
          pageActive = parseInt(e.target.getAttribute('data-id'));
      }
      let endIndex = startIndex + 3;
      createSubArray(startIndex, endIndex);
      hiddenLiPagination(pageActive - 1);
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
    } finally {
      scrollUp();
    }
  }
});
async function scrollUp() {
  window.scroll(0, 0);
}
async function addColorLastWord(word) {
  const lastSpaceIndex = word.lastIndexOf(' ');
  const nameCategory = document.querySelector('.name-category');
  nameCategory.innerHTML = `${word.substring(
    0,
    lastSpaceIndex
  )} <span style="color: #4F2EE8;">${word.substring(
    lastSpaceIndex + 1
  )}</span>`;
}

function isWidthDevice() {
  let widthWindow = window.innerWidth;

  if (widthWindow <= 767) return 1;
  else return 2;
} 

// local storeg //
function getMapFromLocalStorage() {
  const serializedData = localStorage.getItem('arrayBooksShop');
  if (serializedData) {
    const dataArray = JSON.parse(serializedData);
    return new Map(dataArray);
  }
  return new Map();
}
function updateLocalStorage() {
  const serializedData = JSON.stringify([...arrayBooksShop]);
  localStorage.setItem('arrayBooksShop', serializedData);
}
