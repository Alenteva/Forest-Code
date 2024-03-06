import{a as u,b as m,S as I}from"./vendor-5e07ee78.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const h=document.querySelector(".list-one"),f=document.querySelector(".list_categories"),n=document.querySelector(".main-title");let b;function A(){let e=window.innerWidth;return e<=767?0:e<=1439?2:4}function _(){const e=n.textContent.split(" "),o=e[e.length-1];n.innerHTML=n.innerHTML.replace(o,`<span class="blue">${o}</span>`)}async function B(){new I(".link-img")}async function C(e){h.innerHTML="";let o="";const s=A();for(let a in e){o+=`
            <li class="books_list">
                <h2 class="name_category">${e[a].list_name}</h2>
                <ul class="images_books">`;for(let t in e[a].books)if(o+=`<li class="image_book" data-category="${e[a].books[t]._id}">
                                    <div class="div-animation">
                                            <a class="link-img" href="${e[a].books[t].book_image}"><img class="img-example" alt="Book title" src="${e[a].books[t].book_image}"></img></a>
                                        <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                                    </div>
                                
                                <div class="box-cards">
                                    <p class="title-book">${e[a].books[t].title}</p>
                                    <p class="author-book">${e[a].books[t].author}</p>
                                </div>
                            </li>`,s==t)break;o+=`</ul><button class="button-see-more" data-category="${e[a].list_name}">See more</button></li>`}h.insertAdjacentHTML("beforeend",o),B()}h.addEventListener("click",async e=>{if(e.target.classList.contains("button-see-more")){const o=e.target.dataset.category;n.textContent=o,f.querySelector(".categoria")&&f.querySelectorAll(".categoria").forEach(i=>{n.textContent===i.textContent&&(document.querySelector(".selected-categories").classList.remove("selected-categories"),i.classList.add("selected-categories"))});const s=n.textContent.split(" "),a=s[s.length-1];n.innerHTML=n.innerHTML.replace(a,`<span class="blue">${a}</span>`),await u.get(`https://books-backend.p.goit.global/books/category?category=${o}`).then(t=>{if(t.data.length===0)throw new Error("Sorry, books in the selected category were not found");w(t.data)}).catch(t=>m.error({title:"Error",message:t.message}))}});async function O(){h.innerHTML="",n.textContent==="Best Sellers Books"?await u.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");C(e.data)}).catch(e=>m.error({title:"Error",message:e.message})):await u.get(`https://books-backend.p.goit.global/books/category?category=${b}`).then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");w(e.data)}).catch(e=>m.error({title:"Error",message:e.message}))}O();async function D(e){let o="";const s='<li tabindex="0" data-name="Best Sellers Books" class="categoria selected-categories">All categories</li>';e.forEach(t=>{o+=`<li tabindex="0" data-name="${t.list_name}" class="categoria">${t.list_name}</li>`}),f.insertAdjacentHTML("beforeend",o),f.insertAdjacentHTML("afterbegin",s),document.querySelectorAll(".categoria").forEach(t=>{t.addEventListener("click",async i=>{i.preventDefault(),document.querySelector(".selected-categories").classList.remove("selected-categories"),i.target.classList.add("selected-categories"),b=i.target.textContent,b=b.replace(/ /g,"%20"),i.target.textContent!=="All categories"?(n.textContent=i.target.textContent,_(),await u.get(`https://books-backend.p.goit.global/books/category?category=${b}`).then(r=>{if(r.data.length===0)throw new Error("Sorry, books in the selected category were not found");w(r.data)}).catch(r=>m.error({title:"Error",message:r.message}))):(n.textContent="Best Sellers Books",_(),await u.get("https://books-backend.p.goit.global/books/top-books").then(r=>{if(r.data.length===0)throw new Error("Sorry, books in the selected category were not found");C(r.data)}).catch(r=>m.error({title:"Error",message:r.message})))})})}u.get("https://books-backend.p.goit.global/books/category-list").then(e=>{D(e.data)}).catch(e=>m.error({title:"Error",message:e.message}));async function w(e){let o="";h.innerHTML="",e.forEach(s=>{o+=`<li class="book" data-category="${s._id}">
                        <div class="div-animation">
                        <a class="link-img" href="${s.book_image}"><img class="img-example" alt="Book title" src="${s.book_image}"></img></a>
                            <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                        </div>
                                <div class="box-cards">
                                    <p class="title-book">${s.title}</p>
                                    <p class="author-book">${s.author}</p>
                                </div>
                      </li>`}),h.insertAdjacentHTML("beforeend",o),B()}function P(e){const o=e.target.closest(".box-quick-view");if(e.target.closest(".box-quick-view"))return(o.closest(".image_book")||o.closest(".book")).dataset.category}const $=document.querySelector(".header-switch"),y=document.querySelector("body"),v=document.querySelector(".header");document.querySelector(".header-logo-svg");const S=document.querySelector(".shop-list-svg-basket"),T=document.querySelector(".header-menu"),z=document.querySelector(".shop-list"),j=localStorage.getItem("darkTheme");j==="true"?(document.body.classList.add("dark-theme"),x()):q();$.addEventListener("click",()=>{$.checked?(document.body.classList.add("dark-theme"),localStorage.setItem("darkTheme","true"),x()):(document.body.classList.remove("dark-theme"),localStorage.setItem("darkTheme","false"),q())});function x(){y.style.backgroundColor="#202024",y.style.color="#ffffff",v.style.backgroundColor="#111111",v.style.borderColor="#ffffff",T.innerHTML='<svg width="28" height="28"><use href="../images/icon.svg#icon-menu2"></use></svg>',z.classList.contains("active-shop")?S.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="../images/icon.svg#icon-shopping-bag"></use></svg>':S.innerHTML='<svg class="shop-list-svg-basket" width="20" height="20"><use href="../images/icon.svg#icon-shopping-bag2"></use></svg>'}function q(){y.style.backgroundColor="#F6F6F6",y.style.color="#111111",v.style.backgroundColor="#ffffff",v.style.borderColor="#111111",T.innerHTML='<svg width="28" height="28"><use href="../images/icon.svg#icon-menu"></use></svg>',S.innerHTML='<svg class="shop-list-svg-basket" width="20" height="20"><use href="../images/icon.svg#icon-shopping-bag"></use></svg>'}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".home"),o=document.querySelector(".shop-list");e.addEventListener("click",function(){e.classList.add("active-home"),o.classList.remove("active-home"),localStorage.setItem("activeButton","home")}),o.addEventListener("click",function(){o.classList.add("active-shop"),e.classList.remove("active-shop"),localStorage.setItem("activeButton","shop")});const s=localStorage.getItem("activeButton");s==="home"?e.classList.add("active-home"):s==="shop"&&o.classList.add("active-shop")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".shoplist-title"),o=[{_id:"1",book_image:"image1.jpg",title:"Book 1",list_name:"List 1",description:"Description of book 1",author:"Author 1",amazon_product_url:"amazon1.com",buy_links:"buy1.com"},{_id:"2",book_image:"image2.jpg",title:"Book 2",list_name:"List 2",description:"Description of book 2",author:"Author 2",amazon_product_url:"amazon2.com",buy_links:"buy2.com"},{_id:"3",book_image:"image3.jpg",title:"Book 3",list_name:"List 3",description:"Description of book 3",author:"Author 3",amazon_product_url:"amazon3.com",buy_links:"buy3.com"}];localStorage.setItem("idBooks",JSON.stringify(o));const s=t();s.length===0?e.innerHTML=E:(a(s),document.querySelectorAll(".shoplist-btn-delete").forEach(p=>{p.addEventListener("click",d=>{if(console.log("Hello"),d.target.closest(".shoplist-btn-delete")){const c=d.target.dataset.bookId;console.log(c);let g=s.filter(L=>L._id!==c);localStorage.setItem("books",JSON.stringify(g)),a(g);const k=document.querySelector(`li[data-book-id="${c}"]`);k&&k.remove()}})}));function a(l){const d=l.slice(0,3).map(g=>`<li>${i(g)}</li>`).join(""),c=document.querySelector(".shoppinglist-container");c.innerHTML=`<ul>${d}</ul>`}function t(){const l=localStorage.getItem("idBooks")||"[]";return JSON.parse(l)}function i(l){const{_id:p,book_image:d,title:c,list_name:g,description:k,author:L,amazon_product_url:M,buy_links:H}=l;return`
   <div class="shoplist-error container is-active">
      <div id="${p}"></div>   
        <img src="${d}" alt="${c}" class="shoplist-bookcover"/>
        <div class="shoplist">
          <h2 class="shoplist-title-book">${c}</h2>
          <p class="shoplist-category-book">${g}</p>
          <p class="shoplist-description">${k}</p>
          <p class="shoplist-author">${L}</p>
        </div>
         <div class="logo-book">
        <button id="deleteBtn" type="button" class="shoplist-btn-delete" data-book-id="${p}">
          <svg class="shoplist-btn-icon" width="16" height="16">
            <use href="/src/images/icons/symbol-defs.svg#icon-cart"></use>
          </svg>
        </button>
               <ul class="shoplist-links">
          <li><img src="${M}" alt="amazon logo" class="amazon"></li>
          <li><img src="${H}" alt="open book" class="apple-book"></li>
        </ul>
        </div>
      </div>
    `}const E=`
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
  `});export{P as g};
//# sourceMappingURL=shopping-list-help-81bc7c3d.js.map
