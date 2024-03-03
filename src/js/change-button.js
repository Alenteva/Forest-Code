const changeBtn = document.querySelector(".add-remove-btn");
const information = document.querySelector(".information");
const PRODUCT_LS_KEY = "checkout";
let products = [];

changeBtn.addEventListener("click", () => {
    const buttonText = changeBtn.textContent.trim();

    if (buttonText === "add to shopping list") {
        changeBtn.textContent = "remove from the shopping list";
        information.classList.remove("visually-hidden");
        products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
        products.push(...products);
        localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products));
        
    } else {
        changeBtn.textContent = "add to shopping list";
        information.classList.add("visually-hidden");
        localStorage.removeItem(PRODUCT_LS_KEY);
        products = [];
}
})
