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
            stringOne +=  `<li class="image_book" data-category="${boo[i].books[j]._id}">
                                    <div class="div-animation">
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

    if (e.target.classList.contains('button-see-more')) {
        const dataset = e.target.dataset.category;

        titleSelectedCategory.textContent = dataset;
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
    const categoriaAll = `<li tabindex="0" class="categoria">All categories</li>`;
    list.forEach(option => {
        listCard += `<li tabindex="0" class="categoria">${option.list_name}</li>`;
    });
    listCategories.insertAdjacentHTML("beforeend", listCard);
    listCategories.insertAdjacentHTML("afterbegin", categoriaAll);

    const optionList = document.querySelectorAll(".categoria");

    optionList.forEach( select => {
        select.addEventListener("click", async (e) => {
            e.preventDefault();

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
        booksCard += `<li class="book" data-category="${book._id}">
                        <div class="div-animation">
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
