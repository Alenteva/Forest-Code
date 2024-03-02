const modalOpen = document.querySelector(".add-remove-btn");
const modalClose = document.querySelector(".modal-btn");
const modal = document.querySelector(".backdrop");





document.addEventListener("DOMContentLoaded", () =>{
modalOpen.addEventListener("click", () => {
    document.body.style.overflowY ="hidden";

    
});

   modalClose.addEventListener("click", () => {
       document.body.style.overflowY = "auto";
       modal.classList.remove("is-open");
   })
    
    const modalHeight = modal.clientHeight;
    if (modalHeight < 762) {
        modal.style.height = "762px";
        modal.style.overflowY = "scroll";
    }
})