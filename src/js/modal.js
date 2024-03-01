const modalOpen = document.querySelector(".add-remove-btn");
const modalClose = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");





document.addEventListener("DOMContentLoaded", () =>{
modalOpen.addEventListener("click", () => {
    document.body.style.overflowY ="hidden";

    
});

   modalClose.addEventListener("click", () => {
    document.body.style.overflowY = "auto";
   })
    
    const modalHeight = modal.clientHeight;
    if (modalHeight < 450) {
        modal.style.height = "450px";
        modal.style.overflowY = "scroll";
    }
})