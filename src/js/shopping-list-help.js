// import tuiPagination from 'tui-pagination'; // Імпортуємо бібліотеку пагінації
// const KEY = 'arrayBooksShop';
// const bookListContainer = document.querySelector('.marcup');

// document.addEventListener('DOMContentLoaded', function () {
//   //=============================================================================================================



//   const books = loadFromLS(); // присвоємо змінній функцію для отримання книг з localStorage
//   console.log(books);

//   const btnDeleteBook = document.querySelectorAll('.shoplist-btn-delete'); // знайшли всі кнопки видалення
//   console.log(btnDeleteBook);

//   console.log(localStorage);
//   // Получение buy_links из Local Storage
//   const buy_links = JSON.parse(localStorage.getItem('buy_links')) || [];

//   //==================== логіка відкриття вікна з книжками або без та видалення книжок по click
//   if (books.length === 0) {
//     bookListContainer.innerHTML = emptyMessage();
//   } else {
//     renderBooks(books);

//     deleteUpdateLs();
//   }

//   //==================Всі функціі =================================
//   // функція видалення li з DOMдерева та LS
//   async function deleteUpdateLs() {
//     btnDeleteBook.forEach(btn => {
//       btn.addEventListener('click', async event => {
//         const deleteLi = btn.querySelector('li'); //знайдений li в DOM дереві
//         selectColor(event);
//         deleteLi.remove(); //видаляється  li на кнопку якої натиснуто

//         const button = event.currentTarget; // Отримання поточної кнопки, на яку було натиснуто, з об'єкта події event.
//         const bookIdToDelete = button.dataset.bookId; //Отримання id книги, пов'язаної з цією кнопкою, з атрибуту data-bookId.
//         const localStorageData = JSON.parse(localStorage.getItem('KEY')); // Отримання даних про книги з локального сховища браузера з ключем 'idBooks'.
//         //Фільтрація цих даних таким чином, щоб вони не містили об'єкт з id, який ми хочемо видалити.
//         const updatedLocalStorageData = localStorageData.filter(
//           item => item._id !== bookIdToDelete
//         );

//         localStorage.setItem(
//           'KEY',
//           JSON.stringify(updatedLocalStorageData) // Збереження оновлених даних про книги до локального сховища браузера з ключем 'idBooks'.
//         );

//         // Видалення елементу з DOM
//         await new Promise(resolve => setTimeout(resolve, 1000)); // Чекаємо 1 секунду перед оновленням списку
//         renderBooks(updatedLocalStorageData); //Оновлення відображення списку книг на сторінці за допомогою функції renderBooks, передаючи їй оновлені дані про книги.
//       });
//     });
//   }

//   //================= функція перевірки натискання саме на кнопки ==========================
//   function selectColor(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//       return;
//     }
//   }

//   // ================= функція відображення трьох книжок на сторінці==================
//   function renderBooks(books) {
//     const limitedBooks = books.slice(0, 3);

//     const buy_links = JSON.parse(localStorage.getItem('buy_links')) || [];

//     const amazonLink = buy_links.find(link => link.name === 'Amazon'); // помилка відсутньості buy_links на сервері
//     // Проверяем, существует ли ссылка на Amazon в buy_links
//     if (amazonLink) {
//       const bookItemsHTML = limitedBooks
//         .map(book => {
//           return `<li>${templateBook(book)}</li>`;
//         })
//         .join('');

//       const bookListContainer = document.querySelector('.marcup');
//       bookListContainer.innerHTML = `<ul>${bookItemsHTML}</ul>`;
//     } else {
//       console.log('Ссылка на Amazon не найдена в localStorage.');
//     }

//     // Встановлення обробників подій для нових кнопок видалення
//     const btnDeleteBook = document.querySelectorAll('.shoplist-btn-delete');
//     btnDeleteBook.forEach(btn => {
//       btn.addEventListener('click', deleteBookAndUpdateLs);
//     });
//   }

//   // ========================= функція видалення книги та оновлення
//   function deleteBookAndUpdateLs(event) {
//     const button = event.currentTarget; // Отримати кнопку, на яку натиснуто
//     const bookIdToDelete = button.dataset.bookId; // Отримати id книги для видалення

//     // Отримати дані з localStorage
//     let localStorageData = JSON.parse(localStorage.getItem('KEY'));

//     // Знайти індекс книги для видалення за її id
//     const indexToDelete = localStorageData.findIndex(
//       item => item._id === bookIdToDelete
//     );

//     if (indexToDelete !== -1) {
//       localStorageData.splice(indexToDelete, 1); // Видалити книгу з масиву
//       localStorage.setItem('KEY', JSON.stringify(localStorageData)); // Оновити дані в localStorage
//       renderBooks(localStorageData); // Оновити список книг на сторінці
//       checkAndUpdateEmptyMessage(); // Перевірити, чи пусте локальне сховище та відображення відповідного повідомлення
//     }
//   }

//   // ================функція для отримання книг з localStorage
//   function loadFromLS() {
//     const booksJSON = localStorage.getItem('KEY') || '[]';
//     return JSON.parse(booksJSON);
//   }

//   // ====Функція для перевірки пустоти локального сховища та відображення відповідного повідомлення

//   function checkAndUpdateEmptyMessage() {
//     const localStorageData = JSON.parse(localStorage.getItem('KEY'));
//     if (!localStorageData || localStorageData.length === 0) {
//       bookListContainer.innerHTML = emptyMessage();
//     }
//   }

//   //   =============== функція рендеру розмітки кратинки однієї книжки в LS ========

//   function templateBook(book) {
//     const {
//       _id,
//       book_image,
//       title,
//       list_name,
//       description,
//       author,
//       buy_links,
//     } = book;

//     return `
//    <div class="shoplist-error container">

// <div class="shoplist">
//             <h1 class="shoplist-title">
//               Shopping
//               <span class="shoplist-title-span"> List</span>
//             </h1>
//           </div>
//       <div id="${_id}"></div>   
// =======

      

//         <img src="${book_image}" alt="${title}" class="shoplist-bookcover"/>
//         <div class="shoplist">
//           <h2 class="shoplist-title-book">${title}</h2>
//           <p class="shoplist-category-book">${list_name}</p>
//           <p class="shoplist-description">${description}</p>
//           <p class="shoplist-author">${author}</p>
//         </div>
//          <div class="logo-book">
//         <button id="deleteBtn-${_id}" type="button" class="shoplist-btn-delete" data-book-id="${_id}">
//           <svg class="shoplist-btn-icon">
//             <use href=" ./images/icon.svg#icon-free-icon-trash"></use>
//           </svg>
//         </button>
//                <ul class="shoplist-links">
//   <li class="shoplist-item"><a href="${
//     buy_links.find(link => link.name === 'Amazon').url
//   }" target="_blank"><img src="../images/shopping-list/amazon.png" alt="amazon logo" class="amazon"></a></li>
//           <li><img src="../images/shopping-list/book.png" alt="open book" class="apple-book"></li>
//         </ul>
//         </div>
//       </div>

//     `;
//   }

//   //=============== функція рендеру розмітки вікна, якщо немає книжок в LS ========

//   function emptyMessage() {
//     return `
//     <div class="shoplist-error container">
//       </div>
//       <div class="shoplist-error">
//         <h1 class="shoplist-title-error">
//           Shopping
//           <span class="shoplist-title-span">List</span>
//         </h1>
//         <div class="shoplist-error-content">
//           <p class="shoplist-error-text">This page is empty, add some books and proceed to order.</p>
//           <img src="../images/shopping-list/books-dt-2x.png" alt="books" class="shoplist-error-books">
//         </div>
//       </div>
//     </div>
//   `;
//   }
// });

// async function fetchAndInsertHtml() {
//   try {
//     const response = await fetch('../partials/home.html');
//     const html = await response.text();
//     const shoppingList = document.querySelector('.shopping-list');
//     shoppingList.insertAdjacentHTML('afterbegin', html);
//   } catch (error) {
//     console.error('Error fetching or inserting HTML:', error);
//   }
// }







































import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let arrayBooksShop = getMapFromLocalStorage();
updateLocalStorage();

const mainContentUl = document.querySelector('.list-books-shopping');
const loadingIndicator = document.querySelector(".container-loader");
const ulPagination = document.querySelector(".ul-pagination");

// new code //
window.addEventListener("load", async (e) => {
  e.preventDefault();

  if (arrayBooksShop.size === 0) {
    document.querySelector('.empty-shop-list').style.display = "flex";
    ulPagination.style.display = "none";
  } else {
    await createSubArray(0, 3);
    showPagination();
    scrollUp();
  }
  addColorLastWord("Shopping List");
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
                  for(let i = 2; i <= page; i++) {
                      booksCard += `<li id="${i}" class="page-li-pagination" data-id="${i}">${i}</li>`;
                  };
              } else {
                  for(let i = 2; i <= page+1; i++) {
                      booksCard += `<li id="${i}" class="page-li-pagination" data-id="${i}">${i}</li>`;
                  };
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
      ulPagination.style.display = "flex";
}

async function showBooksInShoppingList(data) {
  try {
      let booksCard = `
          <li class="list-all-books-in-shoplist">
              <div>
                  <img class="image-example-shop-list" src="${data.book_image}" alt="${data.title}">
              </div>

              <div class="content-shop-list">
                  <div class="main-content-shop-list">
                      <div class="top-content-shop-list">
                          <div class="card-book-container data-shop-list">
                              <p>${data.title}</p>
                              <p>${data.category}</p>
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
          title: "Error",
          message: error.message,
      });
  }
}

async function createSubArray(startIndex, endIndex) {
  const arraySubset = Array.from(arrayBooksShop.values()).slice(startIndex, endIndex);
  console.log(Object.values(arraySubset));
  let booksCard = ``;

  for (let object_book of arraySubset) {
      booksCard += await showBooksInShoppingList(object_book);
  }
  
  mainContentUl.innerHTML = booksCard;
}

mainContentUl.addEventListener("click", async (e) => {
    if (e.target.classList.contains('svg-delete')) {
        loadingIndicator.style.display = "block";
        arrayBooksShop.delete(e.target.dataset.title);
        await createSubArray(0, 3);
        await showPagination();
        loadingIndicator.style.display = "none";

        updateLocalStorage();
    }
});

async function hiddenLiPagination(startElement) {
  const distance = 2;
  document.querySelectorAll('.page-li-pagination').forEach((element, index) => {

      if (index < startElement - distance || index > startElement + distance) {
          element.style.display = "none";
      } else {
          element.style.display = "flex";
      }
  });

  const totalElements = document.querySelectorAll('.page-li-pagination').length - 1;
  if (startElement > distance) {
      document.querySelector('.page-li-pagination-hidden-el-l').style.display = "flex";
      document.querySelector('.page-li-pagination-hidden-el-l').innerHTML = "...";
  } else {
      document.querySelector('.page-li-pagination-hidden-el-l').style.display = "none";
  }
  
  if (startElement < totalElements - distance) {
      document.querySelector('.page-li-pagination-hidden-el-r').style.display = "flex";
      document.querySelector('.page-li-pagination-hidden-el-r').innerHTML = "...";
  } else {
      document.querySelector('.page-li-pagination-hidden-el-r').style.display = "none";
  }
}

ulPagination.addEventListener("click", async (e) => {
  e.preventDefault();

  if (e.target.classList.contains('svg-li-pagination-l') || e.target.classList.contains('svg-li-pagination-r') || e.target.classList.contains('page-li-pagination')) {
      const perPage = 3;
      let startIndex;
      let pageActive;
      
      try {
          switch (e.target.getAttribute('data-id')) {
              case "start":
                  startIndex = 0;
                  pageActive = 1;


                  if (document.querySelector('.page-one').id === '1') throw new Error("First page");
                  document.querySelector('.page-one').classList.remove('page-one');
                  document.getElementById('1').classList.add('page-one');
                  break;
              case "next":
                  startIndex = parseInt(document.querySelector('.page-one').textContent) * perPage;
                  if (startIndex >= arrayBooksShop.size) throw new Error("Last page");


                  let id = document.querySelector('.page-one').textContent;
                  document.getElementById(id).classList.remove('page-one');
                  id = (parseInt(id) + 1).toString();
                  document.getElementById(id).classList.add('page-one');
                  
                  pageActive = parseInt(document.getElementById(id).id);
                  break;
              case "last":
                  const sizeMap = arrayBooksShop.size;
                  const page = Math.floor(sizeMap / perPage);
                  if (sizeMap % perPage === 0) {
                      startIndex = (page -1) * perPage;
                      pageActive = page;
                  } else {
                      startIndex = sizeMap - (sizeMap - (page * perPage));
                      pageActive = page + 1;
                  }

                  if (startIndex >= sizeMap) throw new Error("Last page");
                  else if (document.querySelector('.page-one').id === Math.ceil(sizeMap / perPage).toString()) {
                      throw new Error("Last page");
                  }
                  
                  document.querySelector('.page-one').classList.remove('page-one');
                  let countLi = (document.querySelectorAll('.page-li-pagination').length).toString();
                  document.getElementById(countLi).classList.add('page-one');
                  break;
              case "prev":
                  startIndex = (parseInt(document.querySelector('.page-one').textContent) - 1) * (perPage) - 3;
                  if (startIndex < 0) throw new Error("First page");


                  let idPrev = document.querySelector('.page-one').textContent;
                  document.getElementById(idPrev).classList.remove('page-one');
                  idPrev = (parseInt(idPrev) - 1).toString();
                  document.getElementById(idPrev).classList.add('page-one');
                  
                  pageActive = parseInt(document.getElementById(idPrev).id);
                  break;
              default:
                  startIndex = (parseInt(e.target.getAttribute('data-id')) -1) * perPage;
                  document.querySelector('.page-one').classList.remove('page-one'); 
                  e.target.classList.add('page-one');

                  pageActive = parseInt(e.target.getAttribute('data-id'));
          }
          let endIndex = startIndex + 3;

          createSubArray(startIndex, endIndex);
          hiddenLiPagination(pageActive-1);
      } catch (error) {
          iziToast.error({
              title: "Error",
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

async function addColorLastWord (word) {
  const lastSpaceIndex = word.lastIndexOf(' ');
  const nameCategory = document.querySelector(".name-category");
  nameCategory.innerHTML = `${word.substring(0, lastSpaceIndex)} <span style="color: #4F2EE8;">${word.substring(lastSpaceIndex + 1)}</span>`;
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