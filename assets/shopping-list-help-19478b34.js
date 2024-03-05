(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const b=document.querySelector(".header-switch"),h=document.querySelector("body"),g=document.querySelector(".header"),v=document.querySelector(".header-logo-svg"),f=document.querySelector(".shop-list-svg-basket");document.querySelector(".header-nav");document.querySelector(".home");const k=document.querySelector(".header-menu"),q=document.querySelector(".shop-list"),T=localStorage.getItem("darkTheme");T==="true"?(document.body.classList.add("dark-theme"),y()):L();b.addEventListener("click",()=>{b.checked?(document.body.classList.add("dark-theme"),localStorage.setItem("darkTheme","true"),y()):(document.body.classList.remove("dark-theme"),localStorage.setItem("darkTheme","false"),L())});function y(){h.style.backgroundColor="#202024",h.style.color="#ffffff",g.style.backgroundColor="#111111",g.style.borderColor="#ffffff",k.innerHTML='<svg width="28" height="28"><use href="/images/icons/symbol-defs.svg#icon-menu2"></use></svg>',v.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="/images/icons/symbol-defs.svg#icon-logo2"></use></svg>',q.classList.contains("active-shop")?f.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="/images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>':f.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="/images/icons/symbol-defs.svg#icon-icon-basket2"></use></svg>'}function L(){h.style.backgroundColor="#F6F6F6",h.style.color="#111111",g.style.backgroundColor="#ffffff",g.style.borderColor="#111111",k.innerHTML='<svg width="28" height="28"><use href="/images/icons/symbol-defs.svg#icon-menu"></use></svg>',v.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="/images/icons/symbol-defs.svg#icon-logo"></use></svg>',f.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="/images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>'}document.addEventListener("DOMContentLoaded",function(){const r=document.querySelector(".home"),s=document.querySelector(".shop-list");r.addEventListener("click",function(){r.classList.add("active-home"),s.classList.remove("active-home"),localStorage.setItem("activeButton","home")}),s.addEventListener("click",function(){s.classList.add("active-shop"),r.classList.remove("active-shop"),localStorage.setItem("activeButton","shop")});const t=localStorage.getItem("activeButton");t==="home"?r.classList.add("active-home"):t==="shop"&&s.classList.add("active-shop")});document.addEventListener("DOMContentLoaded",function(){const r=document.querySelector(".shoplist-title"),s=[{_id:"1",book_image:"image1.jpg",title:"Book 1",list_name:"List 1",description:"Description of book 1",author:"Author 1",amazon_product_url:"amazon1.com",buy_links:"buy1.com"},{_id:"2",book_image:"image2.jpg",title:"Book 2",list_name:"List 2",description:"Description of book 2",author:"Author 2",amazon_product_url:"amazon2.com",buy_links:"buy2.com"},{_id:"3",book_image:"image3.jpg",title:"Book 3",list_name:"List 3",description:"Description of book 3",author:"Author 3",amazon_product_url:"amazon3.com",buy_links:"buy3.com"}];localStorage.setItem("idBooks",JSON.stringify(s));const t=e();t.length===0?r.innerHTML=S:(a(t),document.querySelectorAll(".shoplist-btn-delete").forEach(d=>{d.addEventListener("click",c=>{if(console.log("Hello"),c.target.closest(".shoplist-btn-delete")){const i=c.target.dataset.bookId;console.log(i);let l=t.filter(p=>p._id!==i);localStorage.setItem("books",JSON.stringify(l)),a(l);const m=document.querySelector(`li[data-book-id="${i}"]`);m&&m.remove()}})}));function a(n){const c=n.slice(0,3).map(l=>`<li>${o(l)}</li>`).join(""),i=document.querySelector(".shoppinglist-container");i.innerHTML=`<ul>${c}</ul>`}function e(){const n=localStorage.getItem("idBooks")||"[]";return JSON.parse(n)}function o(n){const{_id:d,book_image:c,title:i,list_name:l,description:m,author:p,amazon_product_url:_,buy_links:B}=n;return`
   <div class="shoplist-error container is-active">
      <div id="${d}"></div>   
        <img src="${c}" alt="${i}" class="shoplist-bookcover"/>
        <div class="shoplist">
          <h2 class="shoplist-title-book">${i}</h2>
          <p class="shoplist-category-book">${l}</p>
          <p class="shoplist-description">${m}</p>
          <p class="shoplist-author">${p}</p>
        </div>
         <div class="logo-book">
        <button id="deleteBtn" type="button" class="shoplist-btn-delete" data-book-id="${d}">
          <svg class="shoplist-btn-icon" width="16" height="16">
            <use href="/src/images/icons/symbol-defs.svg#icon-cart"></use>
          </svg>
        </button>
               <ul class="shoplist-links">
          <li><img src="${_}" alt="amazon logo" class="amazon"></li>
          <li><img src="${B}" alt="open book" class="apple-book"></li>
        </ul>
        </div>
      </div>
    `}const S=`
    <div class="shoplist-error container is-active">
      </div>
      <div class="shoplist-error">
        <h1 class="shoplist-title error">
          Shopping
          <span class="shoplist-title-span">List</span>
        </h1>
        <div class="shoplist-error-content">
          <p class="shoplist-error-text">This page is empty, add some books and proceed to order.</p>
          <img src="${"images/shopping-list/"+"books-tab-2x.png"}" alt="books" class="shoplist-error-books">
        </div>
      </div>
    </div>
  `});
//# sourceMappingURL=shopping-list-help-19478b34.js.map
