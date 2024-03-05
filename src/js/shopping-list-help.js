document.addEventListener('DOMContentLoaded', function () {
  const bookListContainer = document.querySelector('.shoplist-title');
  // Создание объекта книги
  const booksData = [
    {
      _id: '1',
      book_image: 'image1.jpg',
      title: 'Book 1',
      list_name: 'List 1',
      description: 'Description of book 1',
      author: 'Author 1',
      amazon_product_url: 'amazon1.com',
      buy_links: 'buy1.com',
    },
    {
      _id: '2',
      book_image: 'image2.jpg',
      title: 'Book 2',
      list_name: 'List 2',
      description: 'Description of book 2',
      author: 'Author 2',
      amazon_product_url: 'amazon2.com',
      buy_links: 'buy2.com',
    },
    {
      _id: '3',
      book_image: 'image3.jpg',
      title: 'Book 3',
      list_name: 'List 3',
      description: 'Description of book 3',
      author: 'Author 3',
      amazon_product_url: 'amazon3.com',
      buy_links: 'buy3.com',
    },
  ];

  // Сериализация объекта книги в JSON и установка его в localStorage
  localStorage.setItem('idBooks', JSON.stringify(booksData));

  // ======================================================================================================

  // Викликаємо функцію для отримання книг з localStorage
  const books = loadFromLS();

  //==================== логіка відкриття вікна з книжками або без та видалення книжок по click
  if (books.length === 0) {
    bookListContainer.innerHTML = emptyMessage;
  } else {
    renderBooks(books);

    const btnDeleteBook = document.querySelectorAll('.shoplist-btn-delete'); // знайшли всі кнопки видалення

    btnDeleteBook.forEach(btn => {
      btn.addEventListener('click', event => {
        console.log('Hello');
        // перевірка натискання саме на кнопки
        function selectColor(event) {
          if (event.target.nodeName !== 'BUTTON') {
            return;
          }
        }

        if (event.target.closest('.shoplist-btn-delete')) {
          const bookId = event.target.dataset.bookId;
          console.log(bookId);
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
    });
  }

  // ================= функція відображення трьох книжок на сторінці==================
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

  // ================функція для отримання книг з localStorage
  function loadFromLS() {
    const booksJSON = localStorage.getItem('idBooks') || '[]';
    return JSON.parse(booksJSON);
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
      amazon_product_url,
      buy_links,
    } = book;

    return `
   <div class="shoplist-error container is-active">
      <div id="${_id}"></div>   
        <img src="${book_image}" alt="${title}" class="shoplist-bookcover"/>
        <div class="shoplist">
          <h2 class="shoplist-title-book">${title}</h2>
          <p class="shoplist-category-book">${list_name}</p>
          <p class="shoplist-description">${description}</p>
          <p class="shoplist-author">${author}</p>
        </div>
         <div class="logo-book">
        <button id="deleteBtn" type="button" class="shoplist-btn-delete" data-book-id="${_id}">
          <svg class="shoplist-btn-icon" width="16" height="16">
            <use href="/src/images/icons/symbol-defs.svg#icon-cart"></use>
          </svg>
        </button>
               <ul class="shoplist-links">
          <li><img src="${amazon_product_url}" alt="amazon logo" class="amazon"></li>
          <li><img src="${buy_links}" alt="open book" class="apple-book"></li>
        </ul>
        </div>
      </div>
    `;
  }

  //=============== функція рендеру розмітки вікна, якщо немає книжок в LS ========
  const img = 'books-tab-2x.png'; // назва файлу зображення
  const imgPath = 'images/shopping-list/' + img;

  const emptyMessage = `
    <div class="shoplist-error container is-active">
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
});

//  // =============функція отримання теми з LS===============
//   function themeFromLs() {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       changeTheme(savedTheme);
//     }
//   }

//   themeFromLs();
//   // =============функція зміни теми з LS===============

//   function changeTheme(theme) {
//     const body = document.body;

//     if (theme === 'dark') {
//       body.classList.add('dark-theme');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       body.classList.remove('dark-theme');
//       localStorage.setItem('theme', 'light');
//     }
//   }
//==============================================================================================================
// document.addEventListener('DOMContentLoaded', function () {
//   const bookListContainer = document.querySelector('.shoplist-title');

//   localStorage.setItem(
//     'idBooks',
//     JSON.stringify([
//       {
//         _id: '1',
//         book_image: 'image1.jpg',
//         title: 'Book 1',
//         list_name: 'List 1',
//         description: 'Description of book 1',
//         author: 'Author 1',
//         amazon_product_url: 'amazon1.com',
//         buy_links: 'buy1.com',
//       },
//       {
//         _id: '2',
//         book_image: 'image2.jpg',
//         title: 'Book 2',
//         list_name: 'List 2',
//         description: 'Description of book 2',
//         author: 'Author 2',
//         amazon_product_url: 'amazon2.com',
//         buy_links: 'buy2.com',
//       },
//       {
//         _id: '3',
//         book_image: 'image3.jpg',
//         title: 'Book 3',
//         list_name: 'List 3',
//         description: 'Description of book 3',
//         author: 'Author 3',
//         amazon_product_url: 'amazon3.com',
//         buy_links: 'buy3.com',
//       },
//     ])
//   );

//   // Викликаємо функцію для отримання книг з localStorage
//   const books = loadFromLS();
//   //==================== логіка відкриття вікна з книжками або без та видалення книжок по click
//   if (books.length === 0) {
//     bookListContainer.innerHTML = emptyMessage;
//   } else {
//     renderBooks(books);
//     const btnDeleteBook = document.querySelectorAll('.shoplist-btn-delete');
//     console.log(btnDeleteBook);

//     bookListContainer.innerHTML = templateBook(books);

//     btnDeleteBook.forEach(btn => {
//       btn.addEventListener('click', function (event) {
//         console.log('Hello');
//         if (event.target.closest('.shoplist-btn-delete')) {
//           const bookId = event.target.dataset.bookId;
//           let updatedBooks = books.filter(book => book._id !== bookId);

//           localStorage.setItem('books', JSON.stringify(updatedBooks));

//           renderBooks(updatedBooks);

//           const liToDelete = document.querySelector(
//             `li[data-book-id="${bookId}"]`
//           );
//           if (liToDelete) {
//             liToDelete.remove();
//           }
//         }
//       });
//     });
//   }

//   function renderBooks(books) {
//     const limitedBooks = books.slice(0, 3);

//     const bookItemsHTML = limitedBooks
//       .map(book => {
//         return `<li>${templateBook(book)}</li>`;
//       })
//       .join('');

//     const bookListContainer = document.querySelector('.shoppinglist-container');
//     bookListContainer.innerHTML = `<ul>${bookItemsHTML}</ul>`;
//   }

//   function loadFromLS() {
//     const booksJSON = localStorage.getItem('idBooks') || '[]';
//     return JSON.parse(booksJSON);
//   }

//   function changeTheme(theme) {
//     const body = document.body;

//     if (theme === 'dark') {
//       body.classList.add('dark-theme');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       body.classList.remove('dark-theme');
//       localStorage.setItem('theme', 'light');
//     }
//   }

//   function themeFromLs() {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       changeTheme(savedTheme);
//     }
//   }

//   themeFromLs();

//   function templateBook(book) {
//     const {
//       _id,
//       book_image,
//       title,
//       list_name,
//       description,
//       author,
//       amazon_product_url,
//       buy_links,
//     } = book;

//     return `
//    <div class="shoplist-error container is-active">
//       <div id="${_id}"></div>
//         <img src="${book_image}" alt="${title}" class="shoplist-bookcover"/>
//         <div class="shoplist">
//           <h2 class="shoplist-title-book">${title}</h2>
//           <p class="shoplist-category-book">${list_name}</p>
//           <p class="shoplist-description">${description}</p>
//           <p class="shoplist-author">${author}</p>
//         </div>
//         <button id="deleteBtn" type="button" class="shoplist-btn-delete" data-book-id="${_id}">
//           <svg class="shoplist-btn-icon" width="16" height="16">
//             <use href="/src/images/icons/symbol-defs.svg#icon-cart"></use>
//           </svg>
//         </button>
//         <ul class="links">
//           <li><img src="${amazon_product_url}" alt="amazon logo" class="amazon"></li>
//           <li><img src="${buy_links}" alt="open book" class="apple-book"></li>
//         </ul>
//       </div>
//     `;
//   }

//   //=============== функція рендеру розмітки вікна, якщо немає книжок в LS ========
//   const img = 'books-tab-2x.png'; // назва файлу зображення
//   const imgPath = 'images/shopping-list/' + img;

//   const emptyMessage = `
//     <div class="shoplist-error container is-active">
//       </div>
//       <div class="shoplist-error">
//         <h1 class="shoplist-title error">
//           Shopping
//           <span class="shoplist-title-span">List</span>
//         </h1>
//         <div class="shoplist-error-content">
//           <p class="shoplist-error-text">This page is empty, add some books and proceed to order.</p>
//           <img src="${imgPath}" alt="books" class="shoplist-error-books">
//         </div>
//       </div>
//     </div>
//   `;
// });
