import"./assets/styles-ebea669e.js";document.addEventListener("DOMContentLoaded",function(){const c=document.querySelector(".marcup"),p=b(),g=document.querySelectorAll(".shoplist-btn-delete"),m=JSON.parse(localStorage.getItem("buy_links"))||[];p.length===0?c.innerHTML=d():(r(p),u());async function u(){g.forEach(o=>{o.addEventListener("click",async e=>{const a=document.querySelector("li");h(e),a.remove(a);const t=e.currentTarget.dataset.bookId,l=JSON.parse(localStorage.getItem("arrayBooksShop")).filter(i=>i._id!==t);localStorage.setItem("arrayBooksShop",JSON.stringify(l)),await new Promise(i=>setTimeout(i,1e3)),r(l)})})}function h(o){o.target.nodeName}function r(o){const e=o.slice(0,3);if(m.find(t=>t.name==="Amazon")){const t=e.map(l=>`<li>${f(l)}</li>`).join(""),n=document.querySelector(".marcup");n.innerHTML=`<ul>${t}</ul>`}else console.log("Ссылка на Amazon не найдена в localStorage.");document.querySelectorAll(".shoplist-btn-delete").forEach(t=>{t.addEventListener("click",k)})}function k(o){const a=o.currentTarget.dataset.bookId;let s=JSON.parse(localStorage.getItem("arrayBooksShop"));const t=s.findIndex(n=>n._id===a);t!==-1&&(s.splice(t,1),localStorage.setItem("arrayBooksShop",JSON.stringify(s)),r(s),S())}function b(){const o=localStorage.getItem("arrayBooksShop")||"[]";return JSON.parse(o)}function S(){const o=JSON.parse(localStorage.getItem("arrayBooksShop"));(!o||o.length===0)&&(c.innerHTML=d())}function f(o){const{_id:e,book_image:a,title:s,list_name:t,description:n,author:l,buy_links:i}=o;return`
   <div class="shoplist-error container">

      <div id="${e}"></div>
        <img src="${a}" alt="${s}" class="shoplist-bookcover"/>
        <div class="shoplist">
          <h2 class="shoplist-title-book">${s}</h2>
          <p class="shoplist-category-book">${t}</p>
          <p class="shoplist-description">${n}</p>
          <p class="shoplist-author">${l}</p>
        </div>
         <div class="logo-book">
        <button id="deleteBtn-${e}" type="button" class="shoplist-btn-delete" data-book-id="${e}">
          <svg class="shoplist-btn-icon">
            <use href=" ./images/icon.svg#icon-free-icon-trash"></use>
          </svg>
        </button>
               <ul class="shoplist-links">
  <li class="shoplist-item"><a href="${i.find(v=>v.name==="Amazon").url}" target="_blank"><img src="../images/shopping-list/amazon.png" alt="amazon logo" class="amazon"></a></li>
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
