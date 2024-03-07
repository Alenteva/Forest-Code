import"./assets/styles-02ccdce5.js";document.addEventListener("DOMContentLoaded",function(){const p=document.querySelector(".marcup"),r=h();console.log(r);const g=document.querySelectorAll(".shoplist-btn-delete");JSON.parse(localStorage.getItem("buy_links")),r.length===0?p.innerHTML=d():(c(r),u());async function u(){g.forEach(o=>{o.addEventListener("click",async e=>{const l=o.querySelector("li");m(e),l.remove();const a=e.currentTarget.dataset.bookId,i=JSON.parse(localStorage.getItem("arrayBooksShop")).filter(n=>n._id!==a);localStorage.setItem("arrayBooksShop",JSON.stringify(i)),await new Promise(n=>setTimeout(n,1e3)),c(i)})})}function m(o){o.target.nodeName}function c(o){const e=o.slice(0,3);if((JSON.parse(localStorage.getItem("buy_links"))||[]).find(t=>t.name==="Amazon")){const t=e.map(n=>`<li>${S(n)}</li>`).join(""),i=document.querySelector(".marcup");i.innerHTML=`<ul>${t}</ul>`}else console.log("Ссылка на Amazon не найдена в localStorage.");document.querySelectorAll(".shoplist-btn-delete").forEach(t=>{t.addEventListener("click",k)})}function k(o){const l=o.currentTarget.dataset.bookId;let s=JSON.parse(localStorage.getItem("arrayBooksShop"));const a=s.findIndex(t=>t._id===l);a!==-1&&(s.splice(a,1),localStorage.setItem("arrayBooksShop",JSON.stringify(s)),c(s),b())}function h(){const o=localStorage.getItem("arrayBooksShop")||"[]";return JSON.parse(o)}function b(){const o=JSON.parse(localStorage.getItem("arrayBooksShop"));(!o||o.length===0)&&(p.innerHTML=d())}function S(o){const{_id:e,book_image:l,title:s,list_name:a,description:t,author:i,buy_links:n}=o;return`
   <div class="shoplist-error container">

      <div id="${e}"></div>
        <img src="${l}" alt="${s}" class="shoplist-bookcover"/>
        <div class="shoplist">
          <h2 class="shoplist-title-book">${s}</h2>
          <p class="shoplist-category-book">${a}</p>
          <p class="shoplist-description">${t}</p>
          <p class="shoplist-author">${i}</p>
        </div>
         <div class="logo-book">
        <button id="deleteBtn-${e}" type="button" class="shoplist-btn-delete" data-book-id="${e}">
          <svg class="shoplist-btn-icon">
            <use href=" ./images/icon.svg#icon-free-icon-trash"></use>
          </svg>
        </button>
               <ul class="shoplist-links">
  <li class="shoplist-item"><a href="${n.find(f=>f.name==="Amazon").url}" target="_blank"><img src="../images/shopping-list/amazon.png" alt="amazon logo" class="amazon"></a></li>
          <li><img src="../images/shopping-list/book.png" alt="open book" class="apple-book"></li>
        </ul>
        </div>
      </div>

    `}function d(){return`
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
  `}});
//# sourceMappingURL=commonHelpers2.js.map
