import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
// import icon from '../images/amazon.png';
// import icon_2 from '../images/book.png';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import sprite1 from '../images/myPhotos/book.png';
import sprite2 from '../images/myPhotos/amazon.png';

const listOne = document.querySelector('.list-one');
let arrayBooksShop = getMapFromLocalStorage();
updateLocalStorage();
let isWidthWindow;
let arrayBook;
const modalWindow = document.querySelector('.modal-window-shop');
listOne.addEventListener('click', async e => {
  if (e.target.classList.contains('box-quick-view')) {
    const id = e.target.parentNode.parentNode.dataset.category;
    renderBook(id);
  } else if (e.target.classList.contains('animation-paragraf')) {
    const id = e.target.parentNode.parentNode.parentNode.dataset.category;
    renderBook(id);
  } else if (e.target.classList.contains('img-example')) {
    const id = e.target.dataset.category;
    renderBook(id);
  }
});
async function renderBook(_id) {
  getWidthWindow();
  if (isWidthWindow) {
    document.body.classList.add('modal-open');
  }
  const response = await axios.get(
    `https://books-backend.p.goit.global/books/${_id}`
  );
  const book = response.data;
  arrayBook = {
    title: book.title,
    book_image: book.book_image,
    author: book.author,
    description: book.description,
    id: book._id,
    category: book.list_name,
    link_amazon: book.buy_links[0].url,
    link_goto: book.buy_links[1].url,
  };
  let shopBook = `
      <span>
          <svg class="close-window" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="close-window" d="M21 7L7 21M7 7L21 21" stroke="#111111" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
      </span>
      <div class="main-modal-window-content">
          <div class="modal-image-container"><img class="modal-image" src="${book.book_image}" alt="${book.title}"></div>
          <div class="modal-main-content-text">
              <h2 class="">${book.title}</h2>
              <p class="book-author">${book.author}</p>
              <p class="modal-book-description">${book.description}</p>
              <div class="links-books">
                 <a class="" href="${book.buy_links[0].url}" rel="amazon ${book.title}" target="_blank""><img src="${sprite2}" alt="amazon" class="filter-img"></a>
                  <a class="" href="${book.buy_links[1].url}" rel="apple-book" target="_blank""><img src="${sprite1}" alt="amazon" class="filter-img"></a>
              </div>
          </div>
      </div>
      `;
  if (arrayBooksShop.has(book.title)) {
    shopBook += `<button class="card-books-category-button margin-add" type="button" data-id="${book._id}" data-title="${book.title}">Remove from the shopping list</button>
            <p id="congratulations">Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>`;
  } else {
    shopBook += `<button class="card-books-category-button margin-add" type="button" data-id="${book._id}" data-title="${book.title}">Add to shopping list</button>
              <p id="congratulations" hidden>Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>`;
  }
  document.querySelector('.modal-content').innerHTML = shopBook;
  document.querySelector('.modal-window-shop').style.display = 'block';
}
modalWindow.addEventListener('click', async e => {
  if (e.target.classList.contains('close-window')) {
    document.querySelector('.modal-window-shop').style.display = 'none';
    if (isWidthWindow) {
      document.body.classList.remove('modal-open');
    }
  } else if (e.target.classList.contains('modal-window-shop')) {
    document.querySelector('.modal-window-shop').style.display = 'none';
    if (isWidthWindow) {
      document.body.classList.remove('modal-open');
    }
  } else if (e.target.classList.contains('card-books-category-button')) {
    bookSaveInShop(e.target);
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modalWindow.style.display = 'none';
    if (isWidthWindow) {
      document.body.classList.remove('modal-open');
    }
  }
});
async function bookSaveInShop(buttonShL) {
  try {
    if (buttonShL.textContent === 'Add to shopping list') {
      if (arrayBooksShop.has(buttonShL.dataset.title)) {
        throw new Error('This book has added');
      }
      arrayBooksShop.set(buttonShL.dataset.title, arrayBook);
      buttonShL.textContent = 'Remove from the shopping list';
      const congratulations = document.querySelector('#congratulations');
      congratulations.removeAttribute('hidden');
    } else {
      arrayBooksShop.delete(buttonShL.dataset.title);
      buttonShL.textContent = 'Add to shopping list';
      const congratulations = document.querySelector('#congratulations');
      congratulations.setAttribute('hidden', '');
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
    });
  } finally {
    updateLocalStorage();
    updateArrayMap();
  }
}
//
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
function updateArrayMap() {
  arrayBooksShop = getMapFromLocalStorage();
}
function getWidthWindow() {
  const width = window.innerWidth;
  if (width >= 1440) isWidthWindow = true;
  else isWidthWindow = false;
}
