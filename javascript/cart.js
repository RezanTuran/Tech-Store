function getCartArray() {
   return JSON.parse(localStorage.getItem('cart'))
}

function initSite() {
   renderProduct();
   saveProductCount();
}

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

function removeProductFromCart(index) {
    var collectedCart = getCartArray()
    if(collectedCart) {
        collectedCart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(collectedCart));
    console.log(collectedCart)
    renderProduct();
    saveProductCount()
 }

function saveProductCount() {
   var collectedCart = JSON.parse(localStorage.getItem('cart'));
   document.getElementById("counter").innerHTML = collectedCart.length;
}
