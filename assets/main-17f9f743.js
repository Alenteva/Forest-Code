import{a as l,i as g}from"./vendor-ec2233ad.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const w=document.querySelector(".header-switch"),p=document.querySelector("body"),h=document.querySelector(".header"),T=document.querySelector(".header-logo-svg"),b=document.querySelector(".shop-list-svg-basket");document.querySelector(".header-nav");document.querySelector(".home");const B=document.querySelector(".header-menu"),W=document.querySelector(".shop-list"),z=localStorage.getItem("darkTheme");z==="true"?(document.body.classList.add("dark-theme"),E()):x();w.addEventListener("click",()=>{w.checked?(document.body.classList.add("dark-theme"),localStorage.setItem("darkTheme","true"),E()):(document.body.classList.remove("dark-theme"),localStorage.setItem("darkTheme","false"),x())});function E(){p.style.backgroundColor="#202024",p.style.color="#ffffff",h.style.backgroundColor="#111111",h.style.borderColor="#ffffff",B.innerHTML='<svg width="28" height="28"><use href="./images/icons/symbol-defs.svg#icon-menu2"></use></svg>',T.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="./images/icons/symbol-defs.svg#icon-logo2"></use></svg>',W.classList.contains("active")?b.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="./images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>':b.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="./images/icons/symbol-defs.svg#icon-icon-basket2"></use></svg>'}function x(){p.style.backgroundColor="#F6F6F6",p.style.color="#111111",h.style.backgroundColor="#ffffff",h.style.borderColor="#111111",B.innerHTML='<svg width="28" height="28"><use href="./images/icons/symbol-defs.svg#icon-menu"></use></svg>',T.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="./images/icons/symbol-defs.svg#icon-logo"></use></svg>',b.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="./images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>'}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".home"),t=document.querySelector(".shop-list");e.addEventListener("click",function(){e.classList.add("active"),t.classList.remove("active"),localStorage.setItem("activeButton","home")}),t.addEventListener("click",function(){t.classList.add("active"),e.classList.remove("active"),localStorage.setItem("activeButton","shop")});const i=localStorage.getItem("activeButton");i==="home"?e.classList.add("active"):i==="shop"&&t.classList.add("active")});function F(){const e=document.getElementById("burgerToggle"),t=document.getElementById("burgerMenu");e.addEventListener("click",function(){t.classList.toggle("burger-menu-show"),t.classList.contains("burger-menu-show")?e.innerHTML=`
        <svg width="18" height="18" stroke="#000">
          <use href="../images/icons/symbol-defs.svg#icon-close"></use>
        </svg>`:e.innerHTML=`
        <svg width="28" height="28">
          <use href="../images/icons/symbol-defs.svg#icon-menu"></use>
        </svg>`})}document.addEventListener("DOMContentLoaded",function(){F()});const J=document.getElementById("home");document.getElementById("shopping-list");J.classList.add("active");const C=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../images/blocks-img/save-the-children.png",imgRetinaTwo:"../images/blocks-img/save-the-children-2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../images/blocks-img/project-hope.png",imgRetinaTwo:"../images/blocks-img/project-hope-2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../images/blocks-img/medical-corps.png",imgRetinaTwo:"../images/blocks-img/medical-corps-2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../images/blocks-img/razom.png",imgRetinaTwo:"../images/blocks-img/razom-2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../images/blocks-img/action-against-hunger.png",imgRetinaTwo:"../images/blocks-img/action-against-hunger-2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../images/blocks-img/sergiy-prytula.png",imgRetinaTwo:"../images/blocks-img/sergiy-prytula-2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../images/blocks-img/sans-frontieres.png",imgRetinaTwo:"../images/blocks-img/sans-frontieres-2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../images/blocks-img/world-vision.png",imgRetinaTwo:"../images/blocks-img/world-vision-2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../images/blocks-img/united24.png",imgRetinaTwo:"../images/blocks-img/united24-2x.png"}],K=C.map((e,t)=>` <li class="support-item">
        <span class="support-number">${(t+1).toString().padStart(2,"0")}
        </span>
        <a href = "${e.url}" title = "${e.title}" target='_blank' rel="noopener noreferrer nofollow" aria-label="Link to support fond">
      <img src = "${e.img}" class="support-img" srcset="${e.img} 1x, ${e.imgRetinaTwo} 2x,alt = "${e.title} logo"/>
      </a>
      </li>`).join("");refs.list.innerHTML=K;M();addEventListener("resize",M);function Y(){swiper.slideNext(),(swiper.isBeginning||swiper.isEnd)&&U()}function M(){const e=refs.btn.classList.contains("hidden");C.length>swiper.params.slidesPerGroup?(e&&refs.btn.classList.remove("hidden"),refs.nextBtn.addEventListener("click",Y)):e||refs.btn.classList.add("hidden")}function U(){refs.btn.classList.toggle("support-btn--up")}const d=document.querySelector(".list-one"),L=document.querySelector(".list_categories"),a=document.querySelector(".main-title");document.querySelector(".home");let m;function Q(){let e=window.innerWidth;return e<=767?0:e<=1439?2:4}function S(){const e=a.textContent.split(" "),t=e[e.length-1];a.innerHTML=a.innerHTML.replace(t,`<span class="blue">${t}</span>`)}async function q(e){d.innerHTML="";let t="";const i=Q();for(let n in e){t+=`
            <li class="books_list">
                <h2 class="name_category">${e[n].list_name}</h2>
                <ul class="images_books">`;for(let o in e[n].books)if(t+=`<li class="image_book" data-category="${e[n].books[o]._id}">
                                    <div class="div-animation">
                                        <img class="img-example" alt="Book title" src="${e[n].books[o].book_image}"></img>
                                        <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                                    </div>
                                
                                <div class="box-cards">
                                    <p class="title-book">${e[n].books[o].title}</p>
                                    <p class="author-book">${e[n].books[o].author}</p>
                                </div>
                            </li>`,i==o)break;t+=`</ul><button class="button-see-more" data-category="${e[n].list_name}">See more</button></li>`}d.insertAdjacentHTML("beforeend",t)}d.addEventListener("click",async e=>{if(e.target.classList.contains("button-see-more")){const t=e.target.dataset.category;a.textContent=t;const i=a.textContent.split(" "),n=i[i.length-1];a.innerHTML=a.innerHTML.replace(n,`<span class="blue">${n}</span>`),await l.get(`https://books-backend.p.goit.global/books/category?category=${t}`).then(o=>{if(o.data.length===0)throw new Error("Sorry, books in the selected category were not found");y(o.data)}).catch(o=>g.error({title:"Error",message:o.message}))}});async function G(){d.innerHTML="",a.textContent==="Best Sellers Books"?await l.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");q(e.data)}).catch(e=>g.error({title:"Error",message:e.message})):await l.get(`https://books-backend.p.goit.global/books/category?category=${m}`).then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");y(e.data)}).catch(e=>g.error({title:"Error",message:e.message}))}G();async function Z(e){let t="";const i='<li tabindex="0" class="categoria">All categories</li>';e.forEach(o=>{t+=`<li tabindex="0" class="categoria">${o.list_name}</li>`}),L.insertAdjacentHTML("beforeend",t),L.insertAdjacentHTML("afterbegin",i),document.querySelectorAll(".categoria").forEach(o=>{o.addEventListener("click",async s=>{s.preventDefault(),m=s.target.textContent,m=m.replace(/ /g,"%20"),s.target.textContent!=="All categories"?(a.textContent=s.target.textContent,S(),await l.get(`https://books-backend.p.goit.global/books/category?category=${m}`).then(r=>{if(r.data.length===0)throw new Error("Sorry, books in the selected category were not found");y(r.data)}).catch(r=>g.error({title:"Error",message:r.message}))):(a.textContent="Best Sellers Books",S(),await l.get("https://books-backend.p.goit.global/books/top-books").then(r=>{if(r.data.length===0)throw new Error("Sorry, books in the selected category were not found");q(r.data)}).catch(r=>g.error({title:"Error",message:r.message})))})})}l.get("https://books-backend.p.goit.global/books/category-list").then(e=>{Z(e.data)}).catch(e=>g.error({title:"Error",message:e.message}));async function y(e){let t="";d.innerHTML="",e.forEach(i=>{t+=`<li class="book" data-category="${i._id}">
                        <div class="div-animation">
                            <img class="img-example" alt="Book title" src="${i.book_image}"></img>
                            <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                        </div>
                                <div class="box-cards">
                                    <p class="title-book">${i.title}</p>
                                    <p class="author-book">${i.author}</p>
                                </div>
                      </li>`}),d.insertAdjacentHTML("beforeend",t)}document.querySelector(".img-example");document.querySelector(".content-title");document.querySelector(".content-descr");document.querySelector(".modal-descr");document.querySelector(".amazon");document.querySelector(".apple");const f=document.querySelector("#add"),$=document.querySelector(".hidden-information");f.addEventListener("click",V);function V(e){const t=e.target.attributes.id.value;f.textContent==="Add to shopping list"?X(t):ee(t)}function X(e){let t=localStorage.getItem("idBooks");(t==="undefined"||!t||t==="")&&(t=[],localStorage.setItem("idBooks",JSON.stringify(t)),t=JSON.parse(localStorage.getItem("idBooks")),t.push(e),localStorage.setItem("idBooks",JSON.stringify(t)),f.textContent="Remove from shopping list",$.classList.remove("visually-hidden"))}function ee(e){let t=JSON.parse(localStorage.getItem("idBooks"));t.splice(t.indexOf(e),1),localStorage.setItem("idBooks",JSON.stringify(t)),f.textContent="Add to shopping list",$.classList.add("visually-hidden")}const k=document.querySelector(".scrollToTop");window.onscroll=()=>{window.scrollY>500?k.classList.remove("isHide"):window.scrollY<500&&k.classList.add("isHide"),k.onclick=()=>{window.scrollTo(0,0)}};const te=document.querySelector("h1");console.log(te);const oe=document.querySelector(".header-logo");console.log(oe);const se=document.querySelector(".shoplist-title");console.log(se);document.addEventListener("DOMContentLoaded",function(){function e(c){const{_id:u,book_image:A,title:v,list_name:N,description:R,author:j,amazon_product_url:P,buy_links:D}=c;return`
<div class="container-block" id="${u}">    
    <img src="${A}" alt="${v}" class="shoplist-bookcover">
    <div class="shoplist">
        <h2 class="shoplist-title-book">${v}</h2>
        <p class="shoplist-category-book">${N}</p>
        <p class="shoplist-description">${R}</p>
        <p class="shoplist-author">${j}</p>
    </div>
        <button
                    id="deleteBtn"
                    type="button"
            class="shoplist-btn-delete"
            data-book-id="${u}"
                  >
                    <svg class="shoplist-btn-icon" width="16" height="16">
                      <use
                        href="./images/icons/symbol-defs.svg#icon-cart"
                      ></use>
                    </svg>
                  </button>
        <ul class="links">
            <li><img src="${P}" class="amazon"></li>
            <li><img src="${D}" class="apple-book"></li>
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
</div>`,o=document.querySelector(".shoplist");o.innerHTML=n;const s=I();function r(c){return c.map(e).join("")}const H=document.getElementById("bookListContainer");s.length===0?H.innerHTML=n:_(s);function I(){const c=localStorage.getItem("books");return c?JSON.parse(c):[]}const O=document.querySelector(".shoplist-title");function _(c){const u=r(c);O.insertAdjacentHTML("beforeend",u),lightbox.refresh()}});shoppingListContainer.addEventListener("click",function(e){const t=e.target;if(e.target.parentNode.nodeName==="BUTTON"||e.target.nodeName==="BUTTON"){const i=t.closest(".container-block"),n=i.getAttribute("#id");let o=[];const s=infoItemLocalStorage(TASKS_KEY);for(const r of s)r.constID!==n&&o.push(r);addItemLocalStorage(TASKS_KEY,o),i.remove(),shoppingListContainer.querySelector(".container-block")||(shoppingListContainer.innerHTML=emptyMessage)}});addToShoppingList();
//# sourceMappingURL=main-17f9f743.js.map
