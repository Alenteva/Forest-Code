import iziToast from "izitoast";
import axios from "axios";
import { onOpenPopUpModal } from "./open-close-modalBtn.js";
import SimpleLightBox from "simplelightbox"
import { getId } from "./home.js";

const listOne = document.querySelector(".list-one");

const bookImg = document.querySelector(".content-image");
const bookTitle = document.querySelector(".content-title");
const bookAuthor = document.querySelector(".content-descr");
const bookReview = document.querySelector(".modal-descr");
const linkAmazon = document.querySelector(".amazon");
const linkBook = document.querySelector(".apple");

const btn = document.querySelector("#add");
const congratMessage = document.querySelector(".hidden-information");




listOne.addEventListener("click", (e) => {
    if (listOne.querySelectorAll(".box-quick-view").length > 0) {
        getId(e);
    }
});


btn.addEventListener("click", addOrRemoveBook);




axios.defaults.timeout = 4000;
export class BooksAPI {

    #BASE_URL = 'https://books-backend.p.goit.global/books/';

    getTopBooks = () => axios.get(`${this.#BASE_URL}top-books`);
    getCategoryList = () => axios.get(`${this.#BASE_URL}category-list`);
    getOneCategory = (category) => axios.get(`${this.#BASE_URL}category?category=${category}`);
    getBookByID = (id) => axios.get(`${this.#BASE_URL}${id}`);
};

const bookApi = new BooksAPI();



export async function modalAboutBook(bookId) {
  try {
    const { data: book } = await bookApi.getBookByID(`${bookId}`)

    checkLocalStorage(book);

    bookImg.attributes.src.value = book.book_image;
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookReview.textContent = book.description;
    linkAmazon.attributes.href.value = book.buy_links[0].url;
    linkBook.attributes.href.value = book.buy_links[1].url;

    onOpenPopUpModal();
  
  } catch (err) {
    iziToast.error({
      title: "Error",
      message: err.message,
    })

   
  }
}


function addOrRemoveBook(e) {
  const id = e.target.attributes.id.value;
  if (btn.textContent === 'Add to shopping list') {
    addBook(id);
  } else {
    removeBook(id);
  }
}

function addBook(id) {
  let idBooks = localStorage.getItem(`idBooks`);

  if (!idBooks || idBooks === "") {
    idBooks = [];
    localStorage.setItem(`idBooks`, JSON.stringify(idBooks));

    idBooks = JSON.parse(localStorage.getItem(`idBooks`));

    idBooks.push(id);
    localStorage.setItem(`idBooks`, JSON.stringify(idBooks));
    btn.textContent = "Remove from shopping list";
    congratMessage.classList.remove("visually-hidden");
  }
}

function removeBook(id) {
  let idBooks = JSON.parse(localStorage.getItem(`idBooks`));

  idBooks.splice(idBooks.indexOf(id), 1);
  localStorage.setItem(`idBooks`, JSON.stringify(idBooks));
  btn.textContent = "Add to shopping list";
  congratMessage.classList.add("visually-hidden");
}


function checkLocalStorage(book) {
  let constantLS = localStorage.getItem(`idBooks`);

  if (!constantLS || constantLS === "" || !constantLS.includes(book._id)) {
    btn.textContent = "Add to shopping list";
  } else {
    btn.textContent = "Remove from the shopping list";
    congratMessage.classList.remove("visually-hidden");
  }
  btn.attributes.id.value = book._id;
}
