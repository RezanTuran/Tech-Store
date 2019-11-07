/**This function gets our array of products from localstorage.*/
function getCartArray() {
   return JSON.parse(localStorage.getItem('cart'))
}
/**This function turns on when the page is loaded and runs the two functions. */
function initSite() {
   renderProduct();
   saveProductCount();
}
/**This function gets the array so we can add our total price and also to be able to print our products in our other function*/
function renderProduct(){
    var mainContainerCart = document.getElementById("mainContainerCart");
    var totalPrice= document.getElementById("totalPrice");
    mainContainerCart.innerHTML = "";
    var cart = getCartArray();
    var totalPrice = 0
    for (var i = 0; i < cart.length; i++) {
        var productContainerCart = createProductcard(cart[i], i);
        mainContainerCart.appendChild(productContainerCart);
        totalPrice += cart[i].price 
    }
    document.getElementById("totalPrice").innerText = "Totalt pris:" +" "+ totalPrice + " " + "KR" 
 }
 /**This function prints all our productcards on the main container */
function createProductcard(product, index) {
   var productContainerCart = document.createElement("div");
   productContainerCart.classList = "productContainerCart"
   var infoList= document.createElement("ul");
   var imagelistOfProductsCart = document.createElement("img");
   var titlelistOfProducts = document.createElement("h3");
   var pricelistOfProducts = document.createElement("p");
   var buttonlistOfProducts = document.createElement("button");
   imagelistOfProductsCart.classList = "imagelistOfProductsCart"
   imagelistOfProductsCart.innerText = product.image;
   titlelistOfProducts.innerText = product.title;
   buttonlistOfProducts.classList = "fa fa-trash btn btn-danger";
   pricelistOfProducts.innerText = product.price + " " + "KR";
   buttonlistOfProducts.innerHTML = " Ta bort";

   buttonlistOfProducts.onclick = function() {
    removeProductFromCart(index) 
   }
   imagelistOfProductsCart.src= "./assets/" + product.image;
   productContainerCart.appendChild(infoList);
   productContainerCart.appendChild(imagelistOfProductsCart);
   productContainerCart.appendChild(titlelistOfProducts);
   productContainerCart.appendChild(pricelistOfProducts);
   productContainerCart.appendChild(buttonlistOfProducts);
   return productContainerCart;
}
/**This function gets the localstorage array and removes the selected product and uppdates our counter and site */
function removeProductFromCart(index) {
    var collectedCart = getCartArray()
    if(collectedCart) {
        collectedCart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(collectedCart));
    renderProduct();
    saveProductCount()
 }
/**This function saves our products to localstorage so that our main page and cart page are in sync */
function saveProductCount() {
   var collectedCart = JSON.parse(localStorage.getItem('cart'));
   document.getElementById("counter").innerHTML = collectedCart.length;
}
/**This function clears all products from localsorage and updates our counter and page */
function removeAllProducts(){
   var collectedCart = getCartArray()
    if(collectedCart) {
        collectedCart.length=0
    }
    localStorage.setItem('cart', JSON.stringify(collectedCart));
    alert("Tack För Ditt Köp!");
    renderProduct();
    saveProductCount()
 }
