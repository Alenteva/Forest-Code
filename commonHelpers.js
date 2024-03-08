import"./assets/support-ukraine-f0d04adf.js";import{i as O,g as P,s as z,a as B,b as U,c as r,d as j,e as R,f as d}from"./assets/vendor-7ad6f83a.js";const J={apiKey:"AIzaSyD8UvisVnkCvMijmf6q4ZtLkQgC43vz2KM",authDomain:"dookshelf-357a4.firebaseapp.com",projectId:"dookshelf-357a4",storageBucket:"dookshelf-357a4.appspot.com",messagingSenderId:"957443484270",appId:"1:957443484270:web:de06245395594e6cf9947f",measurementId:"G-PGZE6HZC47"};O(J);const c=P(),g=document.querySelector(".Form-window"),Y=document.querySelector(".Close-form-btn"),f=document.querySelectorAll(".sign-up"),S=document.querySelector(".burger-menu-user"),x=document.getElementById("email"),M=document.getElementById("password"),_=document.getElementById("username"),F=document.querySelector(".quickstart-sign-in"),Q=document.querySelector(".quickstart-sign-up"),h=document.querySelector(".header-nav"),k=document.querySelector(".burger-menu-list"),Z=document.querySelector(".reset-btn"),G=document.querySelector(".log-out-btn"),E=document.querySelector(".Log-out-btn");f.forEach(e=>{e.addEventListener("click",function(){g.classList.add("is-open")})});Y.addEventListener("click",function(){g.classList.remove("is-open")});function K(){if(c.currentUser)B(c).then(()=>{I(),w()});else{const e=x.value,o=M.value,t=_.value;if(e.length<4){alert("Please enter an email address");return}if(o.length<4){alert("Please enter a password with at least 4 characters");return}U(c,e,o).then(a=>{const s=a.user;s.displayName=t,g.classList.remove("is-open"),h.style.display="flex",k.style.display="block",f.textContent=s.displayName,S.textContent=s.displayName,r.show({title:"Hello",message:`Welcome, ${s.displayName}!`,color:"blue",position:"topCenter"}),localStorage.setItem("user-data",JSON.stringify({name:s.displayName,mail:s.email})),s.getIdToken().then(n=>{localStorage.setItem("userToken",n)})}).catch(a=>{const s=a.code,n=a.message;alert(s==="auth/wrong-password"?"Wrong password":n),console.error(a)})}}function V(){const e=x.value,o=M.value,t=_.value;if(e.length<4){alert("Please enter an email address.");return}if(o.length<4){alert("Please enter a password.");return}j(c,e,o).then(a=>{const s=a.user;s.displayName=t,g.classList.remove("is-open"),h.style.display="flex",k.style.display="block",f.textContent=s.displayName,S.textContent=s.displayName,r.show({title:"Ok",message:"You have successfully registered!",color:"blue",position:"topCenter"}),localStorage.setItem("user-data",JSON.stringify({name:s.displayName,mail:s.email})),s.getIdToken().then(n=>{localStorage.setItem("userToken",n)})}).catch(function(a){const s=a.code,n=a.message;s=="auth/weak-password"?alert("The password is too weak."):alert(n),console.log(a)})}window.onload=function(){const e=localStorage.getItem("userToken");e?z(c,e).then(o=>{const t=o.user,a=JSON.parse(localStorage.getItem("user-data"));a&&(t.displayName=a.name,t.email=a.mail,g.classList.remove("is-open"),h.style.display="flex",k.style.display="block",f.textContent=t.displayName,S.textContent=t.displayName,w(t))}).catch(o=>{console.error(o)}):w()};function w(e){e?(g.classList.remove("is-open"),h.style.display="flex",k.style.display="block",E.style.display="inline-block",f.textContent=e.displayName,S.textContent=e.displayName):(h.style.display="none",k.style.display="none",g.classList.remove("is-open"),E.style.display="none")}function X(){const e=x.value;R(c,e).then(function(){r.show({message:"Password reset email sent. Check your email",color:"yellow",position:"topCenter"})}).catch(function(o){const t=o.code,a=o.message;(t=="auth/invalid-email"||t=="auth/user-not-found")&&alert(a),console.log(o)})}function I(){c.currentUser&&B(c).then(()=>{localStorage.removeItem("user-data"),localStorage.removeItem("userToken"),w()})}Q.addEventListener("click",function(e){e.preventDefault(),V()});F.addEventListener("click",function(e){e.preventDefault(),K()});Z.addEventListener("click",function(e){e.preventDefault(),X()});G.addEventListener("click",function(e){e.preventDefault(),I()});E.addEventListener("click",function(e){e.preventDefault(),I()});const q="/Forest-Code/assets/icon-4664cafe.svg";function ee(){const e=document.getElementById("burgerToggle"),o=document.getElementById("burgerMenu");e.addEventListener("click",function(){o.classList.toggle("burger-menu-show"),o.classList.contains("burger-menu-show")?e.innerHTML=`
      <svg width="18" height="18" class="stroke-color-ber-menu">
        <use href="${q}#icon-close"></use>
      </svg>`:e.innerHTML=`
      <svg width="28" height="28" class="fill-color-ber-menu">
        <use href="${q}#icon-menu-burg"></use>
      </svg>`})}document.addEventListener("DOMContentLoaded",function(){ee()});const te=document.getElementById("home");document.getElementById("shopping-list");te.classList.add("active");const m=document.querySelector(".list-one"),v=document.querySelector(".list_categories"),i=document.querySelector(".main-title"),b=document.querySelector(".container-loader");let y;function oe(){let e=window.innerWidth;return e<=767?0:e<=1439?2:4}function T(){const e=i.textContent.split(" "),o=e[e.length-1];i.innerHTML=i.innerHTML.replace(o,`<span class="blue">${o}</span>`)}async function N(e){let o="";const t=oe();for(let a in e){o+=`
            <li class="books_list">
                <h2 class="name_category">${e[a].list_name}</h2>
                <ul class="images_books">`;for(let s in e[a].books)if(o+=`<li class="image_book" data-category="${e[a].books[s]._id}">
                                    <div class="div-animation">
                                            <img data-category="${e[a].books[s]._id}" class="img-example" alt="Book title" src="${e[a].books[s].book_image}"></img>
                                        <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                                    </div>
                                
                                <div class="box-cards">
                                    <p class="title-book">${e[a].books[s].title}</p>
                                    <p class="author-book">${e[a].books[s].author}</p>
                                </div>
                            </li>`,t==s)break;o+=`</ul><button class="button-see-more" data-category="${e[a].list_name}">See more</button></li>`}m.insertAdjacentHTML("beforeend",o),b.style.display="none"}m.addEventListener("click",async e=>{if(e.target.classList.contains("button-see-more")){b.style.display="block",m.innerHTML="";const o=e.target.dataset.category;i.textContent=o,v.querySelector(".categoria")&&v.querySelectorAll(".categoria").forEach(n=>{i.textContent===n.textContent&&(document.querySelector(".selected-categories").classList.remove("selected-categories"),n.classList.add("selected-categories"))});const t=i.textContent.split(" "),a=t[t.length-1];i.innerHTML=i.innerHTML.replace(a,`<span class="blue">${a}</span>`),await d.get(`https://books-backend.p.goit.global/books/category?category=${o}`).then(s=>{if(s.data.length===0)throw new Error("Sorry, books in the selected category were not found");$(s.data)}).catch(s=>r.error({title:"Error",message:s.message}))}});async function se(){m.innerHTML="",b.style.display="block",i.textContent==="Best Sellers Books"?await d.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");N(e.data)}).catch(e=>r.error({title:"Error",message:e.message})):await d.get(`https://books-backend.p.goit.global/books/category?category=${y}`).then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");$(e.data)}).catch(e=>r.error({title:"Error",message:e.message}))}se();async function ae(e){let o="";const t='<li tabindex="0" data-name="Best Sellers Books" class="categoria selected-categories">All categories</li>';e.forEach(s=>{o+=`<li tabindex="0" data-name="${s.list_name}" class="categoria">${s.list_name}</li>`}),v.insertAdjacentHTML("beforeend",o),v.insertAdjacentHTML("afterbegin",t),document.querySelectorAll(".categoria").forEach(s=>{s.addEventListener("click",async n=>{b.style.display="block",m.innerHTML="",n.preventDefault(),document.querySelector(".selected-categories").classList.remove("selected-categories"),n.target.classList.add("selected-categories"),y=n.target.textContent,y=y.replace(/ /g,"%20"),n.target.textContent!=="All categories"?(i.textContent=n.target.textContent,T(),await d.get(`https://books-backend.p.goit.global/books/category?category=${y}`).then(l=>{if(l.data.length===0)throw new Error("Sorry, books in the selected category were not found");$(l.data)}).catch(l=>r.error({title:"Error",message:l.message}))):(i.textContent="Best Sellers Books",T(),await d.get("https://books-backend.p.goit.global/books/top-books").then(l=>{if(l.data.length===0)throw new Error("Sorry, books in the selected category were not found");N(l.data)}).catch(l=>r.error({title:"Error",message:l.message})))})})}d.get("https://books-backend.p.goit.global/books/category-list").then(e=>{ae(e.data)}).catch(e=>r.error({title:"Error",message:e.message}));async function $(e){console.log("ok");let o="";e.forEach(async t=>{o+=`<li class="book" data-category="${t._id}">
                        <div class="div-animation">
                        <img data-category="${t._id}" class="img-example" alt="Book title" src="${t.book_image}"></img>
                            <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                        </div>
                                <div class="box-cards">
                                    <p class="title-book">${t.title}</p>
                                    <p class="author-book">${t.author}</p>
                                </div>
                      </li>`}),m.insertAdjacentHTML("beforeend",o),b.style.display="none"}const ne=document.querySelector(".list-one");let u=W();D();let p,A;const H=document.querySelector(".modal-window-shop");ne.addEventListener("click",async e=>{if(e.target.classList.contains("box-quick-view")){const o=e.target.parentNode.parentNode.dataset.category;L(o)}else if(e.target.classList.contains("animation-paragraf")){const o=e.target.parentNode.parentNode.parentNode.dataset.category;L(o)}else if(e.target.classList.contains("img-example")){const o=e.target.dataset.category;L(o)}});async function L(e){le(),p&&document.body.classList.add("modal-open"),console.log("ok renderBook");const t=(await d.get(`https://books-backend.p.goit.global/books/${e}`)).data;A={title:t.title,book_image:t.book_image,author:t.author,description:t.description,id:t._id,category:t.list_name,link_amazon:t.buy_links[0].url,link_goto:t.buy_links[1].url};let a=`
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
                  <a class="" href="${t.buy_links[0].url}" rel="amazon ${t.title}" target="_blank""><img src="./images/myPhotos/amazon.png" alt="amazon" class="filter-img"></a>
                  <a class="" href="${t.buy_links[1].url}" rel="apple-book" target="_blank""><img src="./images/myPhotos/book.png" alt="amazon" class="filter-img"></a>
              </div>
          </div>
      </div>
      `;u.has(t.title)?a+=`<button class="card-books-category-button margin-add" type="button" data-id="${t._id}" data-title="${t.title}">Remove from the shopping list</button>
            <p id="congratulations">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>`:a+=`<button class="card-books-category-button margin-add" type="button" data-id="${t._id}" data-title="${t.title}">Add to shopping list</button>
              <p id="congratulations" hidden>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>`,document.querySelector(".modal-content").innerHTML=a,document.querySelector(".modal-window-shop").style.display="block"}H.addEventListener("click",async e=>{e.target.classList.contains("close-window")||e.target.classList.contains("modal-window-shop")?(document.querySelector(".modal-window-shop").style.display="none",p&&document.body.classList.remove("modal-open")):e.target.classList.contains("card-books-category-button")&&ie(e.target)});document.addEventListener("keydown",e=>{e.key==="Escape"&&(H.style.display="none",p&&document.body.classList.remove("modal-open"))});async function ie(e){try{if(e.textContent==="Add to shopping list"){if(u.has(e.dataset.title))throw new Error("This book has added");u.set(e.dataset.title,A),e.textContent="Remove from the shopping list",document.querySelector("#congratulations").removeAttribute("hidden")}else u.delete(e.dataset.title),e.textContent="Add to shopping list",document.querySelector("#congratulations").setAttribute("hidden","")}catch(o){r.error({title:"Error",message:o.message})}finally{D(),re()}}function W(){const e=localStorage.getItem("arrayBooksShop");if(e){const o=JSON.parse(e);return new Map(o)}return new Map}function D(){const e=JSON.stringify([...u]);localStorage.setItem("arrayBooksShop",e)}function re(){u=W()}function le(){window.innerWidth>=1440?p=!0:p=!1}const C=document.querySelector(".scrollToTop");window.onscroll=()=>{window.scrollY>500?C.classList.remove("isHide"):window.scrollY<500&&C.classList.add("isHide"),C.onclick=()=>{window.scrollTo(0,0)}};
//# sourceMappingURL=commonHelpers.js.map
