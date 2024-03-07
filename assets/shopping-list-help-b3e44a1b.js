(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const m=document.querySelector(".marcup"),l=b(),g=document.querySelectorAll(".shoplist-btn-delete"),u=JSON.parse(localStorage.getItem("buy_links"))||[];l.length===0?m.innerHTML=h():(i(l),e());async function e(){g.forEach(o=>{o.addEventListener("click",async n=>{const a=document.querySelector("li");t(n),a.remove(a);const s=n.currentTarget.dataset.bookId,d=JSON.parse(localStorage.getItem("arrayBooksShop")).filter(p=>p._id!==s);localStorage.setItem("arrayBooksShop",JSON.stringify(d)),await new Promise(p=>setTimeout(p,1e3)),i(d)})})}function t(o){o.target.nodeName}function i(o){const n=o.slice(0,3);if(u.find(s=>s.name==="Amazon")){const s=n.map(d=>`<li>${S(d)}</li>`).join(""),c=document.querySelector(".marcup");c.innerHTML=`<ul>${s}</ul>`}else console.log("Ссылка на Amazon не найдена в localStorage.");document.querySelectorAll(".shoplist-btn-delete").forEach(s=>{s.addEventListener("click",f)})}function f(o){const a=o.currentTarget.dataset.bookId;let r=JSON.parse(localStorage.getItem("arrayBooksShop"));const s=r.findIndex(c=>c._id===a);s!==-1&&(r.splice(s,1),localStorage.setItem("arrayBooksShop",JSON.stringify(r)),i(r),k())}function b(){const o=localStorage.getItem("arrayBooksShop")||"[]";return JSON.parse(o)}function k(){const o=JSON.parse(localStorage.getItem("arrayBooksShop"));(!o||o.length===0)&&(m.innerHTML=h())}function S(o){const{_id:n,book_image:a,title:r,list_name:s,description:c,author:d,buy_links:p}=o;return`
   <div class="shoplist-error container">

      <div id="${n}"></div>   
        <img src="${a}" alt="${r}" class="shoplist-bookcover"/>
        <div class="shoplist">
          <h2 class="shoplist-title-book">${r}</h2>
          <p class="shoplist-category-book">${s}</p>
          <p class="shoplist-description">${c}</p>
          <p class="shoplist-author">${d}</p>
        </div>
         <div class="logo-book">
        <button id="deleteBtn-${n}" type="button" class="shoplist-btn-delete" data-book-id="${n}">
          <svg class="shoplist-btn-icon">
            <use href=" ./images/icon.svg#icon-free-icon-trash"></use>
          </svg>
        </button>
               <ul class="shoplist-links">
  <li class="shoplist-item"><a href="${p.find(y=>y.name==="Amazon").url}" target="_blank"><img src="../images/shopping-list/amazon.png" alt="amazon logo" class="amazon"></a></li>
          <li><img src="../images/shopping-list/book.png" alt="open book" class="apple-book"></li>
        </ul>
        </div>
      </div>

    `}function h(){return`
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
//# sourceMappingURL=shopping-list-help-b3e44a1b.js.map
