import iziToast from "izitoast";
import axios from "axios";
import SimpleLightbox from "simplelightbox";

const listOne = document.querySelector(".list-one");
const listCategories = document.querySelector(".list_categories");
const titleSelectedCategory = document.querySelector(".main-title");
let bigImage;
let selectedCategory;
let number;


function isWidthDevice() {
    let widthWindow = window.innerWidth;    

    if(widthWindow <= 767) return number = 0;
    else if(widthWindow <= 1439) return number = 2;
    else return number = 4;      
}


function changeColorTitle() {
    const arrayTitle = titleSelectedCategory.textContent.split(' ');
                const lastWord = arrayTitle[arrayTitle.length-1];
                titleSelectedCategory.innerHTML = titleSelectedCategory.innerHTML.replace(lastWord,`<span class="blue">${lastWord}</span>`);
}


async function preview() {
    bigImage = new SimpleLightbox(".link-img");
}

////////list books on main page/////////

async function renderBooksMainPage(boo) {
    listOne.innerHTML = "";
    let stringOne = '';
    let stringTwo = ''; 
    const countBook = isWidthDevice();
    for( let i in boo) {
        stringOne += `
            <li class="books_list">
                <h2 class="name_category">${boo[i].list_name}</h2>
                <ul class="images_books">`;

        for (let j in boo[i].books) {
            stringOne +=  `<li class="image_book">
                                    <div id="${boo[i].books[j]._id}" class="div-animation">
                                            <a class="link-img" href="${boo[i].books[j].book_image}"><img class="img-example" alt="Book title" src="${boo[i].books[j].book_image}"></img></a>
                                        <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                                    </div>
                                
                                <div class="box-cards">
                                    <p class="title-book">${boo[i].books[j].title}</p>
                                    <p class="author-book">${boo[i].books[j].author}</p>
                                </div>
                            </li>`;
                if(countBook == j)
                    break;
        }
        stringOne += `</ul><button class="button-see-more" data-category="${boo[i].list_name}">See more</button></li>`;
    }
    listOne.insertAdjacentHTML("beforeend", stringOne);
    preview();
}

///if click on button "See more"////

listOne.addEventListener("click", async (e) =>{

    if (e.target.classList.contains("button-see-more")) {
        const dataset = e.target.dataset.category;

        titleSelectedCategory.textContent = dataset;
        
        if (listCategories.querySelector(".categoria")) {

            const categoryItems = listCategories.querySelectorAll(".categoria");
            categoryItems.forEach(option => {
                if (titleSelectedCategory.textContent === option.textContent) {
                    document.querySelector('.selected-categories').classList.remove('selected-categories');
                    option.classList.add('selected-categories');
                }
            });
        } 

        const arrayWords = titleSelectedCategory.textContent.split(' ');
        const word = arrayWords[arrayWords.length-1];
        titleSelectedCategory.innerHTML = titleSelectedCategory.innerHTML.replace(word, `<span class="blue">${word}</span>`);

        await axios.get(`https://books-backend.p.goit.global/books/category?category=${dataset}`)
        .then(response => {
            if(response.data.length === 0) {
                throw new Error(`Sorry, books in the selected category were not found`);
            }
            renderBooks(response.data);
            
        })
        .catch(error => 
             iziToast.error({
                title: "Error",
                message: error.message,
            }));
    }
});



async function updateBooksDisplay() {
    listOne.innerHTML = "";
    if(titleSelectedCategory.textContent === "Best Sellers Books") {
        await axios.get(`https://books-backend.p.goit.global/books/top-books`)
        .then(response => {
            if(response.data.length === 0) {
                throw new Error(`Sorry, books in the selected category were not found`);
            }
            renderBooksMainPage(response.data);
        })
        .catch(error => 
            iziToast.error({
                title: "Error",
                message: error.message,
            }));
    } 
    else {
        await axios.get(`https://books-backend.p.goit.global/books/category?category=${selectedCategory}`)
        .then(response => {
            if(response.data.length === 0) {
                throw new Error(`Sorry, books in the selected category were not found`);
            }
            renderBooks(response.data);
        })
        .catch(error => 
                iziToast.error({
                    title: "Error",
                    message: error.message,
                }));
    }
}
updateBooksDisplay();

//////list books on main page/////////



//////////changes in menu and searching books//////////////

async function renderCategories(list) {
    let listCard = ""; 
    const categoriaAll = `<li tabindex="0" data-name="Best Sellers Books" class="categoria selected-categories">All categories</li>`;
    list.forEach(option => {
        listCard += `<li tabindex="0" data-name="${option.list_name}" class="categoria">${option.list_name}</li>`;
    });
    listCategories.insertAdjacentHTML("beforeend", listCard);
    listCategories.insertAdjacentHTML("afterbegin", categoriaAll);

    const optionList = document.querySelectorAll(".categoria");

    optionList.forEach( select => {

        select.addEventListener("click", async (e) => {
            e.preventDefault();
            document.querySelector('.selected-categories').classList.remove('selected-categories');
            e.target.classList.add('selected-categories');
            selectedCategory = e.target.textContent;
            selectedCategory = selectedCategory.replace(/ /g, "%20");
            

            if(e.target.textContent !== "All categories") {

                titleSelectedCategory.textContent = e.target.textContent;
                changeColorTitle();

                await axios.get(`https://books-backend.p.goit.global/books/category?category=${selectedCategory}`)
                    .then(response => {
                        if(response.data.length === 0) {
                            throw new Error(`Sorry, books in the selected category were not found`);
                        }
                        renderBooks(response.data);
                    })
                    .catch(error => 
                         iziToast.error({
                            title: "Error",
                            message: error.message,
                        }));
            }
            else {
                titleSelectedCategory.textContent = "Best Sellers Books";
                changeColorTitle();

                await axios.get(`https://books-backend.p.goit.global/books/top-books`)
                    .then(response => {
                        if(response.data.length === 0) {
                            throw new Error(`Sorry, books in the selected category were not found`);
                        }
                        renderBooksMainPage(response.data);
                    })
                    .catch(error => 
                        iziToast.error({
                            title: "Error",
                            message: error.message,
                        }));
            }
        });
    });
}

///////////changes in menu and searching books////////////////



///////////////list categories////////////////

axios.get(`https://books-backend.p.goit.global/books/category-list`)
    .then(response => {
        renderCategories(response.data);    
    })
    .catch(error => 
        iziToast.error({
            title: "Error",
            message: error.message,
        }));
    
//////////////list categories//////////////




async function renderBooks(books) {
    let booksCard = ""; 
    listOne.innerHTML = "";
    books.forEach(book => {
        booksCard += `<li class="book">
                        <div id="${book._id}" class="div-animation">
                        <a class="link-img" href="${book.book_image}"><img class="img-example" alt="Book title" src="${book.book_image}"></img></a>
                            <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                        </div>
                                <div class="box-cards">
                                    <p class="title-book">${book.title}</p>
                                    <p class="author-book">${book.author}</p>
                                </div>
                      </li>`;
    });
    listOne.insertAdjacentHTML("beforeend", booksCard);
    preview();
}

////for another//////

function darkHome() {
    body.style.backgroundColor = "#202024";

        const titleBook = document.querySelectorAll(".title-book");
        titleBook.forEach(title.style.color = "white");

    if(listCategories.querySelector(".categoria")) {
        optionList.forEach(option => {
            option.addEventListener('mouseover', (e) => e.style.color = "#eac645");
            option.style.color = "rgba(255, 255, 255, 0.6)"
        });
    }
}

//
listOne.addEventListener('click', async (e) => {
    if (e.target.classList.contains('box-quick-view')) {
        const id = e.target.parentNode.id;
        console.log(id);
        renderBook(id);
    } else if (e.target.classList.contains('animation-paragraf')) {
        const id = e.target.parentNode.parentNode.id;
        console.log(id);
        renderBook(id);
    }
});

async function renderBook(_id) {
    const response = await axios.get(`https://books-backend.p.goit.global/books/${_id}`);
    const book = response.data;
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
                <div class=" ">
                    <a class=" " href="${book.amazon_product_url} rel="amazon ${book.title}" target="_blank"">amazon_product_url</a>
                </div>
            </div>
        </div>
            
        <button class="card-books-category-button margin-add" type="button" data-id="${book._id}" data-title="${book.title}">Add to shopping list</button>`;
            
    document.querySelector(".modal-content").innerHTML = shopBook;
    document.querySelector(".modal-window-shop").style.display = "block";
}          
//

////for another//////