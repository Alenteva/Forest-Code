import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// const modal = document.querySelector('.backdrop'); 
// const modalOpen = document.querySelector('.add-remove-btn');

const boxView = document.querySelector(".box-quick-view")
const modalClose = document.querySelector('.modal-btn');

boxView.addEventListener("click", (evt) => {
  evt.preventDefault();
  const parentImageBook = evt.target.closest('.img_example');
  const dataCategory = parentImageBook.dataset.category;

  const markup = ` <div class="backdrop is-open">
    <div class="modal">
      <button type="button" class="modal-btn">
        <svg width="16" height="16" class="modal-icon-close">
          <use href="./images/icons/symbol-defs.svg#icon-close"></use>
        </svg>
      </button>
      <div class="modal-container">
        <div class="container-img">
        <img
          src="${dataCategory.book_image}"
          alt="content-image"
          class="content-image"
        />
      </div>
      <div class="content">
      <h1 class="content-title">${dataCategory.title}</h1>
      <p class="content-descr">${dataCategory.author}</p>
      <p class="modal-descr">${dataCategory.description}</p>
      
    <div class="links">
      ${dataCategory.buy_links.map(link=>{`
        <a href="${link.url}" target="_blank" class="link-app">
          <img src="./images/myPhotos/${link.name}.png" alt="${link.name}" />
           </a>
          `}).join("")};
       
      </div>
    </div> 
    </div>
   
      <button type="button" class="add-remove-btn">add to shopping list</button>
      <p class="information visually-hidden">
        Сongratulations! You have added the book to the shopping list. To
        delete, press the button “Remove from the shopping list”.
      </p>
    </div>
  </div>`
});
// document.addEventListener('DOMContentLoaded', () => {
//     modalOpen.addEventListener('click', () => {
//     modal.classList.add("is-open");
//     document.body.style.overflowY = 'hidden';
//   });

//   modalClose.addEventListener('click', () => {
//     document.body.style.overflowY = 'auto';
//     modal.classList.remove('is-open');
//   });

//   const modalHeight = modal.clientHeight;
//   if (modalHeight < 762) {
//     modal.style.height = '762px';
//     modal.style.overflowY = 'scroll';
//   }
// });