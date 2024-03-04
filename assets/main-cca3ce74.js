import{a as l,i as d,S as J}from"./vendor-08afd76d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const L=document.querySelector(".header-switch"),h=document.querySelector("body"),p=document.querySelector(".header"),T=document.querySelector(".header-logo-svg"),b=document.querySelector(".shop-list-svg-basket");document.querySelector(".header-nav");document.querySelector(".home");const B=document.querySelector(".header-menu"),P=document.querySelector(".shop-list"),F=localStorage.getItem("darkTheme");F==="true"?(document.body.classList.add("dark-theme"),C()):E();L.addEventListener("click",()=>{L.checked?(document.body.classList.add("dark-theme"),localStorage.setItem("darkTheme","true"),C()):(document.body.classList.remove("dark-theme"),localStorage.setItem("darkTheme","false"),E())});function C(){h.style.backgroundColor="#202024",h.style.color="#ffffff",p.style.backgroundColor="#111111",p.style.borderColor="#ffffff",B.innerHTML='<svg width="28" height="28"><use href="../images/icons/symbol-defs.svg#icon-menu2"></use></svg>',T.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="../images/icons/symbol-defs.svg#icon-logo2"></use></svg>',P.classList.contains("active-shop")?b.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="../images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>':b.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="../images/icons/symbol-defs.svg#icon-icon-basket2"></use></svg>'}function E(){h.style.backgroundColor="#F6F6F6",h.style.color="#111111",p.style.backgroundColor="#ffffff",p.style.borderColor="#111111",B.innerHTML='<svg width="28" height="28"><use href="../images/icons/symbol-defs.svg#icon-menu"></use></svg>',T.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="../images/icons/symbol-defs.svg#icon-logo"></use></svg>',b.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="../images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>'}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".home"),t=document.querySelector(".shop-list");e.addEventListener("click",function(){e.classList.add("active-home"),t.classList.remove("active-home"),localStorage.setItem("activeButton","home")}),t.addEventListener("click",function(){t.classList.add("active-shop"),e.classList.remove("active-shop"),localStorage.setItem("activeButton","shop")});const s=localStorage.getItem("activeButton");s==="home"?e.classList.add("active-home"):s==="shop"&&t.classList.add("active-shop")});function K(){const e=document.getElementById("burgerToggle"),t=document.getElementById("burgerMenu");e.addEventListener("click",function(){t.classList.toggle("burger-menu-show"),t.classList.contains("burger-menu-show")?e.innerHTML=`
        <svg width="18" height="18" stroke="#000">
          <use href="./images/icons/symbol-defs.svg#icon-close"></use>
        </svg>`:e.innerHTML=`
        <svg width="28" height="28">
          <use href="./images/icons/symbol-defs.svg#icon-menu"></use>
        </svg>`})}document.addEventListener("DOMContentLoaded",function(){K()});const z=document.getElementById("home");document.getElementById("shopping-list");z.classList.add("active");const g=document.querySelector(".list-one"),S=document.querySelector(".list_categories"),a=document.querySelector(".main-title");let u;function Y(){let e=window.innerWidth;return e<=767?0:e<=1439?2:4}function w(){const e=a.textContent.split(" "),t=e[e.length-1];a.innerHTML=a.innerHTML.replace(t,`<span class="blue">${t}</span>`)}async function M(){new J(".link-img")}async function q(e){g.innerHTML="";let t="";const s=Y();for(let n in e){t+=`
            <li class="books_list">
                <h2 class="name_category">${e[n].list_name}</h2>
                <ul class="images_books">`;for(let o in e[n].books)if(t+=`<li class="image_book" data-category="${e[n].books[o]._id}">
                                    <div class="div-animation">
                                            <a class="link-img" href="${e[n].books[o].book_image}"><img class="img-example" alt="Book title" src="${e[n].books[o].book_image}"></img></a>
                                        <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                                    </div>
                                
                                <div class="box-cards">
                                    <p class="title-book">${e[n].books[o].title}</p>
                                    <p class="author-book">${e[n].books[o].author}</p>
                                </div>
                            </li>`,s==o)break;t+=`</ul><button class="button-see-more" data-category="${e[n].list_name}">See more</button></li>`}g.insertAdjacentHTML("beforeend",t),M()}g.addEventListener("click",async e=>{if(e.target.classList.contains("button-see-more")){const t=e.target.dataset.category;a.textContent=t;const s=a.textContent.split(" "),n=s[s.length-1];a.innerHTML=a.innerHTML.replace(n,`<span class="blue">${n}</span>`),await l.get(`https://books-backend.p.goit.global/books/category?category=${t}`).then(o=>{if(o.data.length===0)throw new Error("Sorry, books in the selected category were not found");y(o.data)}).catch(o=>d.error({title:"Error",message:o.message}))}});async function Q(){g.innerHTML="",a.textContent==="Best Sellers Books"?await l.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");q(e.data)}).catch(e=>d.error({title:"Error",message:e.message})):await l.get(`https://books-backend.p.goit.global/books/category?category=${u}`).then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");y(e.data)}).catch(e=>d.error({title:"Error",message:e.message}))}Q();async function R(e){let t="";const s='<li tabindex="0" class="categoria">All categories</li>';e.forEach(o=>{t+=`<li tabindex="0" class="categoria">${o.list_name}</li>`}),S.insertAdjacentHTML("beforeend",t),S.insertAdjacentHTML("afterbegin",s),document.querySelectorAll(".categoria").forEach(o=>{o.addEventListener("click",async i=>{i.preventDefault(),u=i.target.textContent,u=u.replace(/ /g,"%20"),i.target.textContent!=="All categories"?(a.textContent=i.target.textContent,w(),await l.get(`https://books-backend.p.goit.global/books/category?category=${u}`).then(r=>{if(r.data.length===0)throw new Error("Sorry, books in the selected category were not found");y(r.data)}).catch(r=>d.error({title:"Error",message:r.message}))):(a.textContent="Best Sellers Books",w(),await l.get("https://books-backend.p.goit.global/books/top-books").then(r=>{if(r.data.length===0)throw new Error("Sorry, books in the selected category were not found");q(r.data)}).catch(r=>d.error({title:"Error",message:r.message})))})})}l.get("https://books-backend.p.goit.global/books/category-list").then(e=>{R(e.data)}).catch(e=>d.error({title:"Error",message:e.message}));async function y(e){let t="";g.innerHTML="",e.forEach(s=>{t+=`<li class="book" data-category="${s._id}">
                        <div class="div-animation">
                        <a class="link-img" href="${s.book_image}"><img class="img-example" alt="Book title" src="${s.book_image}"></img></a>
                            <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                        </div>
                                <div class="box-cards">
                                    <p class="title-book">${s.title}</p>
                                    <p class="author-book">${s.author}</p>
                                </div>
                      </li>`}),g.insertAdjacentHTML("beforeend",t),M()}document.querySelector(".img-example");document.querySelector(".content-title");document.querySelector(".content-descr");document.querySelector(".modal-descr");document.querySelector(".amazon");document.querySelector(".apple");const f=document.querySelector("#add"),$=document.querySelector(".hidden-information");f.addEventListener("click",U);l.defaults.timeout=4e3;function U(e){const t=e.target.attributes.id.value;f.textContent==="Add to shopping list"?G(t):V(t)}function G(e){let t=localStorage.getItem("idBooks");(t==="undefined"||!t||t==="")&&(t=[],localStorage.setItem("idBooks",JSON.stringify(t)),t=JSON.parse(localStorage.getItem("idBooks")),t.push(e),localStorage.setItem("idBooks",JSON.stringify(t)),f.textContent="Remove from shopping list",$.classList.remove("visually-hidden"))}function V(e){let t=JSON.parse(localStorage.getItem("idBooks"));t.splice(t.indexOf(e),1),localStorage.setItem("idBooks",JSON.stringify(t)),f.textContent="Add to shopping list",$.classList.add("visually-hidden")}const k=document.querySelector(".scrollToTop");window.onscroll=()=>{window.scrollY>500?k.classList.remove("isHide"):window.scrollY<500&&k.classList.add("isHide"),k.onclick=()=>{window.scrollTo(0,0)}};const X=document.querySelector("h1");console.log(X);const Z=document.querySelector(".header-logo");console.log(Z);const ee=document.querySelector(".shoplist-title");console.log(ee);document.addEventListener("DOMContentLoaded",function(){function e(c){const{_id:m,book_image:_,title:v,list_name:A,description:N,author:D,amazon_product_url:W,buy_links:j}=c;return`
<div class="container-block" id="${m}">    
    <img src="${_}" alt="${v}" class="shoplist-bookcover">
    <div class="shoplist">
        <h2 class="shoplist-title-book">${v}</h2>
        <p class="shoplist-category-book">${A}</p>
        <p class="shoplist-description">${N}</p>
        <p class="shoplist-author">${D}</p>
    </div>
        <button
                    id="deleteBtn"
                    type="button"
            class="shoplist-btn-delete"
            data-book-id="${m}"
                  >
                    <svg class="shoplist-btn-icon" width="16" height="16">
                      <use
                        href="./images/icons/symbol-defs.svg#icon-cart"
                      ></use>
                    </svg>
                  </button>
        <ul class="links">
            <li><img src="${W}" class="amazon"></li>
            <li><img src="${j}" class="apple-book"></li>
        </ul>
</div>
  `}const n=`
  <div class="shoplist-error container is-active">
<div class="support-ukraine">
    <a href="./partials/support-ukraine.html"></a>
  </div>;
        <div class="shoplist-error">
<h1 class="shoplist-title error">
              Shopping
              <span class="shoplist-title-span">List</span>
            </h1>
<div class="shoplist-error-content">
    <p class="shoplist-error-text">This page is empty, add some books and proceed to order.</p>
    <img src="${"images/shopping-list/"+"books-tab-2x.png"}" alt="books" class="shoplist-error-books">
</div>
</div>`,o=document.querySelector(".shoplist");o.innerHTML=n;const i=H();function r(c){return c.map(e).join("")}const x=document.getElementById("bookListContainer");i.length===0?x.innerHTML=n:O(i);function H(){const c=localStorage.getItem("books");return c?JSON.parse(c):[]}const I=document.querySelector(".shoplist-title");function O(c){const m=r(c);I.insertAdjacentHTML("beforeend",m),lightbox.refresh()}});shoppingListContainer.addEventListener("click",function(e){const t=e.target;if(e.target.parentNode.nodeName==="BUTTON"||e.target.nodeName==="BUTTON"){const s=t.closest(".container-block"),n=s.getAttribute("#id");let o=[];const i=infoItemLocalStorage(TASKS_KEY);for(const r of i)r.constID!==n&&o.push(r);addItemLocalStorage(TASKS_KEY,o),s.remove(),shoppingListContainer.querySelector(".container-block")||(shoppingListContainer.innerHTML=emptyMessage)}});addToShoppingList();
//# sourceMappingURL=main-cca3ce74.js.map
