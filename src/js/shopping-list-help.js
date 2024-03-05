document.addEventListener('DOMContentLoaded', function () {
  const bookListContainer = document.querySelector('.shoppinglist-container');
  const btnDeleteBook = document.getElementById('deleteBtn');

  // Викликаємо функцію для отримання книг з localStorage
  const books = loadFromLS();

  //==================== логіка відкриття вікна з книжками або без та видалення книжок по click
  if (books.length === 0) {
    bookListContainer.innerHTML = emptyMessage;
  } else {
    renderBooks(books);

    btnDeleteBook.addEventListener('click', function (event) {
      if (event.target.closest('.shoplist-btn-delete')) {
        const bookId = event.target.dataset.bookId;
        let updatedBooks = books.filter(book => book._id !== bookId);

        localStorage.setItem('books', JSON.stringify(updatedBooks));

        renderBooks(updatedBooks);

        const liToDelete = document.querySelector(
          `li[data-book-id="${bookId}"]`
        );
        if (liToDelete) {
          liToDelete.remove();
        }
      }
    });
  }
});

function renderBooks(books) {
  const limitedBooks = books.slice(0, 3);

  const bookItemsHTML = limitedBooks
    .map(book => {
      return `<li>${templateBook(book)}</li>`;
    })
    .join('');

  const bookListContainer = document.querySelector('.shoppinglist-container');
  bookListContainer.innerHTML = `<ul>${bookItemsHTML}</ul>`;
}

function loadFromLS() {
  const booksJSON = localStorage.getItem('idBooks') || '[]';
  return JSON.parse(booksJSON);
}

function changeTheme(theme) {
  const body = document.body;

  if (theme === 'dark') {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
}

function themeFromLs() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    changeTheme(savedTheme);
  }
}

themeFromLs();

function templateBook(book) {
  const {
    _id,
    book_image,
    title,
    list_name,
    description,
    author,
    amazon_product_url,
    buy_links,
  } = book;
  return `
   <div class="shoplist-error container is-active">
      <div class="support-ukraine">
      <div class="container-block" id="${_id}">    
        <img src="${book_image}" alt="${title}" class="shoplist-bookcover">
        <div class="shoplist">
          <h2 class="shoplist-title-book">${title}</h2>
          <p class="shoplist-category-book">${list_name}</p>
          <p class="shoplist-description">${description}</p>
          <p class="shoplist-author">${author}</p>
        </div>
        <button id="deleteBtn" type="button" class="shoplist-btn-delete" data-book-id="${_id}">
          <svg class="shoplist-btn-icon" width="16" height="16">
            <use href="./images/icons/symbol-defs.svg#icon-cart"></use>
          </svg>
        </button>
        <ul class="links">
          <li><img src="${amazon_product_url}" class="amazon"></li>
          <li><img src="${buy_links}" class="apple-book"></li>
        </ul>
      </div>
    `;
}

//=============== функція рендеру розмітки вікна, якщо немає книжок в LS ========
const img = 'books-tab-2x.png'; // назва файлу зображення
const imgPath = 'images/shopping-list/' + img;

const emptyMessage = `
    <div class="shoplist-error container is-active">
      <div class="support-ukraine">
        <a href="./partials/support-ukraine.html"></a>
      </div>
      <div class="shoplist-error">
        <h1 class="shoplist-title error">
          Shopping
          <span class="shoplist-title-span">List</span>
        </h1>
        <div class="shoplist-error-content">
          <p class="shoplist-error-text">This page is empty, add some books and proceed to order.</p>
          <img src="${imgPath}" alt="books" class="shoplist-error-books">
        </div>
      </div>
    </div>
  `;

//=======================================================================================

// if (books.length === 0) {
//   bookListContainer.innerHTML = emptyMessage;
// } else {
//   renderBooks(books);
// }
// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// console.log(savedSettings); // A string

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object

//===============проверить===============================
//   function loadFromLS() {
//     const booksJSON = localStorage.getItem('bookId'); //вместо books д.б. актуальній ключ
//     const parsedBooks = JSON.parse(booksJSON);

//     if (booksJSON) {
//       return JSON.parse(booksJSON);
//     } else {
//       return [];
//     }
//   }

//   const shoplistTitle = document.querySelector('.shoplist-title');

//   function renderBooks(books) {
//     const markup = templateBooks(books);
//     bookListContainer.insertAdjacentHTML('beforeend', markup);

//     lightbox.refresh();
//   }
// });

//===============================================================================================================

// function templateBooks(books) {
//   return books.map(templateBook).join('');
// }

// //==========виклик вікна, якщо не має книжок в LS ===================
// shoppingListContainer.innerHTML = emptyMessage;
// const shoppingListContainer = document.querySelector('.shoplist');
// //=================видалення картки
// shoppingListContainer.addEventListener('click', function (event) {
//   const target = event.target;
//   if (
//     event.target.parentNode.nodeName === 'BUTTON' ||
//     event.target.nodeName === 'BUTTON'
//   ) {
//     const bookContainer = target.closest('.container-block');
//     const bookId = bookContainer.getAttribute('#id');
//     let newArr = [];
//     const dataArr = infoItemLocalStorage(TASKS_KEY);
//     for (const item of dataArr) {
//       if (item.constID !== bookId) {
//         newArr.push(item);
//       }
//     }
//     addItemLocalStorage(TASKS_KEY, newArr);

//     bookContainer.remove();

//     if (!shoppingListContainer.querySelector('.container-block')) {
//       shoppingListContainer.innerHTML = emptyMessage;
//     }

//     // Оновлення пагінації після видалення книги
//     // updatePagination();
//   }
// });

// addToShoppingList();
// //==================================================================================================================
// //===========фукнція видалення книги============================
// export function handleDeleteBookBtn(e) {
//   const goalDeleteBtn = e.target.closest(`.shopping-list__icon-deleteBtn`);

//   if (goalDeleteBtn !== e.target) {
//     return;
//   } else {
//     const idBookToDelete = e.target.attributes.id.nodeValue;
//     const storedBooks = JSON.parse(localStorage.getItem('idBooks'));
//     storedBooks.splice(storedBooks.indexOf(idBookToDelete), 1);
//     localStorage.setItem('idBooks', JSON.stringify(storedBooks));
//     updateShoppingList();
//     renderCardOfBooks();
//   }
// }

// // document.body.classlist.add('dark');

// import {
//   bgImagesUrlx1,
//   bgImagesUrlx2,
//   bgImagesUrlx3,
//   logoAmazonImagesUrlx1,
//   logoAmazonImagesUrlx2,
//   logoAmazonImagesUrlx3,
//   allpeBookImagesUrlx1,
//   allpeBookImagesUrlx2,
//   allpeBookImagesUrlx3,
//   bookShopImagesUrlx1,
//   bookShopImagesUrlx2,
//   bookShopImagesUrlx3,
//   dumpImagesUrl,
// } from './imgAdress';
// export { renderShoppingList, renderClearShoppingList };

// function renderShoppingList(book) {
//   return book
//     .map(
//       ({
//         _id,
//         book_image,
//         author,
//         list_name,
//         title,
//         description,
//         buy_links,
//       }) => {
//         return `<li id="${_id}" class="shopping-list__card-boock">
//                 <div class="shopping-list__general-information">
//                     <div>
//                         <img class="shopping-list__img" src="${book_image}" alt="book image">
//                         <p class="shopping-list__author">${author}</p>
//                     </div>
//                         <div">
//                             <h2 class="shopping-list__title-book">${title}</h2>
//                             <h3 class="shopping-list__list-name">${list_name}</h3>
//                             <p class="shopping-list__description--near">${description}</p>
//                             <p class="shopping-list__author--near">${author}</p>
//                             <ul class="shopping-list__shop-list">
//                                 <li class="shopping-list__shop-list-item">
//                                     <a aria-label="Link to shop" rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${buy_links[0].url}" target="_blank">
//                                         <img class="shopping-list__shop-lis--img logoAmazon" srcset="${logoAmazonImagesUrlx2} 2x, ${logoAmazonImagesUrlx3} 3x" src="${logoAmazonImagesUrlx1}" alt="logoAmazon">
//                                     </a>
//                                 </li>
//                                 <li class="shopping-list__shop-list-item">
//                                     <a aria-label="Link to shop" rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${buy_links[1].url} " target="_blank">
//                                         <img class="shopping-list__shop-lis--img logoBook" srcset="${allpeBookImagesUrlx2} 2x, ${allpeBookImagesUrlx3} 3x" src="${allpeBookImagesUrlx1}" alt="logoBook">
//                                     </a>
//                                 </li>
//                                 <li class="shopping-list__shop-list-item">
//                                     <a aria-label="Link to shop" rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${buy_links[4].url} " target="_blank">
//                                         <img class="shopping-list__shop-lis--img bookShop" srcset="${bookShopImagesUrlx2} 2x, ${bookShopImagesUrlx3} 3x" src="${bookShopImagesUrlx1}" alt="bookShop">
//                                     </a>
//                                 </li>
//                             </ul>
//                             <img id="${_id}" width="38" height="38" class="shopping-list__icon-deleteBtn" src="${dumpImagesUrl}" alt="icon-deleteBtn">
//                         </div>
//                         <p class="shopping-list__description">${description}</p>
//                     </div>
//                     </li>`;
//       }
//     )
//     .join('');
// }

// function renderClearShoppingList() {
//   return `<div class="shopping-list__clear">
//                 <p class="shopping-list__clear--description" >This page is empty, add some books and proceed to order.</p>
//                 <img class="shopping-list__clear-bg"  srcset="${bgImagesUrlx2} 2x, ${bgImagesUrlx3} 3x" src="${bgImagesUrlx1}" alt="books">
//             </div>`;
// }
