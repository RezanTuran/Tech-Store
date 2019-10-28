
function getCartArray() {
   return JSON.parse(localStorage.getItem('cart'))
}

function initSite() {
   renderProduct();
   saveProductCount();
}
function renderProduct(){
    var mainContainer = document.getElementById("mainContainer");
    var totalPrice= document.getElementById("totalPrice");
    mainContainer.innerHTML = "";
    var cart = getCartArray();
    var totalPrice = 0
    for (var i = 0; i < cart.length; i++) {
        var productContainer = createProductcard(cart[i], i);
        mainContainer.appendChild(productContainer);
        totalPrice += cart[i].price
        document.getElementById("totalPrice").innerText = totalPrice  
    }
 }
 
function createProductcard(product, index) {
   var productContainer = document.createElement("div");
   productContainer.classList = "productContainer"
   var infoList= document.createElement("ul");
   var titlelistOfProducts = document.createElement("h3");
   var descriptionlistOfProducts = document.createElement("p");
   var imagelistOfProducts = document.createElement("img");
   var pricelistOfProducts = document.createElement("p");
   var buttonlistOfProducts = document.createElement("button");
   imagelistOfProducts.classList = "imagelistOfProducts"
   titlelistOfProducts.innerText = product.title;
   descriptionlistOfProducts.innerText = product.description;
   imagelistOfProducts.innerText = product.image;
   pricelistOfProducts.innerText = product.price + " " + "KR";
   buttonlistOfProducts.innerHTML = "Delet item";

   buttonlistOfProducts.onclick = function() {
    removeProductFromCart(index)
   }
   imagelistOfProducts.src= "./assets/" + product.image;
   productContainer.appendChild(infoList);
   productContainer.appendChild(titlelistOfProducts);
   productContainer.appendChild(descriptionlistOfProducts);
   productContainer.appendChild(imagelistOfProducts);
   productContainer.appendChild(pricelistOfProducts);
   productContainer.appendChild(buttonlistOfProducts);
   return productContainer;
}
function removeProductFromCart(index) {
    var collectedCart = getCartArray()
    if(collectedCart) {
        collectedCart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(collectedCart));
    console.log(collectedCart)
    renderProduct();
    saveProductCount();
 }
 function printCartNumber() {
    var totalPrice = document.getElementById("totalPrice");
    var totalPrice = 0
    for (var i = 0; i < cart.length; i++) {
    
        totalPrice += cart[i].price
        }
        console.log(totalPrice)
   }
 function ShowTotalPrice (){
    var totalPrice = document.getElementById("totalPrice");
    var totalPrice = 0
    for (var i = 0; i < cart.length; i++) {
        totalPrice.appendChild(productContainer);
        totalPrice += cart[i].price
        }
        console.log(totalPrice)

    renderProduct();
 }
   function saveProductCount() {
      var collectedCart = JSON.parse(localStorage.getItem('cart'));
      document.getElementById("counter").innerHTML = collectedCart.length;
  }
