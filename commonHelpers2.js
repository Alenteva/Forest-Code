import"./assets/support-ukraine-97c0550d.js";import{i as y}from"./assets/vendor-7539751a.js";let s=b();f();const u=document.querySelector(".list-books-shopping"),p=document.querySelector(".container-loader"),c=document.querySelector(".ul-pagination");window.addEventListener("load",async e=>{e.preventDefault(),s.size===0?(document.querySelector(".empty-shop-list").style.display="flex",c.style.display="none"):(await g(0,3),m(),v()),L("Shopping List"),p.style.display="none"});async function m(){const e=s.size,i=e/3;let a=`
      <div class="svg-li-pagination-container">
          <li class="svg-li-pagination-l" data-id="start"><<</li>
          <li class="svg-li-pagination-l" data-id="prev"><</li>
      </div>
      <div class="li-pagination-container">
          <li class="page-li-pagination-hidden-el-l"></li>`;if(e>3)if(a+='<li id="1" class="page-li-pagination page-one" data-id="1">1</li>',e%3===0)for(let t=2;t<=i;t++)a+=`<li id="${t}" class="page-li-pagination" data-id="${t}">${t}</li>`;else for(let t=2;t<=i+1;t++)a+=`<li id="${t}" class="page-li-pagination" data-id="${t}">${t}</li>`;else a+='<li id="1" class="page-li-pagination page-one" data-id="1">1</li>';a+=`
          <li class="page-li-pagination-hidden-el-r"></li>
      </div>
      <div class="svg-li-pagination-container">
          <li class="svg-li-pagination-r" data-id="next">></li>
          <li class="svg-li-pagination-r" data-id="last">>></li>
      </div>`,c.innerHTML=a,h(0),c.style.display="flex"}async function w(e){try{return`
          <li class="list-all-books-in-shoplist">
              <div style="min-width: 116px;">
                  <img class="image-example-shop-list" src="${e.book_image}" alt="${e.title}">
              </div>
              <div class="content-shop-list">
                  <div class="main-content-shop-list">
                      <div class="top-content-shop-list">
                          <div class="card-book-container data-shop-list">
                              <p class="p-title">${e.title}</p>
                              <p class="p-category">${e.category}</p>
                          </div>
                          <div data-title="${e.title}" class="svg-delete-shop-list svg-delete">
                              <svg data-title="${e.title}" class="svg-delete" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path data-title="${e.title}"class="svg-delete" d="M8.25 2.75H13.75M2.75 5.5H19.25M17.4167 5.5L16.7738 15.1427C16.6774 16.5894 16.6291 17.3128 16.3167 17.8613C16.0416 18.3441 15.6266 18.7323 15.1265 18.9747C14.5585 19.25 13.8335 19.25 12.3836 19.25H9.61643C8.1665 19.25 7.44153 19.25 6.87348 18.9747C6.37336 18.7323 5.95841 18.3441 5.68332 17.8613C5.37085 17.3128 5.32263 16.5894 5.22618 15.1427L4.58333 5.5M9.16667 9.625V14.2083M12.8333 9.625V14.2083" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                          </div>
                      </div>
                      <p class="description-shop-list">${e.description}</p>
                  </div>
                  <div class="bottom-content-shop-list">
                      <p>${e.author}</p>
                      <div class="links-books">                    
                        <a href="${e.link_amazon}" rel="amazon ${e.title}" target="_blank""><img src="./images/myPhotos/amazon.png" alt="amazon" class="filter-img"></a>
                        <a href="${e.link_goto}" rel="apple-book" target="_blank""><img src="/images/myPhotos/book.png" alt="amazon" class="filter-img"></a>

                      </div>
                  </div>
              </div>
          </li>`}catch(i){y.error({title:"Error",message:i.message})}}async function g(e,i){const a=Array.from(s.values()).slice(e,i);let t="";for(let n of a)t+=await w(n);u.innerHTML=t}u.addEventListener("click",async e=>{e.target.classList.contains("svg-delete")&&(p.style.display="block",s.delete(e.target.dataset.title),await g(0,3),s.size!==0?await m():(c.style.display="none",document.querySelector(".empty-shop-list").style.display="flex"),p.style.display="none",f())});async function h(e){const i=k();document.querySelectorAll(".page-li-pagination").forEach((t,n)=>{n<e-i||n>e+i?t.style.display="none":t.style.display="flex"});const a=document.querySelectorAll(".page-li-pagination").length-1;e>i?(document.querySelector(".page-li-pagination-hidden-el-l").style.display="flex",document.querySelector(".page-li-pagination-hidden-el-l").innerHTML="..."):document.querySelector(".page-li-pagination-hidden-el-l").style.display="none",e<a-i?(document.querySelector(".page-li-pagination-hidden-el-r").style.display="flex",document.querySelector(".page-li-pagination-hidden-el-r").innerHTML="..."):document.querySelector(".page-li-pagination-hidden-el-r").style.display="none"}c.addEventListener("click",async e=>{if(e.preventDefault(),e.target.classList.contains("svg-li-pagination-l")||e.target.classList.contains("svg-li-pagination-r")||e.target.classList.contains("page-li-pagination")){let a,t;try{switch(e.target.getAttribute("data-id")){case"start":if(a=0,t=1,document.querySelector(".page-one").id==="1")throw new Error("First page");document.querySelector(".page-one").classList.remove("page-one"),document.getElementById("1").classList.add("page-one");break;case"next":if(a=parseInt(document.querySelector(".page-one").textContent)*3,a>=s.size)throw new Error("Last page");let l=document.querySelector(".page-one").textContent;document.getElementById(l).classList.remove("page-one"),l=(parseInt(l)+1).toString(),document.getElementById(l).classList.add("page-one"),t=parseInt(document.getElementById(l).id);break;case"last":const o=s.size,d=Math.floor(o/3);if(o%3===0?(a=(d-1)*3,t=d):(a=o-(o-d*3),t=d+1),a>=o)throw new Error("Last page");if(document.querySelector(".page-one").id===Math.ceil(o/3).toString())throw new Error("Last page");document.querySelector(".page-one").classList.remove("page-one");let S=document.querySelectorAll(".page-li-pagination").length.toString();document.getElementById(S).classList.add("page-one");break;case"prev":if(a=(parseInt(document.querySelector(".page-one").textContent)-1)*3-3,a<0)throw new Error("First page");let r=document.querySelector(".page-one").textContent;document.getElementById(r).classList.remove("page-one"),r=(parseInt(r)-1).toString(),document.getElementById(r).classList.add("page-one"),t=parseInt(document.getElementById(r).id);break;default:a=(parseInt(e.target.getAttribute("data-id"))-1)*3,document.querySelector(".page-one").classList.remove("page-one"),e.target.classList.add("page-one"),t=parseInt(e.target.getAttribute("data-id"))}let n=a+3;g(a,n),h(t-1)}catch(n){y.error({title:"Error",message:n.message})}finally{v()}}});async function v(){window.scroll(0,0)}async function L(e){const i=e.lastIndexOf(" "),a=document.querySelector(".name-category");a.innerHTML=`${e.substring(0,i)} <span style="color: #4F2EE8;">${e.substring(i+1)}</span>`}function k(){return window.innerWidth<=767?1:2}function b(){const e=localStorage.getItem("arrayBooksShop");if(e){const i=JSON.parse(e);return new Map(i)}return new Map}function f(){const e=JSON.stringify([...s]);localStorage.setItem("arrayBooksShop",e)}
//# sourceMappingURL=commonHelpers2.js.map
