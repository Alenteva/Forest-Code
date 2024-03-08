import axios from 'axios';
const getId = JSON.parse(localStorage.getItem('arrayBooksShop'));
const shopList = document.querySelector('.marcup');

for (let numberBook in getId) {
  for (let id in getId[numberBook]) {
    const idBook = getId[numberBook][id];
    console.log(idBook);
    axios
      .get(`https://books-backend.p.goit.global/books/${idBook}`)
      .then(response => renderList(response.data, idBook)) // передаем id книги в функцию renderList
      .catch(error => console.log(error.message));
  }
}

async function renderList(object, idBook) {
  const book = `<div class="shop-book" data-book-id="${idBook}">
    <img class="img-shop" src="${object.book_image}" />
    <div class="info-about-book">
      <p class="shop-title">${object.title}</p>
      <p class="shop-category">${object.list_name}</p>
      <p class="shop-description">${object.description}</p>
      <p class="shop-author">${object.author}</p>
    </div>
      <button type="button" class="shoplist-btn-delete">
        <svg class="shoplist-btn-icon" width="16" height="16">
          <use href="./images/icon.svg#icon-free-icon-trash"></use>
        </svg>
      </button>
      <ul class="shoplist-links">
        <li><a href="${
          object.buy_links.find(link => link.name === 'Amazon').url
        }" target="_blank"><img src="../images/shopping-list/amazon.png" alt="amazon logo" class="amazon"></a></li>
        <li><img src="../images/shopping-list/book.png" alt="open book" class="apple-book"></li>
      </ul>
  </div>`;

  shopList.insertAdjacentHTML('beforeend', book);

  // Добавляем обработчик события для кнопки удаления
  const deleteBtn = shopList.querySelector(
    `[data-book-id="${idBook}"] .shoplist-btn-delete`
  );
  deleteBtn.addEventListener('click', async () => {
    // Удаляем элемент из DOM дерева
    const listItem = deleteBtn.closest('.shop-book');
    listItem.remove();

    // Удаляем элемент из Local Storage
    const updatedIdList = getId.filter(bookId => bookId !== idBook);
    localStorage.setItem('arrayBooksShop', JSON.stringify(updatedIdList));

    // Обновляем getId после удаления элемента
    getId.splice(getId.indexOf(idBook), 1);
  });
}

// // ================= функція відображення трьох книжок на сторінці==================
// function renderBooks(books) {
//   const limitedBooks = books.slice(0, 3);

//   const bookItemsHTML = limitedBooks
//     .map(book => {
//       return `<li>${renderList(book)}</li>`;
//     })
//     .join('');

//   const bookListContainer = document.querySelector('.marcup');
//   bookListContainer.innerHTML = `<ul>${bookItemsHTML}</ul>`;
// }

//======================================================================================
// // Добавляем обработчик события для кнопки удаления
// const deleteBtn = document.getElementById(`deleteBtn-${object.idBook}`);
// deleteBtn.addEventListener('click', async () => {
//   // Удаляем элемент из Local Storage
//   const getId = JSON.parse(localStorage.getItem('arrayBooksShop'));
//   const updatedIdList = getId.filter(id => id !== object.idBook);
//   localStorage.setItem('arrayBooksShop', JSON.stringify(updatedIdList));

//   // Удаляем элемент из DOM дерева
//   const listItem = deleteBtn.closest('.shop-book');
//   listItem.remove();
//   });
// }

// // Добавляем обработчики событий для кнопок удаления
// document.addEventListener('click', async event => {
//   if (event.target.classList.contains('shoplist-btn-delete')) {
//     const button = event.target;
//     const bookIdToDelete = button.dataset.bookId;
//     console.log(bookIdToDelete);
//     localStorage.removeItem(bookIdToDelete); // Удаляем выбранный элемент из localStorage
//     button.closest('.shop-book').remove(); // Удаляем родительский элемент кнопки (карточку книги) из DOM
//   }
// });

// // //=============== функція рендеру розмітки вікна, якщо немає книжок в LS ========
// const img = 'books-tab-2x.png'; // назва файлу зображення
// const imgPath = 'images/shopping-list/' + img;

// const emptyMessage = `
//      <div class="shoplist-error container ">
//        </div>
//        <div class="shoplist-error">
//          <h1 class="shoplist-title error">
//            Shopping
//            <span class="shoplist-title-span">List</span>
//          </h1>
//          <div class="shoplist-error-content">
//            <p class="shoplist-error-text">This page is empty, add some books and proceed to order.</p>
//            <img src="${imgPath}" alt="books" class="shoplist-error-books">
//          </div>
//        </div>
//      </div>
//    `;

// document.addEventListener('DOMContentLoaded', function () {
//   const bookListContainer = document.querySelector('.shoplist-title');

//   //=============================================================================================================
//   // Викликаємо функцію для отримання книг з localStorage
//   const books = loadFromLS();

//   //==================== логіка відкриття вікна з книжками або без та видалення книжок по click
//   if (books.length === 0) {
//     bookListContainer.innerHTML = emptyMessage;
//   } else {
//     renderBooks(books);

//

// // функція видалення li з DOMдерева та LS
// async function btnDeleteBook() {
//   btnDeleteBook.forEach(btn => {
//     btn.addEventListener('click', async event => {
//       const deleteLi = document.querySelector('li'); // Находим элемент li в дереве DOM
//       console.log(deleteLi);
//       deleteLi.remove(deleteLi); // Удаляем li, на который была нажата кнопка

//       const button = event.currentTarget; // Получаем саму кнопку, на которую было нажато

//       const bookIdToDelete = button.dataset.bookId;
//       console.log(bookIdToDelete);
//       localStorage.removeItem(bookIdToDelete); // Удаляем выбранный элемент из localStorage
//     });
//   });
// }

//     // btnDeleteBook.forEach(btn => {
//     //   btn.addEventListener('click', event => {
//     //     //перевірка натискання саме на кнопки
//     //     function selectColor(event) {
//     //       if (event.target.nodeName !== 'BUTTON') {
//     //         return;
//     //       }
//     //     }

//     //     if (event.target.closest('.shoplist-btn-delete')) {
//     //       const bookId = event.target.dataset.bookId;
//     //       let updatedBooks = books.filter(book => book._id !== bookId);

//     //       localStorage.setItem('idBooks', JSON.stringify(updatedBooks));

//     //       renderBooks(updatedBooks);
//     //       }
//     //   });
//     // });
//   }

//   // ================= функція відображення трьох книжок на сторінці==================
//   function renderBooks(books) {
//     const limitedBooks = books.slice(0, 3);

//     const bookItemsHTML = limitedBooks
//       .map(book => {
//         return `<li>${templateBook(book)}</li>`;
//       })
//       .join('');

//     const bookListContainer = document.querySelector('.marcup');
//     bookListContainer.innerHTML = `<ul>${bookItemsHTML}</ul>`;
//   }

//   // ================функція для отримання книг з localStorage
//   function loadFromLS() {
//     const booksJSON = localStorage.getItem('idBooks') || '[]';
//     return JSON.parse(booksJSON);
//   }

//
