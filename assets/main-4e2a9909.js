import{S as Y,a as g,i as d}from"./vendor-466fabc0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const T=document.querySelector(".header-switch"),k=document.querySelector("body"),v=document.querySelector(".header"),E=document.querySelector(".header-logo-svg"),M=document.querySelector(".shop-list-svg-basket");document.querySelector(".header-nav");document.querySelector(".home");const B=document.querySelector(".header-menu"),J=localStorage.getItem("darkTheme");J==="true"?(document.body.classList.add("dark-theme"),q()):H();T.addEventListener("click",()=>{T.checked?(document.body.classList.add("dark-theme"),localStorage.setItem("darkTheme","true"),q()):(document.body.classList.remove("dark-theme"),localStorage.setItem("darkTheme","false"),H())});function q(){k.style.backgroundColor="#202024",k.style.color="#ffffff",v.style.backgroundColor="#111111",v.style.borderColor="#ffffff",B.innerHTML='<svg width="28" height="28"><use href="./images/icons/symbol-defs.svg#icon-menu2"></use></svg>',E.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="./images/icons/symbol-defs.svg#icon-logo2"></use></svg>',M.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="./images/icons/symbol-defs.svg#icon-icon-basket2"></use></svg>'}function H(){k.style.backgroundColor="#F6F6F6",k.style.color="#111111",v.style.backgroundColor="#ffffff",v.style.borderColor="#111111",B.innerHTML='<svg width="28" height="28"><use href="./images/icons/symbol-defs.svg#icon-menu"></use></svg>',E.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="./images/icons/symbol-defs.svg#icon-logo"></use></svg>',M.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="./images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>'}function U(){const e=document.getElementById("burgerToggle"),o=document.getElementById("burgerMenu");e.addEventListener("click",function(){o.classList.toggle("burger-menu-show"),o.classList.contains("burger-menu-show")?e.innerHTML=`
        <svg width="18" height="18" stroke="#000">
          <use href="../images/icons/symbol-defs.svg#icon-close"></use>
        </svg>`:e.innerHTML=`
        <svg width="28" height="28">
          <use href="../images/icons/symbol-defs.svg#icon-menu"></use>
        </svg>`})}document.addEventListener("DOMContentLoaded",function(){U()});const G=document.getElementById("home");document.getElementById("shopping-list");G.classList.add("active");const _=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../images/blocks-img/save-the-children.png",imgRetinaTwo:"../images/blocks-img/save-the-children-2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../images/blocks-img/project-hope.png",imgRetinaTwo:"../images/blocks-img/project-hope-2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../images/blocks-img/medical-corps.png",imgRetinaTwo:"../images/blocks-img/medical-corps-2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../images/blocks-img/razom.png",imgRetinaTwo:"../images/blocks-img/razom-2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../images/blocks-img/action-against-hunger.png",imgRetinaTwo:"../images/blocks-img/action-against-hunger-2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../images/blocks-img/sergiy-prytula.png",imgRetinaTwo:"../images/blocks-img/sergiy-prytula-2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../images/blocks-img/sans-frontieres.png",imgRetinaTwo:"../images/blocks-img/sans-frontieres-2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../images/blocks-img/world-vision.png",imgRetinaTwo:"../images/blocks-img/world-vision-2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../images/blocks-img/united24.png",imgRetinaTwo:"../images/blocks-img/united24-2x.png"}],f=new Y(".swiper",{direction:"vertical",navigation:{nextEl:".support-btn"},rewind:!0,allowTouchMove:!1,spaceBetween:20,slidesPerView:"auto",slidesPerGroup:4,breakpoints:{768:{slidesPerGroup:6}}}),c={nextBtn:document.querySelector(".support-btn"),list:document.querySelector(".swiper-wrapper"),btn:document.querySelector("support-btn-svg")},Q=_.map((e,o)=>` <li class="support-item">
        <span class="support-number">${(o+1).toString().padStart(2,"0")}
        </span>
        <a href = "${e.url}" title = "${e.title}" target='_blank' rel="noopener noreferrer nofollow" aria-label="Link to support fond">
      <img src = "${e.img}" class="support-img" srcset="${e.img} 1x, ${e.imgRetinaTwo} 2x,alt = "${e.title} logo"/>
      </a>
      </li>`).join("");c.list.innerHTML=Q;I();addEventListener("resize",I);function V(){f.slideNext(),(f.isBeginning||f.isEnd)&&Z()}function I(){const e=c.btn.classList.contains("hidden");_.length>f.params.slidesPerGroup?(e&&c.btn.classList.remove("hidden"),c.nextBtn.addEventListener("click",V)):e||c.btn.classList.add("hidden")}function Z(){c.btn.classList.toggle("support-btn--up")}const m=document.querySelector(".list-one"),x=document.querySelector(".list_categories"),a=document.querySelector(".main-title");document.querySelector(".home");let p;function X(){let e=window.innerWidth;return e<=767?0:e<=1439?2:4}function $(){const e=a.textContent.split(" "),o=e[e.length-1];a.innerHTML=a.innerHTML.replace(o,`<span class="blue">${o}</span>`)}async function O(e){m.innerHTML="";let o="";const s=X();for(let i in e){o+=`
            <li class="books_list">
                <h2 class="name_category">${e[i].list_name}</h2>
                <ul class="images_books">`;for(let t in e[i].books)if(o+=`<li class="image_book" data-category="${e[i].books[t]._id}">
                                    <div class="div-animation">
                                        <img class="img-example" alt="Book title" src="${e[i].books[t].book_image}"></img>
                                        <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                                    </div>
                                
                                <div class="box-cards">
                                    <p class="title-book">${e[i].books[t].title}</p>
                                    <p class="author-book">${e[i].books[t].author}</p>
                                </div>
                            </li>`,s==t)break;o+=`</ul><button class="button-see-more" data-category="${e[i].list_name}">See more</button></li>`}m.insertAdjacentHTML("beforeend",o)}m.addEventListener("click",async e=>{if(e.target.classList.contains("button-see-more")){const o=e.target.dataset.category;a.textContent=o;const s=a.textContent.split(" "),i=s[s.length-1];a.innerHTML=a.innerHTML.replace(i,`<span class="blue">${i}</span>`),await g.get(`https://books-backend.p.goit.global/books/category?category=${o}`).then(t=>{if(t.data.length===0)throw new Error("Sorry, books in the selected category were not found");L(t.data)}).catch(t=>d.error({title:"Error",message:t.message}))}});async function ee(){m.innerHTML="",a.textContent==="Best Sellers Books"?await g.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");O(e.data)}).catch(e=>d.error({title:"Error",message:e.message})):await g.get(`https://books-backend.p.goit.global/books/category?category=${p}`).then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");L(e.data)}).catch(e=>d.error({title:"Error",message:e.message}))}ee();async function te(e){let o="";const s='<li tabindex="0" class="categoria">All categories</li>';e.forEach(t=>{o+=`<li tabindex="0" class="categoria">${t.list_name}</li>`}),x.insertAdjacentHTML("beforeend",o),x.insertAdjacentHTML("afterbegin",s),document.querySelectorAll(".categoria").forEach(t=>{t.addEventListener("click",async n=>{n.preventDefault(),p=n.target.textContent,p=p.replace(/ /g,"%20"),n.target.textContent!=="All categories"?(a.textContent=n.target.textContent,$(),await g.get(`https://books-backend.p.goit.global/books/category?category=${p}`).then(r=>{if(r.data.length===0)throw new Error("Sorry, books in the selected category were not found");L(r.data)}).catch(r=>d.error({title:"Error",message:r.message}))):(a.textContent="Best Sellers Books",$(),await g.get("https://books-backend.p.goit.global/books/top-books").then(r=>{if(r.data.length===0)throw new Error("Sorry, books in the selected category were not found");O(r.data)}).catch(r=>d.error({title:"Error",message:r.message})))})})}g.get("https://books-backend.p.goit.global/books/category-list").then(e=>{te(e.data)}).catch(e=>d.error({title:"Error",message:e.message}));async function L(e){let o="";m.innerHTML="",e.forEach(s=>{o+=`<li class="book" data-category="${s._id}">
                        <div class="div-animation">
                            <img class="img-example" alt="Book title" src="${s.book_image}"></img>
                            <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                        </div>
                                <div class="box-cards">
                                    <p class="title-book">${s.title}</p>
                                    <p class="author-book">${s.author}</p>
                                </div>
                      </li>`}),m.insertAdjacentHTML("beforeend",o)}const oe=document.querySelector(".box-quick-view");document.querySelector(".modal-btn");oe.addEventListener("click",e=>{e.preventDefault();const s=e.target.closest(".img_example").dataset.category;`${s.book_image}${s.title}${s.author}${s.description}${s.buy_links.map(i=>{`${i.url}${i.name}${i.name}`}).join("")}`});const y=document.querySelector(".scrollToTop");window.onscroll=()=>{window.scrollY>500?y.classList.remove("isHide"):window.scrollY<500&&y.classList.add("isHide"),y.onclick=()=>{window.scrollTo(0,0)}};const se=document.querySelector("h1");console.log(se);const ie=document.querySelector(".header-logo");console.log(ie);const ne=document.querySelector(".shoplist-title");console.log(ne);document.addEventListener("DOMContentLoaded",function(){function e(l){const{_id:h,book_image:R,title:S,list_name:D,description:W,author:z,amazon_product_url:F,buy_links:K}=l;return`
<div class="container-block" id="${h}">    
    <img src="${R}" alt="${S}" class="shoplist-bookcover">
    <div class="shoplist">
        <h2 class="shoplist-title-book">${S}</h2>
        <p class="shoplist-category-book">${D}</p>
        <p class="shoplist-description">${W}</p>
        <p class="shoplist-author">${z}</p>
    </div>
        <button
                    id="deleteBtn"
                    type="button"
            class="shoplist-btn-delete"
            data-book-id="${h}"
                  >
                    <svg class="shoplist-btn-icon" width="16" height="16">
                      <use
                        href="./images/icons/symbol-defs.svg#icon-cart"
                      ></use>
                    </svg>
                  </button>
        <ul class="links">
            <li><img src="${F}" class="amazon"></li>
            <li><img src="${K}" class="apple-book"></li>
        </ul>
</div>
  `}const i=`
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
</div>`,t=document.querySelector(".shoplist");t.innerHTML=i;const n=P();function r(l){return l.map(e).join("")}const A=document.getElementById("bookListContainer");n.length===0?A.innerHTML=i:j(n);function P(){const l=localStorage.getItem("books");return l?JSON.parse(l):[]}const N=document.querySelector(".shoplist-title");function j(l){const h=r(l);N.insertAdjacentHTML("beforeend",h),lightbox.refresh()}});shoppingListContainer.addEventListener("click",function(e){const o=e.target;if(e.target.parentNode.nodeName==="BUTTON"||e.target.nodeName==="BUTTON"){const s=o.closest(".container-block"),i=s.getAttribute("#id");let t=[];const n=infoItemLocalStorage(TASKS_KEY);for(const r of n)r.constID!==i&&t.push(r);addItemLocalStorage(TASKS_KEY,t),s.remove(),shoppingListContainer.querySelector(".container-block")||(shoppingListContainer.innerHTML=emptyMessage)}});addToShoppingList();const b=document.querySelector(".add-remove-btn"),C=document.querySelector(".information"),w="checkout";let u=[];b.addEventListener("click",()=>{b.textContent.trim()==="add to shopping list"?(b.textContent="remove from the shopping list",C.classList.remove("visually-hidden"),u=JSON.parse(localStorage.getItem(w))??[],u.push(...u),localStorage.setItem(w,JSON.stringify(u))):(b.textContent="add to shopping list",C.classList.add("visually-hidden"),localStorage.removeItem(w),u=[])});
//# sourceMappingURL=main-4e2a9909.js.map
