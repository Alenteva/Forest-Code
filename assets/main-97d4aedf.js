import{a as c,i as g}from"./vendor-ec2233ad.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const v=document.querySelector(".header-switch"),p=document.querySelector("body"),h=document.querySelector(".header"),S=document.querySelector(".header-logo-svg"),T=document.querySelector(".shop-list-svg-basket");document.querySelector(".header-nav");document.querySelector(".home");const x=document.querySelector(".header-menu"),z=localStorage.getItem("darkTheme");z==="true"?(document.body.classList.add("dark-theme"),B()):C();v.addEventListener("click",()=>{v.checked?(document.body.classList.add("dark-theme"),localStorage.setItem("darkTheme","true"),B()):(document.body.classList.remove("dark-theme"),localStorage.setItem("darkTheme","false"),C())});function B(){p.style.backgroundColor="#202024",p.style.color="#ffffff",h.style.backgroundColor="#111111",h.style.borderColor="#ffffff",x.innerHTML='<svg width="28" height="28"><use href="./images/icons/symbol-defs.svg#icon-menu2"></use></svg>',S.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="./images/icons/symbol-defs.svg#icon-logo2"></use></svg>',T.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="./images/icons/symbol-defs.svg#icon-icon-basket2"></use></svg>'}function C(){p.style.backgroundColor="#F6F6F6",p.style.color="#111111",h.style.backgroundColor="#ffffff",h.style.borderColor="#111111",x.innerHTML='<svg width="28" height="28"><use href="./images/icons/symbol-defs.svg#icon-menu"></use></svg>',S.innerHTML='<svg class="header-logo-svg" width="109" height="28"><use href="./images/icons/symbol-defs.svg#icon-logo"></use></svg>',T.innerHTML='<svg class="shop-list-svg-basket" width="14" height="18"><use href="./images/icons/symbol-defs.svg#icon-icon-basket"></use></svg>'}function D(){const e=document.getElementById("burgerToggle"),t=document.getElementById("burgerMenu");e.addEventListener("click",function(){t.classList.toggle("burger-menu-show"),t.classList.contains("burger-menu-show")?e.innerHTML=`
        <svg width="18" height="18" stroke="#000">
          <use href="../images/icons/symbol-defs.svg#icon-close"></use>
        </svg>`:e.innerHTML=`
        <svg width="28" height="28">
          <use href="../images/icons/symbol-defs.svg#icon-menu"></use>
        </svg>`})}document.addEventListener("DOMContentLoaded",function(){D()});const F=document.getElementById("home");document.getElementById("shopping-list");F.classList.add("active");const E=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../images/blocks-img/save-the-children.png",imgRetinaTwo:"../images/blocks-img/save-the-children-2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../images/blocks-img/project-hope.png",imgRetinaTwo:"../images/blocks-img/project-hope-2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../images/blocks-img/medical-corps.png",imgRetinaTwo:"../images/blocks-img/medical-corps-2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../images/blocks-img/razom.png",imgRetinaTwo:"../images/blocks-img/razom-2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../images/blocks-img/action-against-hunger.png",imgRetinaTwo:"../images/blocks-img/action-against-hunger-2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../images/blocks-img/sergiy-prytula.png",imgRetinaTwo:"../images/blocks-img/sergiy-prytula-2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../images/blocks-img/sans-frontieres.png",imgRetinaTwo:"../images/blocks-img/sans-frontieres-2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../images/blocks-img/world-vision.png",imgRetinaTwo:"../images/blocks-img/world-vision-2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../images/blocks-img/united24.png",imgRetinaTwo:"../images/blocks-img/united24-2x.png"}],J=E.map((e,t)=>` <li class="support-item">
        <span class="support-number">${(t+1).toString().padStart(2,"0")}
        </span>
        <a href = "${e.url}" title = "${e.title}" target='_blank' rel="noopener noreferrer nofollow" aria-label="Link to support fond">
      <img src = "${e.img}" class="support-img" srcset="${e.img} 1x, ${e.imgRetinaTwo} 2x,alt = "${e.title} logo"/>
      </a>
      </li>`).join("");refs.list.innerHTML=J;M();addEventListener("resize",M);function K(){swiper.slideNext(),(swiper.isBeginning||swiper.isEnd)&&Y()}function M(){const e=refs.btn.classList.contains("hidden");E.length>swiper.params.slidesPerGroup?(e&&refs.btn.classList.remove("hidden"),refs.nextBtn.addEventListener("click",K)):e||refs.btn.classList.add("hidden")}function Y(){refs.btn.classList.toggle("support-btn--up")}const d=document.querySelector(".list-one"),w=document.querySelector(".list_categories"),a=document.querySelector(".main-title");document.querySelector(".home");let m;function U(){let e=window.innerWidth;return e<=767?0:e<=1439?2:4}function L(){const e=a.textContent.split(" "),t=e[e.length-1];a.innerHTML=a.innerHTML.replace(t,`<span class="blue">${t}</span>`)}async function $(e){d.innerHTML="";let t="";const r=U();for(let i in e){t+=`
            <li class="books_list">
                <h2 class="name_category">${e[i].list_name}</h2>
                <ul class="images_books">`;for(let o in e[i].books)if(t+=`<li class="image_book" data-category="${e[i].books[o]._id}">
                                    <div class="div-animation">
                                        <img class="img-example" alt="Book title" src="${e[i].books[o].book_image}"></img>
                                        <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                                    </div>
                                
                                <div class="box-cards">
                                    <p class="title-book">${e[i].books[o].title}</p>
                                    <p class="author-book">${e[i].books[o].author}</p>
                                </div>
                            </li>`,r==o)break;t+=`</ul><button class="button-see-more" data-category="${e[i].list_name}">See more</button></li>`}d.insertAdjacentHTML("beforeend",t)}d.addEventListener("click",async e=>{if(e.target.classList.contains("button-see-more")){const t=e.target.dataset.category;a.textContent=t;const r=a.textContent.split(" "),i=r[r.length-1];a.innerHTML=a.innerHTML.replace(i,`<span class="blue">${i}</span>`),await c.get(`https://books-backend.p.goit.global/books/category?category=${t}`).then(o=>{if(o.data.length===0)throw new Error("Sorry, books in the selected category were not found");k(o.data)}).catch(o=>g.error({title:"Error",message:o.message}))}});async function Q(){d.innerHTML="",a.textContent==="Best Sellers Books"?await c.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");$(e.data)}).catch(e=>g.error({title:"Error",message:e.message})):await c.get(`https://books-backend.p.goit.global/books/category?category=${m}`).then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");k(e.data)}).catch(e=>g.error({title:"Error",message:e.message}))}Q();async function G(e){let t="";const r='<li tabindex="0" class="categoria">All categories</li>';e.forEach(o=>{t+=`<li tabindex="0" class="categoria">${o.list_name}</li>`}),w.insertAdjacentHTML("beforeend",t),w.insertAdjacentHTML("afterbegin",r),document.querySelectorAll(".categoria").forEach(o=>{o.addEventListener("click",async s=>{s.preventDefault(),m=s.target.textContent,m=m.replace(/ /g,"%20"),s.target.textContent!=="All categories"?(a.textContent=s.target.textContent,L(),await c.get(`https://books-backend.p.goit.global/books/category?category=${m}`).then(n=>{if(n.data.length===0)throw new Error("Sorry, books in the selected category were not found");k(n.data)}).catch(n=>g.error({title:"Error",message:n.message}))):(a.textContent="Best Sellers Books",L(),await c.get("https://books-backend.p.goit.global/books/top-books").then(n=>{if(n.data.length===0)throw new Error("Sorry, books in the selected category were not found");$(n.data)}).catch(n=>g.error({title:"Error",message:n.message})))})})}c.get("https://books-backend.p.goit.global/books/category-list").then(e=>{G(e.data)}).catch(e=>g.error({title:"Error",message:e.message}));async function k(e){let t="";d.innerHTML="",e.forEach(r=>{t+=`<li class="book" data-category="${r._id}">
                        <div class="div-animation">
                            <img class="img-example" alt="Book title" src="${r.book_image}"></img>
                            <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                        </div>
                                <div class="box-cards">
                                    <p class="title-book">${r.title}</p>
                                    <p class="author-book">${r.author}</p>
                                </div>
                      </li>`}),d.insertAdjacentHTML("beforeend",t)}document.querySelector(".img-example");document.querySelector(".content-title");document.querySelector(".content-descr");document.querySelector(".modal-descr");document.querySelector(".amazon");document.querySelector(".apple");const f=document.querySelector("#add"),q=document.querySelector(".hidden-information");f.addEventListener("click",Z);function Z(e){const t=e.target.attributes.id.value;f.textContent==="Add to shopping list"?V(t):X(t)}function V(e){let t=localStorage.getItem("idBooks");(t==="undefined"||!t||t==="")&&(t=[],localStorage.setItem("idBooks",JSON.stringify(t)),t=JSON.parse(localStorage.getItem("idBooks")),t.push(e),localStorage.setItem("idBooks",JSON.stringify(t)),f.textContent="Remove from shopping list",q.classList.remove("visually-hidden"))}function X(e){let t=JSON.parse(localStorage.getItem("idBooks"));t.splice(t.indexOf(e),1),localStorage.setItem("idBooks",JSON.stringify(t)),f.textContent="Add to shopping list",q.classList.add("visually-hidden")}const b=document.querySelector(".scrollToTop");window.onscroll=()=>{window.scrollY>500?b.classList.remove("isHide"):window.scrollY<500&&b.classList.add("isHide"),b.onclick=()=>{window.scrollTo(0,0)}};const ee=document.querySelector("h1");console.log(ee);const te=document.querySelector(".header-logo");console.log(te);const oe=document.querySelector(".shoplist-title");console.log(oe);document.addEventListener("DOMContentLoaded",function(){function e(l){const{_id:u,book_image:A,title:y,list_name:N,description:R,author:j,amazon_product_url:P,buy_links:W}=l;return`
<div class="container-block" id="${u}">    
    <img src="${A}" alt="${y}" class="shoplist-bookcover">
    <div class="shoplist">
        <h2 class="shoplist-title-book">${y}</h2>
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
            <li><img src="${W}" class="apple-book"></li>
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
</div>`,o=document.querySelector(".shoplist");o.innerHTML=i;const s=O();function n(l){return l.map(e).join("")}const H=document.getElementById("bookListContainer");s.length===0?H.innerHTML=i:_(s);function O(){const l=localStorage.getItem("books");return l?JSON.parse(l):[]}const I=document.querySelector(".shoplist-title");function _(l){const u=n(l);I.insertAdjacentHTML("beforeend",u),lightbox.refresh()}});shoppingListContainer.addEventListener("click",function(e){const t=e.target;if(e.target.parentNode.nodeName==="BUTTON"||e.target.nodeName==="BUTTON"){const r=t.closest(".container-block"),i=r.getAttribute("#id");let o=[];const s=infoItemLocalStorage(TASKS_KEY);for(const n of s)n.constID!==i&&o.push(n);addItemLocalStorage(TASKS_KEY,o),r.remove(),shoppingListContainer.querySelector(".container-block")||(shoppingListContainer.innerHTML=emptyMessage)}});addToShoppingList();
//# sourceMappingURL=main-97d4aedf.js.map
