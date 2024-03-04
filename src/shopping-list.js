const check = document.querySelector('h1');
console.log(check);

const check1 = document.querySelector('.header-logo');
console.log(check1);

const divk = document.querySelector('.shoplist-title');
console.log(divk);

document.addEventListener('DOMContentLoaded', function () {
  // Код шаблону книги
  function templateBook(book) {
    const {
      _id, //id книги для видалення зі списку
      book_image, //картинка книги
      title, //назва книги
      list_name, //категорія
      description, //опис книги
      author,
      amazon_product_url, //адреса книги на Amazon
      buy_links, //перелік посилань, де можна купити книгу
    } = book;

    return `
<div class="container-block" id="${_id}">    
    <img src="${book_image}" alt="${title}" class="shoplist-bookcover">
    <div class="shoplist">
        <h2 class="shoplist-title-book">${title}</h2>
        <p class="shoplist-category-book">${list_name}</p>
        <p class="shoplist-description">${description}</p>
        <p class="shoplist-author">${author}</p>
    </div>
        <button
                    id="deleteBtn"
                    type="button"
            class="shoplist-btn-delete"
            data-book-id="${_id}"
                  >
                    <svg class="shoplist-btn-icon" width="16" height="16">
                      <use
                        href="./images/icons/symbol-defs.svg#icon-cart"
                      ></use>
                    </svg>
                  </button>
        <ul class="links">
            <li><img src="${amazon_product_url}" class="amazon"></li>
            <li><img src="${buy_links}" class="apple-book"></li>
        </ul>
</div>
  `;
  }

  const img = 'books-tab-2x.png'; // назва файлу зображення
  const imgPath = 'images/shopping-list/' + img;

  const emptyMessage = `
  <div class="shoplist-error container is-active">
<div class="support-ukraine">
    <a href="./partials/support-ukraine.html"></a>
  </div>;
        <div class="shoplist-error">
<h1 class="shoplist-title error">
              Shopping
              <span class="shoplist-title-span">List</span>
            </h1>
<div class="shoplist-error-content">
    <p class="shoplist-error-text">This page is empty, add some books and proceed to order.</p>
    <img src="${imgPath}" alt="books" class="shoplist-error-books">
</div>
</div>`;

  const shoppingListContainer = document.querySelector('.shoplist');
  shoppingListContainer.innerHTML = emptyMessage;
  // Викликаємо функцію для отримання книг з localStorage
  const books = getBooksFromLocalStorage();

  function templateBooks(books) {
    // Код шаблону книг
    return books.map(templateBook).join('');
  }
  //src/js/API/storage.js

  // Отримуємо посилання на контейнер книг
  const bookListContainer = document.getElementById('bookListContainer');

  if (books.length === 0) {
    bookListContainer.innerHTML = emptyMessage;
  } else {
    renderBooks(books);
  }

  function getBooksFromLocalStorage() {
    // Отримуємо значення з localStorage за ключем 'books'
    const booksJSON = localStorage.getItem('books');
    if (booksJSON) {
      return JSON.parse(booksJSON);
    } else {
      return [];
    }
  }

  const shoplistTitle = document.querySelector('.shoplist-title');

  function renderBooks(books) {
    const markup = templateBooks(books);
    shoplistTitle.insertAdjacentHTML('beforeend', markup); // Створюємо HTML розмітку для книг та вставляємо її у контейнер

    lightbox.refresh(); // Оновити модальне вікно зображення
  }
});

//=================видалення картки
shoppingListContainer.addEventListener('click', function (event) {
  const target = event.target;
  if (
    event.target.parentNode.nodeName === 'BUTTON' ||
    event.target.nodeName === 'BUTTON'
  ) {
    const bookContainer = target.closest('.container-block');
    const bookId = bookContainer.getAttribute('#id');
    let newArr = [];
    const dataArr = infoItemLocalStorage(TASKS_KEY);
    for (const item of dataArr) {
      if (item.constID !== bookId) {
        newArr.push(item);
      }
    }
    addItemLocalStorage(TASKS_KEY, newArr);

    bookContainer.remove();

    if (!shoppingListContainer.querySelector('.container-block')) {
      shoppingListContainer.innerHTML = emptyMessage;
    }

    // Оновлення пагінації після видалення книги
    // updatePagination();
  }
});

addToShoppingList();

// document.body.classlist.add('dark');
