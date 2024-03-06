document.addEventListener('DOMContentLoaded', function () {
  const bookListContainer = document.querySelector('.shoplist-title');
  // Создание объекта книги
  const idBooks = [
    {
      _id: '642fd89ac8cf5ee957f12361',
      list_name: 'Middle Grade Paperback Monthly',
      date: '2023-04-07T08:46:57.000Z',
      age_group: '',
      amazon_product_url:
        'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      article_chapter_link: '',
      author: "Barbara O'Connor",
      book_image:
        'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
      book_image_width: 330,
      book_image_height: 485,
      book_review_link: '',
      book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
      contributor: "by Barbara O'Connor",
      contributor_note: '',
      created_date: '2023-04-05 23:10:17',
      description: '',
      first_chapter_link: '',
      price: '0.00',
      primary_isbn10: '1250144051',
      primary_isbn13: '9781250144058',
      publisher: 'Square Fish',
      rank: 1,
      rank_last_week: 0,
      sunday_review_link: '',
      title: 'WISH',
      updated_date: '2023-04-05 23:10:17',
      weeks_on_list: 0,
      buy_links: [
        {
          name: 'Amazon',
          url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
        },
        {
          name: 'Apple Books',
          url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
        },
        {
          name: 'Barnes and Noble',
          url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
        },
        {
          name: 'Books-A-Million',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
        },
        {
          name: 'Bookshop',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
        },
        {
          name: 'IndieBound',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
        },
      ],
      __v: 0,
    },
    {
      _id: '642fd89ac8cf5ee957f12362',
      list_name: 'Middle Grade Paperback Monthly',
      date: '2023-04-07T08:46:57.000Z',
      age_group: '',
      amazon_product_url:
        'http://www.amazon.com/The-Only-Ivan-Katherine-Applegate/dp/0061992275?tag=NYTBSREV-20',
      article_chapter_link: '',
      author: 'Katherine Applegate.',
      book_image:
        'https://storage.googleapis.com/du-prd/books/images/9780061992278.jpg',
      book_image_width: 330,
      book_image_height: 466,
      book_review_link: '',
      book_uri: 'nyt://book/f6738b4d-ccb6-5abe-9fa1-1db4ff0313c0',
      contributor: 'by Katherine Applegate. Illustrated by Patricia Castelao',
      contributor_note: 'Illustrated by Patricia Castelao',
      created_date: '2023-04-05 23:10:17',
      description: '',
      first_chapter_link: '',
      price: '0.00',
      primary_isbn10: '0061992275',
      primary_isbn13: '9780061992278',
      publisher: 'HarperCollins',
      rank: 2,
      rank_last_week: 0,
      sunday_review_link: '',
      title: 'THE ONE AND ONLY IVAN',
      updated_date: '2023-04-05 23:10:17',
      weeks_on_list: 0,
      buy_links: [
        {
          name: 'Amazon',
          url: 'http://www.amazon.com/The-Only-Ivan-Katherine-Applegate/dp/0061992275?tag=NYTBSREV-20',
        },
        {
          name: 'Apple Books',
          url: 'https://goto.applebooks.apple/9780061992278?at=10lIEQ',
        },
        {
          name: 'Barnes and Noble',
          url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780061992278',
        },
        {
          name: 'Books-A-Million',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BONE%252BAND%252BONLY%252BIVAN%252FKatherine%252BApplegate.%252F9780061992278&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BONE%252BAND%252BONLY%252BIVAN%252BKatherine%252BApplegate.',
        },
        {
          name: 'Bookshop',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780061992278&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BONE%2BAND%2BONLY%2BIVAN',
        },
        {
          name: 'IndieBound',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780061992278%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BONE%2BAND%2BONLY%2BIVAN%2BKatherine%2BApplegate.%26aff%3DNYT',
        },
      ],
      __v: 0,
    },
    {
      _id: '642fd89ac8cf5ee957f12363',
      list_name: 'Middle Grade Paperback Monthly',
      date: '2023-04-07T08:46:57.000Z',
      age_group: '',
      amazon_product_url:
        'http://www.amazon.com/The-Wild-Robot-Peter-Brown/dp/0316381993?tag=NYTBSREV-20',
      article_chapter_link: '',
      author: 'Peter Brown',
      book_image:
        'https://storage.googleapis.com/du-prd/books/images/9780316381994.jpg',
      book_image_width: 330,
      book_image_height: 491,
      book_review_link:
        'https://www.nytimes.com/2016/04/10/books/review/the-wild-robot-by-peter-brown.html',
      book_uri: 'nyt://book/58650411-6a43-5082-89a6-9e2c62832d2f',
      contributor: 'by Peter Brown',
      contributor_note: '',
      created_date: '2023-04-05 23:10:17',
      description: '',
      first_chapter_link: '',
      price: '0.00',
      primary_isbn10: '0316382000',
      primary_isbn13: '9780316382007',
      publisher: 'Little, Brown',
      rank: 3,
      rank_last_week: 0,
      sunday_review_link: '',
      title: 'THE WILD ROBOT',
      updated_date: '2023-04-05 23:10:17',
      weeks_on_list: 0,
      buy_links: [
        {
          name: 'Amazon',
          url: 'http://www.amazon.com/The-Wild-Robot-Peter-Brown/dp/0316381993?tag=NYTBSREV-20',
        },
        {
          name: 'Apple Books',
          url: 'https://goto.applebooks.apple/9780316382007?at=10lIEQ',
        },
        {
          name: 'Barnes and Noble',
          url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780316382007',
        },
        {
          name: 'Books-A-Million',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BWILD%252BROBOT%252FPeter%252BBrown%252F9780316382007&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BWILD%252BROBOT%252BPeter%252BBrown',
        },
        {
          name: 'Bookshop',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780316382007&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BWILD%2BROBOT',
        },
        {
          name: 'IndieBound',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780316382007%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BWILD%2BROBOT%2BPeter%2BBrown%26aff%3DNYT',
        },
      ],
      __v: 0,
    },
    {
      _id: '642fd89ac8cf5ee957f12364',
      list_name: 'Middle Grade Paperback Monthly',
      date: '2023-04-07T08:46:57.000Z',
      age_group: '',
      amazon_product_url:
        'http://www.amazon.com/Long-Walk-Water-Based-Story/dp/0547577311?tag=NYTBSREV-20',
      article_chapter_link: '',
      author: 'Linda Sue Park',
      book_image:
        'https://storage.googleapis.com/du-prd/books/images/9780547577319.jpg',
      book_image_width: 328,
      book_image_height: 495,
      book_review_link: '',
      book_uri: 'nyt://book/72728168-095d-521b-90d2-2380bdc74220',
      contributor: 'by Linda Sue Park',
      contributor_note: '',
      created_date: '2023-04-05 23:10:17',
      description: '',
      first_chapter_link: '',
      price: '0.00',
      primary_isbn10: '0547577311',
      primary_isbn13: '9780547577319',
      publisher: 'Clarion',
      rank: 4,
      rank_last_week: 0,
      sunday_review_link: '',
      title: 'A LONG WALK TO WATER',
      updated_date: '2023-04-05 23:10:17',
      weeks_on_list: 0,
      buy_links: [
        {
          name: 'Amazon',
          url: 'http://www.amazon.com/Long-Walk-Water-Based-Story/dp/0547577311?tag=NYTBSREV-20',
        },
        {
          name: 'Apple Books',
          url: 'https://goto.applebooks.apple/9780547577319?at=10lIEQ',
        },
        {
          name: 'Barnes and Noble',
          url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780547577319',
        },
        {
          name: 'Books-A-Million',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FA%252BLONG%252BWALK%252BTO%252BWATER%252FLinda%252BSue%252BPark%252F9780547577319&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DA%252BLONG%252BWALK%252BTO%252BWATER%252BLinda%252BSue%252BPark',
        },
        {
          name: 'Bookshop',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780547577319&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DA%2BLONG%2BWALK%2BTO%2BWATER',
        },
        {
          name: 'IndieBound',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780547577319%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DA%2BLONG%2BWALK%2BTO%2BWATER%2BLinda%2BSue%2BPark%26aff%3DNYT',
        },
      ],
      __v: 0,
    },
    {
      _id: '642fd89ac8cf5ee957f12367',
      list_name: 'Middle Grade Paperback Monthly',
      date: '2023-04-07T08:46:57.000Z',
      age_group: '',
      amazon_product_url:
        'https://www.amazon.com/Wolf-Called-Wander-Rosanne-Parry/dp/0062895931?tag=NYTBSREV-20',
      article_chapter_link: '',
      author: 'Rosanne Parry.',
      book_image:
        'https://storage.googleapis.com/du-prd/books/images/9780062895936.jpg',
      book_image_width: 328,
      book_image_height: 495,
      book_review_link: '',
      book_uri: 'nyt://book/3ad02fce-f782-5509-b245-ffa6559cd5d8',
      contributor: 'by Rosanne Parry. Illustrated by Mónica Armiño',
      contributor_note: 'Illustrated by Mónica Armiño',
      created_date: '2023-04-05 23:10:17',
      description: '',
      first_chapter_link: '',
      price: '0.00',
      primary_isbn10: '006289594X',
      primary_isbn13: '9780062895943',
      publisher: 'Greenwillow',
      rank: 7,
      rank_last_week: 0,
      sunday_review_link: '',
      title: 'A WOLF CALLED WANDER',
      updated_date: '2023-04-05 23:10:17',
      weeks_on_list: 0,
      buy_links: [
        {
          name: 'Amazon',
          url: 'https://www.amazon.com/Wolf-Called-Wander-Rosanne-Parry/dp/0062895931?tag=NYTBSREV-20',
        },
        {
          name: 'Apple Books',
          url: 'https://goto.applebooks.apple/9780062895943?at=10lIEQ',
        },
        {
          name: 'Barnes and Noble',
          url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062895943',
        },
        {
          name: 'Books-A-Million',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FA%252BWOLF%252BCALLED%252BWANDER%252FRosanne%252BParry.%252F9780062895943&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DA%252BWOLF%252BCALLED%252BWANDER%252BRosanne%252BParry.',
        },
        {
          name: 'Bookshop',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062895943&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DA%2BWOLF%2BCALLED%2BWANDER',
        },
        {
          name: 'IndieBound',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062895943%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DA%2BWOLF%2BCALLED%2BWANDER%2BRosanne%2BParry.%26aff%3DNYT',
        },
      ],
      __v: 0,
    },
  ];

  //Сериализация объекта книги в JSON и установка его в localStorage
  localStorage.setItem('idBooks', JSON.stringify(idBooks));

  //=============================================================================================================
  // Викликаємо функцію для отримання книг з localStorage
  const books = loadFromLS();

  //==================== логіка відкриття вікна з книжками або без та видалення книжок по click
  if (books.length === 0) {
    bookListContainer.innerHTML = emptyMessage;
  } else {
    renderBooks(books);

    const btnDeleteBook = document.querySelectorAll('.shoplist-btn-delete'); // знайшли всі кнопки видалення
    console.log(btnDeleteBook);

    // функція видалення li з DOMдерева та LS
    btnDeleteBook.forEach(btn => {
      btn.addEventListener('click', event => {
        const deleteLi = document.querySelector('li'); //знайдений li в DOM дереві
        console.log(deleteLi);
        deleteLi.remove(deleteLi); //видаляється  li на кнопку якої натиснуто

        console.log('Hello');
        // перевірка натискання саме на кнопки
        function selectColor(event) {
          if (event.target.nodeName !== 'BUTTON') {
            return;
          }
        }

        const button = event.currentTarget; // Отримати саму кнопку, на яку було натиснуто

        const bookIdToDelete = button.dataset.bookId;
        console.log(bookIdToDelete);
        localStorage.removeItem('bookIdToDelete'); //видалення обранного елемента з LS

        // localStorage.removeItem('idBooks'); // видалення всіх книг з LS
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

    const bookListContainer = document.querySelector('.marcup');
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
        <button id="deleteBtn-${_id}" type="button" class="shoplist-btn-delete" data-book-id="${_id}">
          <svg class="shoplist-btn-icon" width="16" height="16">
            <use href="../images/icons/symbol-defs.svg#icon-cart"></use>
          </svg>
        </button>
               <ul class="shoplist-links">
  <li><a href="${
    buy_links.find(link => link.name === 'Amazon').url
  }" target="_blank"><img src="../images/shopping-list/amazon.png" alt="amazon logo" class="amazon"></a></li>
          <li><img src="../images/shopping-list/book.png" alt="open book" class="apple-book"></li>
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
