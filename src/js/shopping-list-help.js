// import tuiPagination from 'tui-pagination'; // Імпортуємо бібліотеку пагінації

document.addEventListener('DOMContentLoaded', function () {
  const bookListContainer = document.querySelector('.marcup');

  //=============================================================================================================
  const books = loadFromLS(); // присвоємо змінній функцію для отримання книг з localStorage
  console.log(books);
  const btnDeleteBook = document.querySelectorAll('.shoplist-btn-delete'); // знайшли всі кнопки видалення
  // Получение buy_links из Local Storage
  const buy_links = JSON.parse(localStorage.getItem('buy_links')) || [];

  //==================== логіка відкриття вікна з книжками або без та видалення книжок по click
  if (books.length === 0) {
    bookListContainer.innerHTML = emptyMessage();
  } else {
    renderBooks(books);

    deleteUpdateLs();
  }

  //==================Всі функціі =================================
  // функція видалення li з DOMдерева та LS
  async function deleteUpdateLs() {
    btnDeleteBook.forEach(btn => {
      btn.addEventListener('click', async event => {
        const deleteLi = btn.querySelector('li'); //знайдений li в DOM дереві
        selectColor(event);
        deleteLi.remove(); //видаляється  li на кнопку якої натиснуто

        const button = event.currentTarget; // Отримання поточної кнопки, на яку було натиснуто, з об'єкта події event.
        const bookIdToDelete = button.dataset.bookId; //Отримання id книги, пов'язаної з цією кнопкою, з атрибуту data-bookId.
        const localStorageData = JSON.parse(
          localStorage.getItem('arrayBooksShop')
        ); // Отримання даних про книги з локального сховища браузера з ключем 'idBooks'.
        //Фільтрація цих даних таким чином, щоб вони не містили об'єкт з id, який ми хочемо видалити.
        const updatedLocalStorageData = localStorageData.filter(
          item => item._id !== bookIdToDelete
        );

        localStorage.setItem(
          'arrayBooksShop',
          JSON.stringify(updatedLocalStorageData) // Збереження оновлених даних про книги до локального сховища браузера з ключем 'idBooks'.
        );

        // Видалення елементу з DOM
        await new Promise(resolve => setTimeout(resolve, 1000)); // Чекаємо 1 секунду перед оновленням списку
        renderBooks(updatedLocalStorageData); //Оновлення відображення списку книг на сторінці за допомогою функції renderBooks, передаючи їй оновлені дані про книги.
      });
    });
  }

  //================= функція перевірки натискання саме на кнопки ==========================
  function selectColor(event) {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }
  }

  // ================= функція відображення трьох книжок на сторінці==================
  function renderBooks(books) {
    const limitedBooks = books.slice(0, 3);

    const buy_links = JSON.parse(localStorage.getItem('buy_links')) || [];

    const amazonLink = buy_links.find(link => link.name === 'Amazon'); // помилка відсутньості buy_links на сервері
    // Проверяем, существует ли ссылка на Amazon в buy_links
    if (amazonLink) {
      const bookItemsHTML = limitedBooks
        .map(book => {
          return `<li>${templateBook(book)}</li>`;
        })
        .join('');

      const bookListContainer = document.querySelector('.marcup');
      bookListContainer.innerHTML = `<ul>${bookItemsHTML}</ul>`;
    } else {
      console.log('Ссылка на Amazon не найдена в localStorage.');
    }

    // Встановлення обробників подій для нових кнопок видалення
    const btnDeleteBook = document.querySelectorAll('.shoplist-btn-delete');
    btnDeleteBook.forEach(btn => {
      btn.addEventListener('click', deleteBookAndUpdateLs);
    });
  }

  // ========================= функція видалення книги та оновлення
  function deleteBookAndUpdateLs(event) {
    const button = event.currentTarget; // Отримати кнопку, на яку натиснуто
    const bookIdToDelete = button.dataset.bookId; // Отримати id книги для видалення

    // Отримати дані з localStorage
    let localStorageData = JSON.parse(localStorage.getItem('arrayBooksShop'));

    // Знайти індекс книги для видалення за її id
    const indexToDelete = localStorageData.findIndex(
      item => item._id === bookIdToDelete
    );

    if (indexToDelete !== -1) {
      localStorageData.splice(indexToDelete, 1); // Видалити книгу з масиву
      localStorage.setItem('arrayBooksShop', JSON.stringify(localStorageData)); // Оновити дані в localStorage
      renderBooks(localStorageData); // Оновити список книг на сторінці
      checkAndUpdateEmptyMessage(); // Перевірити, чи пусте локальне сховище та відображення відповідного повідомлення
    }
  }

  // ================функція для отримання книг з localStorage
  function loadFromLS() {
    const booksJSON = localStorage.getItem('arrayBooksShop') || '[]';
    return JSON.parse(booksJSON);
  }

  // ====Функція для перевірки пустоти локального сховища та відображення відповідного повідомлення

  function checkAndUpdateEmptyMessage() {
    const localStorageData = JSON.parse(localStorage.getItem('arrayBooksShop'));
    if (!localStorageData || localStorageData.length === 0) {
      bookListContainer.innerHTML = emptyMessage();
    }
  }

  //   =============== функція рендеру розмітки кратинки однієї книжки в LS ========

  function templateBook(book) {
    const {
      _id,
      book_image,
      title,
      list_name,
      description,
      author,
      buy_links,
    } = book;

    return `
   <div class="shoplist-error container">

      <div id="${_id}"></div>
        <img src="${book_image}" alt="${title}" class="shoplist-bookcover"/>
        <div class="shoplist">
          <h2 class="shoplist-title-book">${title}</h2>
          <p class="shoplist-category-book">${list_name}</p>
          <p class="shoplist-description">${description}</p>
          <p class="shoplist-author">${author}</p>
        </div>
         <div class="logo-book">
        <button id="deleteBtn-${_id}" type="button" class="shoplist-btn-delete" data-book-id="${_id}">
          <svg class="shoplist-btn-icon">
            <use href=" ./images/icon.svg#icon-free-icon-trash"></use>
          </svg>
        </button>
               <ul class="shoplist-links">
  <li class="shoplist-item"><a href="${
    buy_links.find(link => link.name === 'Amazon').url
  }" target="_blank"><img src="../images/shopping-list/amazon.png" alt="amazon logo" class="amazon"></a></li>
          <li><img src="../images/shopping-list/book.png" alt="open book" class="apple-book"></li>
        </ul>
        </div>
      </div>

    `;
  }

  //=============== функція рендеру розмітки вікна, якщо немає книжок в LS ========

  function emptyMessage() {
    return `
    <div class="shoplist-error container is-active">
      </div>
      <div class="shoplist-error">
        <h1 class="shoplist-title error">
          Shopping
          <span class="shoplist-title-span">List</span>
        </h1>
        <div class="shoplist-error-content">
          <p class="shoplist-error-text">This page is empty, add some books and proceed to order.</p>
          <img src="../images/shopping-list/books-dt-2x.png" alt="books" class="shoplist-error-books">
        </div>
      </div>
    </div>
  `;
  }
});

async function fetchAndInsertHtml() {
  try {
    const response = await fetch('../partials/home.html');
    const html = await response.text();
    const shoppingList = document.querySelector('.shopping-list');
    shoppingList.insertAdjacentHTML('afterbegin', html);
  } catch (error) {
    console.error('Error fetching or inserting HTML:', error);
  }
}
