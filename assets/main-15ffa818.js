import{a as c,i as g}from"./vendor-ec2233ad.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const L=document.querySelector(".header-switch"),b=document.querySelector("body"),f=document.querySelector(".header"),$=document.querySelector(".header-logo-svg"),C=document.querySelector(".shop-list-svg-basket");document.querySelector(".header-nav");document.querySelector(".home");const E=document.querySelector(".header-menu"),F=localStorage.getItem("darkTheme");F==="true"?(document.body.classList.add("dark-theme"),M()):B();L.addEventListener("click",()=>{L.checked?(document.body.classList.add("dark-theme"),localStorage.setItem("darkTheme","true"),M()):(document.body.classList.remove("dark-theme"),localStorage.setItem("darkTheme","false"),B())});function M(){b.style.backgroundColor="#202024",b.style.color="#ffffff",f.style.backgroundColor="#111111",f.style.borderColor="#ffffff",E.innerHTML='<svg width="28" height="28"><use href="./images/icons/symbol-defs.svg#icon-menu2"></use></svg>',$.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="./images/icons/symbol-defs.svg#icon-logo2"></use></svg>',C.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="./images/icons/symbol-defs.svg#icon-icon-basket2"></use></svg>'}function B(){b.style.backgroundColor="#F6F6F6",b.style.color="#111111",f.style.backgroundColor="#ffffff",f.style.borderColor="#111111",E.innerHTML='<svg width="28" height="28"><use href="./images/icons/symbol-defs.svg#icon-menu"></use></svg>',$.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="./images/icons/symbol-defs.svg#icon-logo"></use></svg>',C.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="./images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>'}function K(){const e=document.getElementById("burgerToggle"),o=document.getElementById("burgerMenu");e.addEventListener("click",function(){o.classList.toggle("burger-menu-show"),o.classList.contains("burger-menu-show")?e.innerHTML=`
        <svg width="18" height="18" stroke="#000">
          <use href="../images/icons/symbol-defs.svg#icon-close"></use>
        </svg>`:e.innerHTML=`
        <svg width="28" height="28">
          <use href="../images/icons/symbol-defs.svg#icon-menu"></use>
        </svg>`})}document.addEventListener("DOMContentLoaded",function(){K()});const Y=document.getElementById("home");document.getElementById("shopping-list");Y.classList.add("active");const q=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../images/blocks-img/save-the-children.png",imgRetinaTwo:"../images/blocks-img/save-the-children-2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../images/blocks-img/project-hope.png",imgRetinaTwo:"../images/blocks-img/project-hope-2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../images/blocks-img/medical-corps.png",imgRetinaTwo:"../images/blocks-img/medical-corps-2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../images/blocks-img/razom.png",imgRetinaTwo:"../images/blocks-img/razom-2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../images/blocks-img/action-against-hunger.png",imgRetinaTwo:"../images/blocks-img/action-against-hunger-2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../images/blocks-img/sergiy-prytula.png",imgRetinaTwo:"../images/blocks-img/sergiy-prytula-2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../images/blocks-img/sans-frontieres.png",imgRetinaTwo:"../images/blocks-img/sans-frontieres-2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../images/blocks-img/world-vision.png",imgRetinaTwo:"../images/blocks-img/world-vision-2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../images/blocks-img/united24.png",imgRetinaTwo:"../images/blocks-img/united24-2x.png"}],J=q.map((e,o)=>` <li class="support-item">
        <span class="support-number">${(o+1).toString().padStart(2,"0")}
        </span>
        <a href = "${e.url}" title = "${e.title}" target='_blank' rel="noopener noreferrer nofollow" aria-label="Link to support fond">
      <img src = "${e.img}" class="support-img" srcset="${e.img} 1x, ${e.imgRetinaTwo} 2x,alt = "${e.title} logo"/>
      </a>
      </li>`).join("");refs.list.innerHTML=J;H();addEventListener("resize",H);function U(){swiper.slideNext(),(swiper.isBeginning||swiper.isEnd)&&Q()}function H(){const e=refs.btn.classList.contains("hidden");q.length>swiper.params.slidesPerGroup?(e&&refs.btn.classList.remove("hidden"),refs.nextBtn.addEventListener("click",U)):e||refs.btn.classList.add("hidden")}function Q(){refs.btn.classList.toggle("support-btn--up")}const d=document.querySelector(".list-one"),T=document.querySelector(".list_categories"),a=document.querySelector(".main-title");document.querySelector(".home");let u;function G(){let e=window.innerWidth;return e<=767?0:e<=1439?2:4}function S(){const e=a.textContent.split(" "),o=e[e.length-1];a.innerHTML=a.innerHTML.replace(o,`<span class="blue">${o}</span>`)}async function _(e){d.innerHTML="";let o="";const s=G();for(let i in e){o+=`
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
                            </li>`,s==t)break;o+=`</ul><button class="button-see-more" data-category="${e[i].list_name}">See more</button></li>`}d.insertAdjacentHTML("beforeend",o)}d.addEventListener("click",async e=>{if(e.target.classList.contains("button-see-more")){const o=e.target.dataset.category;a.textContent=o;const s=a.textContent.split(" "),i=s[s.length-1];a.innerHTML=a.innerHTML.replace(i,`<span class="blue">${i}</span>`),await c.get(`https://books-backend.p.goit.global/books/category?category=${o}`).then(t=>{if(t.data.length===0)throw new Error("Sorry, books in the selected category were not found");v(t.data)}).catch(t=>g.error({title:"Error",message:t.message}))}});async function V(){d.innerHTML="",a.textContent==="Best Sellers Books"?await c.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");_(e.data)}).catch(e=>g.error({title:"Error",message:e.message})):await c.get(`https://books-backend.p.goit.global/books/category?category=${u}`).then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");v(e.data)}).catch(e=>g.error({title:"Error",message:e.message}))}V();async function Z(e){let o="";const s='<li tabindex="0" class="categoria">All categories</li>';e.forEach(t=>{o+=`<li tabindex="0" class="categoria">${t.list_name}</li>`}),T.insertAdjacentHTML("beforeend",o),T.insertAdjacentHTML("afterbegin",s),document.querySelectorAll(".categoria").forEach(t=>{t.addEventListener("click",async n=>{n.preventDefault(),u=n.target.textContent,u=u.replace(/ /g,"%20"),n.target.textContent!=="All categories"?(a.textContent=n.target.textContent,S(),await c.get(`https://books-backend.p.goit.global/books/category?category=${u}`).then(r=>{if(r.data.length===0)throw new Error("Sorry, books in the selected category were not found");v(r.data)}).catch(r=>g.error({title:"Error",message:r.message}))):(a.textContent="Best Sellers Books",S(),await c.get("https://books-backend.p.goit.global/books/top-books").then(r=>{if(r.data.length===0)throw new Error("Sorry, books in the selected category were not found");_(r.data)}).catch(r=>g.error({title:"Error",message:r.message})))})})}c.get("https://books-backend.p.goit.global/books/category-list").then(e=>{Z(e.data)}).catch(e=>g.error({title:"Error",message:e.message}));async function v(e){let o="";d.innerHTML="",e.forEach(s=>{o+=`<li class="book" data-category="${s._id}">
                        <div class="div-animation">
                            <img class="img-example" alt="Book title" src="${s.book_image}"></img>
                            <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                        </div>
                                <div class="box-cards">
                                    <p class="title-book">${s.title}</p>
                                    <p class="author-book">${s.author}</p>
                                </div>
                      </li>`}),d.insertAdjacentHTML("beforeend",o)}const X=document.querySelector(".box-quick-view");document.querySelector(".modal-btn");X.addEventListener("click",e=>{e.preventDefault();const s=e.target.closest(".img_example").dataset.category;`${s.book_image}${s.title}${s.author}${s.description}${s.buy_links.map(i=>{`${i.url}${i.name}${i.name}`}).join("")}`});const k=document.querySelector(".scrollToTop");window.onscroll=()=>{window.scrollY>500?k.classList.remove("isHide"):window.scrollY<500&&k.classList.add("isHide"),k.onclick=()=>{window.scrollTo(0,0)}};const ee=document.querySelector("h1");console.log(ee);const te=document.querySelector(".header-logo");console.log(te);const oe=document.querySelector(".shoplist-title");console.log(oe);document.addEventListener("DOMContentLoaded",function(){function e(l){const{_id:p,book_image:j,title:w,list_name:P,description:R,author:D,amazon_product_url:W,buy_links:z}=l;return`
<div class="container-block" id="${p}">    
    <img src="${j}" alt="${w}" class="shoplist-bookcover">
    <div class="shoplist">
        <h2 class="shoplist-title-book">${w}</h2>
        <p class="shoplist-category-book">${P}</p>
        <p class="shoplist-description">${R}</p>
        <p class="shoplist-author">${D}</p>
    </div>
        <button
                    id="deleteBtn"
                    type="button"
            class="shoplist-btn-delete"
            data-book-id="${p}"
                  >
                    <svg class="shoplist-btn-icon" width="16" height="16">
                      <use
                        href="./images/icons/symbol-defs.svg#icon-cart"
                      ></use>
                    </svg>
                  </button>
        <ul class="links">
            <li><img src="${W}" class="amazon"></li>
            <li><img src="${z}" class="apple-book"></li>
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
</div>`,t=document.querySelector(".shoplist");t.innerHTML=i;const n=O();function r(l){return l.map(e).join("")}const I=document.getElementById("bookListContainer");n.length===0?I.innerHTML=i:N(n);function O(){const l=localStorage.getItem("books");return l?JSON.parse(l):[]}const A=document.querySelector(".shoplist-title");function N(l){const p=r(l);A.insertAdjacentHTML("beforeend",p),lightbox.refresh()}});shoppingListContainer.addEventListener("click",function(e){const o=e.target;if(e.target.parentNode.nodeName==="BUTTON"||e.target.nodeName==="BUTTON"){const s=o.closest(".container-block"),i=s.getAttribute("#id");let t=[];const n=infoItemLocalStorage(TASKS_KEY);for(const r of n)r.constID!==i&&t.push(r);addItemLocalStorage(TASKS_KEY,t),s.remove(),shoppingListContainer.querySelector(".container-block")||(shoppingListContainer.innerHTML=emptyMessage)}});addToShoppingList();const h=document.querySelector(".add-remove-btn"),x=document.querySelector(".information"),y="checkout";let m=[];h.addEventListener("click",()=>{h.textContent.trim()==="add to shopping list"?(h.textContent="remove from the shopping list",x.classList.remove("visually-hidden"),m=JSON.parse(localStorage.getItem(y))??[],m.push(...m),localStorage.setItem(y,JSON.stringify(m))):(h.textContent="add to shopping list",x.classList.add("visually-hidden"),localStorage.removeItem(y),m=[])});
//# sourceMappingURL=main-15ffa818.js.map
