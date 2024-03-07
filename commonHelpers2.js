import"./assets/support-ukraine-d3e641b1.js";import"./assets/vendor-41089998.js";const g=document.querySelector(".marcup");document.addEventListener("DOMContentLoaded",function(){const c=b();console.log(c);const p=document.querySelectorAll(".shoplist-btn-delete");console.log(p),console.log(localStorage),JSON.parse(localStorage.getItem("buy_links")),c.length===0?g.innerHTML=d():(r(c),m());async function m(){p.forEach(o=>{o.addEventListener("click",async e=>{const a=o.querySelector("li");u(e),a.remove();const l=e.currentTarget.dataset.bookId,i=JSON.parse(localStorage.getItem("KEY")).filter(n=>n._id!==l);localStorage.setItem("KEY",JSON.stringify(i)),await new Promise(n=>setTimeout(n,1e3)),r(i)})})}function u(o){o.target.nodeName}function r(o){const e=o.slice(0,3);if((JSON.parse(localStorage.getItem("buy_links"))||[]).find(t=>t.name==="Amazon")){const t=e.map(n=>`<li>${S(n)}</li>`).join(""),i=document.querySelector(".marcup");i.innerHTML=`<ul>${t}</ul>`}else console.log("Ссылка на Amazon не найдена в localStorage.");document.querySelectorAll(".shoplist-btn-delete").forEach(t=>{t.addEventListener("click",h)})}function h(o){const a=o.currentTarget.dataset.bookId;let s=JSON.parse(localStorage.getItem("KEY"));const l=s.findIndex(t=>t._id===a);l!==-1&&(s.splice(l,1),localStorage.setItem("KEY",JSON.stringify(s)),r(s),k())}function b(){const o=localStorage.getItem("KEY")||"[]";return JSON.parse(o)}function k(){const o=JSON.parse(localStorage.getItem("KEY"));(!o||o.length===0)&&(g.innerHTML=d())}function S(o){const{_id:e,book_image:a,title:s,list_name:l,description:t,author:i,buy_links:n}=o;return`
   <div class="shoplist-error container">

<div class="shoplist">
            <h1 class="shoplist-title">
              Shopping
              <span class="shoplist-title-span"> List</span>
            </h1>
          </div>
      <div id="${e}"></div>   
=======

      

        <img src="${a}" alt="${s}" class="shoplist-bookcover"/>
        <div class="shoplist">
          <h2 class="shoplist-title-book">${s}</h2>
          <p class="shoplist-category-book">${l}</p>
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
    <div class="shoplist-error container">
      </div>
      <div class="shoplist-error">
        <h1 class="shoplist-title-error">
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
