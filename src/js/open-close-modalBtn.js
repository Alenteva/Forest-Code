// export function onOpenPopUpModal() {
//     const backdrop = document.querySelector('.backdrop');
//     backdrop.classList.add("is-open");
//     document.body.classList.add("no-scroll")

//     backdrop.addEventListener("click", onCloseModalByClicking);
//     document.body.addEventListener("keyup", onCloseModalByKey);


// }

// function onCloseModalByClicking(evt) {
//     const backdrop = document.querySelector(".backdrop");
//     const modal = document.querySelector(".modal");
//     const closeBtn = document.querySelector(".modal-btn");
//     const boundaries = evt.target.closest(".modal") !== null;

//     if (!boundaries || evt.target.closest(".modal-btn") === closeBtn)
//     {
//         backdrop.classList.remove("is-open");
//         document.body.classList.remove("no-scroll");
        
//         backdrop.removeEventListener("click", onCloseModalByClicking);
//         document.body.removeEventListener("keyup", onCloseModalByKey);
//     }
// }


// function onCloseModalByKey(evt) {
//     const backdrop = document.querySelector(".backdrop");

//     if (evt.key === "Escape" ) {
         
//         backdrop.classList.remove("is-open");
//         document.body.classList.remove("no-scroll");
        
//         backdrop.removeEventListener("click", onCloseModalByClicking);
//         document.body.removeEventListener("keyup", onCloseModalByKey);
//      }
// }