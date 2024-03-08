import"./assets/support-ukraine-d585b3bc.js";import{i as u}from"./assets/vendor-7539751a.js";let o=b();f();const y=document.querySelector(".list-books-shopping"),g=document.querySelector(".container-loader"),d=document.querySelector(".ul-pagination");window.addEventListener("load",async e=>{e.preventDefault(),o.size===0?(document.querySelector(".empty-shop-list").style.display="flex",d.style.display="none"):(await p(0,3),m(),h()),k("Shopping List"),g.style.display="none"});async function m(){const e=o.size,i=e/3;let t=`
      <div class="svg-li-pagination-container">
          <li class="svg-li-pagination-l" data-id="start"><<</li>
          <li class="svg-li-pagination-l" data-id="prev"><</li>
      </div>
      <div class="li-pagination-container">
          <li class="page-li-pagination-hidden-el-l"></li>`;if(e>3)if(t+='<li id="1" class="page-li-pagination page-one" data-id="1">1</li>',e%3===0)for(let a=2;a<=i;a++)t+=`<li id="${a}" class="page-li-pagination" data-id="${a}">${a}</li>`;else for(let a=2;a<=i+1;a++)t+=`<li id="${a}" class="page-li-pagination" data-id="${a}">${a}</li>`;else t+='<li id="1" class="page-li-pagination page-one" data-id="1">1</li>';t+=`
          <li class="page-li-pagination-hidden-el-r"></li>
      </div>
      <div class="svg-li-pagination-container">
          <li class="svg-li-pagination-r" data-id="next">></li>
          <li class="svg-li-pagination-r" data-id="last">>></li>
      </div>`,d.innerHTML=t,v(0),d.style.display="flex"}async function L(e){try{return`
          <li class="list-all-books-in-shoplist">
              <div>
                  <img class="image-example-shop-list" src="${e.book_image}" alt="${e.title}">
              </div>
              <div class="content-shop-list">
                  <div class="main-content-shop-list">
                      <div class="top-content-shop-list">
                          <div class="card-book-container data-shop-list">
                              <p>${e.title}</p>
                              <p>${e.category}</p>
                          </div>
                          <div data-title="${e.title}" class="svg-delete-shop-list svg-delete">
                              <svg data-title="${e.title}" class="svg-delete" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path data-title="${e.title}" class="svg-delete" d="M8.25 2.75H13.75M2.75 5.5H19.25M17.4167 5.5L16.7738 15.1427C16.6774 16.5894 16.6291 17.3128 16.3167 17.8613C16.0416 18.3441 15.6266 18.7323 15.1265 18.9747C14.5585 19.25 13.8335 19.25 12.3836 19.25H9.61643C8.1665 19.25 7.44153 19.25 6.87348 18.9747C6.37336 18.7323 5.95841 18.3441 5.68332 17.8613C5.37085 17.3128 5.32263 16.5894 5.22618 15.1427L4.58333 5.5M9.16667 9.625V14.2083M12.8333 9.625V14.2083" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                          </div>
                      </div>
                      <p class="description-shop-list">${e.description}</p>
                  </div>
                  <div class="bottom-content-shop-list">
                      <p>${e.author}</p>
                      <div class="links-books">
                        <a href="${e.link_amazon}" rel="amazon ${e.title}" target="_blank""><img src="./images/myPhotos/amazon.png" alt="amazon" class="filter-img"></a>
                        <a href="${e.link_goto}" rel="apple-book" target="_blank""><img src="./images/myPhotos/book.png" alt="amazon" class="filter-img"></a>
                      </div>
                  </div>
              </div>
          </li>`}catch(i){u.error({title:"Error",message:i.message})}}async function p(e,i){const t=Array.from(o.values()).slice(e,i);console.log(Object.values(t));let a="";for(let n of t)a+=await L(n);y.innerHTML=a}y.addEventListener("click",async e=>{e.target.classList.contains("svg-delete")&&(g.style.display="block",o.delete(e.target.dataset.title),await p(0,3),await m(),g.style.display="none",f())});async function v(e){document.querySelectorAll(".page-li-pagination").forEach((a,n)=>{n<e-2||n>e+2?a.style.display="none":a.style.display="flex"});const t=document.querySelectorAll(".page-li-pagination").length-1;e>2?(document.querySelector(".page-li-pagination-hidden-el-l").style.display="flex",document.querySelector(".page-li-pagination-hidden-el-l").innerHTML="..."):document.querySelector(".page-li-pagination-hidden-el-l").style.display="none",e<t-2?(document.querySelector(".page-li-pagination-hidden-el-r").style.display="flex",document.querySelector(".page-li-pagination-hidden-el-r").innerHTML="..."):document.querySelector(".page-li-pagination-hidden-el-r").style.display="none"}d.addEventListener("click",async e=>{if(e.preventDefault(),e.target.classList.contains("svg-li-pagination-l")||e.target.classList.contains("svg-li-pagination-r")||e.target.classList.contains("page-li-pagination")){let t,a;try{switch(e.target.getAttribute("data-id")){case"start":if(t=0,a=1,document.querySelector(".page-one").id==="1")throw new Error("First page");document.querySelector(".page-one").classList.remove("page-one"),document.getElementById("1").classList.add("page-one");break;case"next":if(t=parseInt(document.querySelector(".page-one").textContent)*3,t>=o.size)throw new Error("Last page");let l=document.querySelector(".page-one").textContent;document.getElementById(l).classList.remove("page-one"),l=(parseInt(l)+1).toString(),document.getElementById(l).classList.add("page-one"),a=parseInt(document.getElementById(l).id);break;case"last":const s=o.size,c=Math.floor(s/3);if(s%3===0?(t=(c-1)*3,a=c):(t=s-(s-c*3),a=c+1),t>=s)throw new Error("Last page");if(document.querySelector(".page-one").id===Math.ceil(s/3).toString())throw new Error("Last page");document.querySelector(".page-one").classList.remove("page-one");let S=document.querySelectorAll(".page-li-pagination").length.toString();document.getElementById(S).classList.add("page-one");break;case"prev":if(t=(parseInt(document.querySelector(".page-one").textContent)-1)*3-3,t<0)throw new Error("First page");let r=document.querySelector(".page-one").textContent;document.getElementById(r).classList.remove("page-one"),r=(parseInt(r)-1).toString(),document.getElementById(r).classList.add("page-one"),a=parseInt(document.getElementById(r).id);break;default:t=(parseInt(e.target.getAttribute("data-id"))-1)*3,document.querySelector(".page-one").classList.remove("page-one"),e.target.classList.add("page-one"),a=parseInt(e.target.getAttribute("data-id"))}let n=t+3;p(t,n),v(a-1)}catch(n){u.error({title:"Error",message:n.message})}finally{h()}}});async function h(){window.scroll(0,0)}async function k(e){const i=e.lastIndexOf(" "),t=document.querySelector(".name-category");t.innerHTML=`${e.substring(0,i)} <span style="color: #4F2EE8;">${e.substring(i+1)}</span>`}function b(){const e=localStorage.getItem("arrayBooksShop");if(e){const i=JSON.parse(e);return new Map(i)}return new Map}function f(){const e=JSON.stringify([...o]);localStorage.setItem("arrayBooksShop",e)}
//# sourceMappingURL=commonHelpers2.js.map
