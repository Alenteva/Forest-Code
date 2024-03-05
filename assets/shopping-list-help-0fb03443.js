(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const u=document.querySelector(".header-switch"),n=document.querySelector("body"),l=document.querySelector(".header"),m=document.querySelector(".header-logo-svg"),d=document.querySelector(".shop-list-svg-basket");document.querySelector(".header-nav");document.querySelector(".home");const g=document.querySelector(".header-menu"),b=document.querySelector(".shop-list"),k=localStorage.getItem("darkTheme");k==="true"?(document.body.classList.add("dark-theme"),p()):f();u.addEventListener("click",()=>{u.checked?(document.body.classList.add("dark-theme"),localStorage.setItem("darkTheme","true"),p()):(document.body.classList.remove("dark-theme"),localStorage.setItem("darkTheme","false"),f())});function p(){n.style.backgroundColor="#202024",n.style.color="#ffffff",l.style.backgroundColor="#111111",l.style.borderColor="#ffffff",g.innerHTML='<svg width="28" height="28"><use href="../images/icons/symbol-defs.svg#icon-menu2"></use></svg>',m.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="../images/icons/symbol-defs.svg#icon-logo2"></use></svg>',b.classList.contains("active-shop")?d.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="../images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>':d.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="../images/icons/symbol-defs.svg#icon-icon-basket2"></use></svg>'}function f(){n.style.backgroundColor="#F6F6F6",n.style.color="#111111",l.style.backgroundColor="#ffffff",l.style.borderColor="#111111",g.innerHTML='<svg width="28" height="28"><use href="../images/icons/symbol-defs.svg#icon-menu"></use></svg>',m.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="../images/icons/symbol-defs.svg#icon-logo"></use></svg>',d.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="../images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>'}document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".home"),t=document.querySelector(".shop-list");s.addEventListener("click",function(){s.classList.add("active-home"),t.classList.remove("active-home"),localStorage.setItem("activeButton","home")}),t.addEventListener("click",function(){t.classList.add("active-shop"),s.classList.remove("active-shop"),localStorage.setItem("activeButton","shop")});const i=localStorage.getItem("activeButton");i==="home"?s.classList.add("active-home"):i==="shop"&&t.classList.add("active-shop")});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".shoppinglist-container"),t=document.getElementById("deleteBtn"),i=y();i.length===0?s.innerHTML=B:(h(i),t.addEventListener("click",function(r){if(r.target.closest(".shoplist-btn-delete")){const e=r.target.dataset.bookId;let o=i.filter(a=>a._id!==e);localStorage.setItem("books",JSON.stringify(o)),h(o);const c=document.querySelector(`li[data-book-id="${e}"]`);c&&c.remove()}}))});function h(s){const i=s.slice(0,3).map(e=>`<li>${T(e)}</li>`).join(""),r=document.querySelector(".shoppinglist-container");r.innerHTML=`<ul>${i}</ul>`}function y(){const s=localStorage.getItem("idBooks")||"[]";return JSON.parse(s)}function L(s){const t=document.body;s==="dark"?(t.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(t.classList.remove("dark-theme"),localStorage.setItem("theme","light"))}function S(){const s=localStorage.getItem("theme");s&&L(s)}S();function T(s){const{_id:t,book_image:i,title:r,list_name:e,description:o,author:c,amazon_product_url:a,buy_links:v}=s;return`
   <div class="shoplist-error container is-active">
      <div class="support-ukraine">
      <div class="container-block" id="${t}">    
        <img src="${i}" alt="${r}" class="shoplist-bookcover">
        <div class="shoplist">
          <h2 class="shoplist-title-book">${r}</h2>
          <p class="shoplist-category-book">${e}</p>
          <p class="shoplist-description">${o}</p>
          <p class="shoplist-author">${c}</p>
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
    `}const I="books-tab-2x.png",q="images/shopping-list/"+I,B=`
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
          <img src="${q}" alt="books" class="shoplist-error-books">
        </div>
      </div>
    </div>
  `;
//# sourceMappingURL=shopping-list-help-0fb03443.js.map
