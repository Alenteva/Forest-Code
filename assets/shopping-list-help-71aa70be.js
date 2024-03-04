(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const u=document.querySelector(".header-switch"),r=document.querySelector("body"),l=document.querySelector(".header"),m=document.querySelector(".header-logo-svg"),d=document.querySelector(".shop-list-svg-basket");document.querySelector(".header-nav");document.querySelector(".home");const g=document.querySelector(".header-menu"),b=document.querySelector(".shop-list"),k=localStorage.getItem("darkTheme");k==="true"?(document.body.classList.add("dark-theme"),p()):f();u.addEventListener("click",()=>{u.checked?(document.body.classList.add("dark-theme"),localStorage.setItem("darkTheme","true"),p()):(document.body.classList.remove("dark-theme"),localStorage.setItem("darkTheme","false"),f())});function p(){r.style.backgroundColor="#202024",r.style.color="#ffffff",l.style.backgroundColor="#111111",l.style.borderColor="#ffffff",g.innerHTML='<svg width="28" height="28"><use href="../images/icons/symbol-defs.svg#icon-menu2"></use></svg>',m.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="../images/icons/symbol-defs.svg#icon-logo2"></use></svg>',b.classList.contains("active-shop")?d.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="../images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>':d.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="../images/icons/symbol-defs.svg#icon-icon-basket2"></use></svg>'}function f(){r.style.backgroundColor="#F6F6F6",r.style.color="#111111",l.style.backgroundColor="#ffffff",l.style.borderColor="#111111",g.innerHTML='<svg width="28" height="28"><use href="../images/icons/symbol-defs.svg#icon-menu"></use></svg>',m.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="../images/icons/symbol-defs.svg#icon-logo"></use></svg>',d.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="../images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>'}document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".home"),t=document.querySelector(".shop-list");s.addEventListener("click",function(){s.classList.add("active-home"),t.classList.remove("active-home"),localStorage.setItem("activeButton","home")}),t.addEventListener("click",function(){t.classList.add("active-shop"),s.classList.remove("active-shop"),localStorage.setItem("activeButton","shop")});const i=localStorage.getItem("activeButton");i==="home"?s.classList.add("active-home"):i==="shop"&&t.classList.add("active-shop")});const y=document.querySelector("h1");console.log(y);const L=document.querySelector(".header-logo");console.log(L);const S=document.querySelector(".shoplist-title");console.log(S);document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".shoppinglist-container"),t=document.getElementById("deleteBtn"),i=q();i.length===0?s.innerHTML=w:(h(i),t.addEventListener("click",function(c){if(c.target.closest(".shoplist-btn-delete")){const e=c.target.dataset.bookId;let o=i.filter(a=>a._id!==e);localStorage.setItem("books",JSON.stringify(o)),h(o);const n=document.querySelector(`li[data-book-id="${e}"]`);n&&n.remove()}}))});function h(s){const i=s.slice(0,3).map(e=>`<li>${B(e)}</li>`).join(""),c=document.querySelector(".shoppinglist-container");c.innerHTML=`<ul>${i}</ul>`}function q(){const s=localStorage.getItem("idBooks")||"[]";return JSON.parse(s)}function T(s){const t=document.body;s==="dark"?(t.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(t.classList.remove("dark-theme"),localStorage.setItem("theme","light"))}function I(){const s=localStorage.getItem("theme");s&&T(s)}I();function B(s){const{_id:t,book_image:i,title:c,list_name:e,description:o,author:n,amazon_product_url:a,buy_links:v}=s;return`
      <div class="container-block" id="${t}">    
        <img src="${i}" alt="${c}" class="shoplist-bookcover">
        <div class="shoplist">
          <h2 class="shoplist-title-book">${c}</h2>
          <p class="shoplist-category-book">${e}</p>
          <p class="shoplist-description">${o}</p>
          <p class="shoplist-author">${n}</p>
        </div>
        <button id="deleteBtn" type="button" class="shoplist-btn-delete" data-book-id="${t}">
          <svg class="shoplist-btn-icon" width="16" height="16">
            <use href="./images/icons/symbol-defs.svg#icon-cart"></use>
          </svg>
        </button>
        <ul class="links">
          <li><img src="${a}" class="amazon"></li>
          <li><img src="${v}" class="apple-book"></li>
        </ul>
      </div>
    `}const M="books-tab-2x.png",$="images/shopping-list/"+M,w=`
    <div class="shoplist-error container is-active">
      <div class="support-ukraine">
        <a href="./partials/support-ukraine.html"></a>
      </div>
      <div class="shoplist-error">
        <h1 class="shoplist-title error">
          Shopping
          <span class="shoplist-title-span">List</span>
        </h1>
        <div class="shoplist-error-content">
          <p class="shoplist-error-text">This page is empty, add some books and proceed to order.</p>
          <img src="${$}" alt="books" class="shoplist-error-books">
        </div>
      </div>
    </div>
  `;
//# sourceMappingURL=shopping-list-help-71aa70be.js.map
