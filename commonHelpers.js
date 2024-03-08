import"./assets/support-ukraine-77f38986.js";import{a as l,i as c}from"./assets/vendor-7539751a.js";const f="/Forest-Code/assets/icon-4664cafe.svg";function E(){const e=document.getElementById("burgerToggle"),o=document.getElementById("burgerMenu");e.addEventListener("click",function(){o.classList.toggle("burger-menu-show"),o.classList.contains("burger-menu-show")?e.innerHTML=`
      <svg width="18" height="18" class="stroke-color-ber-menu">
        <use href="${f}#icon-close"></use>
      </svg>`:e.innerHTML=`
      <svg width="28" height="28" class="fill-color-ber-menu">
        <use href="${f}#icon-menu-burg"></use>
      </svg>`})}document.addEventListener("DOMContentLoaded",function(){E()});const x=document.getElementById("home");document.getElementById("shopping-list");x.classList.add("active");const g=document.querySelector(".list-one"),h=document.querySelector(".list_categories"),n=document.querySelector(".main-title"),p=document.querySelector(".container-loader");let m;function T(){let e=window.innerWidth;return e<=767?0:e<=1439?2:4}function w(){const e=n.textContent.split(" "),o=e[e.length-1];n.innerHTML=n.innerHTML.replace(o,`<span class="blue">${o}</span>`)}async function v(e){let o="";const t=T();for(let s in e){o+=`
            <li class="books_list">
                <h2 class="name_category">${e[s].list_name}</h2>
                <ul class="images_books">`;for(let a in e[s].books)if(o+=`<li class="image_book" data-category="${e[s].books[a]._id}">
                                    <div class="div-animation">
                                            <img data-category="${e[s].books[a]._id}" class="img-example" alt="Book title" src="${e[s].books[a].book_image}"></img>
                                        <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                                    </div>
                                
                                <div class="box-cards">
                                    <p class="title-book">${e[s].books[a].title}</p>
                                    <p class="author-book">${e[s].books[a].author}</p>
                                </div>
                            </li>`,t==a)break;o+=`</ul><button class="button-see-more" data-category="${e[s].list_name}">See more</button></li>`}g.insertAdjacentHTML("beforeend",o),p.style.display="none"}g.addEventListener("click",async e=>{if(e.target.classList.contains("button-see-more")){p.style.display="block",g.innerHTML="";const o=e.target.dataset.category;n.textContent=o,h.querySelector(".categoria")&&h.querySelectorAll(".categoria").forEach(r=>{n.textContent===r.textContent&&(document.querySelector(".selected-categories").classList.remove("selected-categories"),r.classList.add("selected-categories"))});const t=n.textContent.split(" "),s=t[t.length-1];n.innerHTML=n.innerHTML.replace(s,`<span class="blue">${s}</span>`),await l.get(`https://books-backend.p.goit.global/books/category?category=${o}`).then(a=>{if(a.data.length===0)throw new Error("Sorry, books in the selected category were not found");b(a.data)}).catch(a=>c.error({title:"Error",message:a.message}))}});async function B(){g.innerHTML="",p.style.display="block",n.textContent==="Best Sellers Books"?await l.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");v(e.data)}).catch(e=>c.error({title:"Error",message:e.message})):await l.get(`https://books-backend.p.goit.global/books/category?category=${m}`).then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");b(e.data)}).catch(e=>c.error({title:"Error",message:e.message}))}B();async function M(e){let o="";const t='<li tabindex="0" data-name="Best Sellers Books" class="categoria selected-categories">All categories</li>';e.forEach(a=>{o+=`<li tabindex="0" data-name="${a.list_name}" class="categoria">${a.list_name}</li>`}),h.insertAdjacentHTML("beforeend",o),h.insertAdjacentHTML("afterbegin",t),document.querySelectorAll(".categoria").forEach(a=>{a.addEventListener("click",async r=>{p.style.display="block",g.innerHTML="",r.preventDefault(),document.querySelector(".selected-categories").classList.remove("selected-categories"),r.target.classList.add("selected-categories"),m=r.target.textContent,m=m.replace(/ /g,"%20"),r.target.textContent!=="All categories"?(n.textContent=r.target.textContent,w(),await l.get(`https://books-backend.p.goit.global/books/category?category=${m}`).then(i=>{if(i.data.length===0)throw new Error("Sorry, books in the selected category were not found");b(i.data)}).catch(i=>c.error({title:"Error",message:i.message}))):(n.textContent="Best Sellers Books",w(),await l.get("https://books-backend.p.goit.global/books/top-books").then(i=>{if(i.data.length===0)throw new Error("Sorry, books in the selected category were not found");v(i.data)}).catch(i=>c.error({title:"Error",message:i.message})))})})}l.get("https://books-backend.p.goit.global/books/category-list").then(e=>{M(e.data)}).catch(e=>c.error({title:"Error",message:e.message}));async function b(e){console.log("ok");let o="";e.forEach(async t=>{o+=`<li class="book" data-category="${t._id}">
                        <div class="div-animation">
                        <img data-category="${t._id}" class="img-example" alt="Book title" src="${t.book_image}"></img>
                            <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                        </div>
                                <div class="box-cards">
                                    <p class="title-book">${t.title}</p>
                                    <p class="author-book">${t.author}</p>
                                </div>
                      </li>`}),g.insertAdjacentHTML("beforeend",o),p.style.display="none"}const C=document.querySelector(".list-one");let d=S();_();let u,L;const $=document.querySelector(".modal-window-shop");C.addEventListener("click",async e=>{if(e.target.classList.contains("box-quick-view")){const o=e.target.parentNode.parentNode.dataset.category;y(o)}else if(e.target.classList.contains("animation-paragraf")){const o=e.target.parentNode.parentNode.parentNode.dataset.category;y(o)}else if(e.target.classList.contains("img-example")){const o=e.target.dataset.category;y(o)}});async function y(e){H(),u&&document.body.classList.add("modal-open"),console.log("ok renderBook");const t=(await l.get(`https://books-backend.p.goit.global/books/${e}`)).data;L={title:t.title,book_image:t.book_image,author:t.author,description:t.description,id:t._id,category:t.list_name,link_amazon:t.buy_links[0].url,link_goto:t.buy_links[1].url};let s=`
      <span>
          <svg class="close-window" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="close-window" d="M21 7L7 21M7 7L21 21" stroke="#111111" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
      </span>
      <div class="main-modal-window-content">
          <div class="modal-image-container"><img class="modal-image" src="${t.book_image}" alt="${t.title}"></div>
          <div class="modal-main-content-text">
              <h2 class="">${t.title}</h2>
              <p class="book-author">${t.author}</p>
              <p class="modal-book-description">${t.description}</p>
              <div class="links-books">

                  <a class="" href="${t.buy_links[0].url}" rel="amazon ${t.title}" target="_blank"><img src="./images/myPhotos/amazon.png" alt="amazon" class="filter-img"></a>
                  <a class="" href="${t.buy_links[1].url}" rel="apple-book ${t.title}" target="_blank"><img src="./images/myPhotos/book.png" alt="apple-book" class="filter-img"></a>

              </div>
          </div>
      </div>
      `;d.has(t.title)?s+=`<button class="card-books-category-button margin-add" type="button" data-id="${t._id}" data-title="${t.title}">Remove from the shopping list</button>
            <p id="congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>`:s+=`<button class="card-books-category-button margin-add" type="button" data-id="${t._id}" data-title="${t.title}">Add to shopping list</button>
              <p id="congratulations" hidden>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>`,document.querySelector(".modal-content").innerHTML=s,document.querySelector(".modal-window-shop").style.display="block"}$.addEventListener("click",async e=>{e.target.classList.contains("close-window")||e.target.classList.contains("modal-window-shop")?(document.querySelector(".modal-window-shop").style.display="none",u&&document.body.classList.remove("modal-open")):e.target.classList.contains("card-books-category-button")&&q(e.target)});document.addEventListener("keydown",e=>{e.key==="Escape"&&($.style.display="none",u&&document.body.classList.remove("modal-open"))});async function q(e){try{if(e.textContent==="Add to shopping list"){if(d.has(e.dataset.title))throw new Error("This book has added");d.set(e.dataset.title,L),e.textContent="Remove from the shopping list",document.querySelector("#congratulations").removeAttribute("hidden")}else d.delete(e.dataset.title),e.textContent="Add to shopping list",document.querySelector("#congratulations").setAttribute("hidden","")}catch(o){c.error({title:"Error",message:o.message})}finally{_(),A()}}function S(){const e=localStorage.getItem("arrayBooksShop");if(e){const o=JSON.parse(e);return new Map(o)}return new Map}function _(){const e=JSON.stringify([...d]);localStorage.setItem("arrayBooksShop",e)}function A(){d=S()}function H(){window.innerWidth>=1440?u=!0:u=!1}const k=document.querySelector(".scrollToTop");window.onscroll=()=>{window.scrollY>500?k.classList.remove("isHide"):window.scrollY<500&&k.classList.add("isHide"),k.onclick=()=>{window.scrollTo(0,0)}};
//# sourceMappingURL=commonHelpers.js.map
