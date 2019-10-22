
function getCartArray() {
   return JSON.parse(localStorage.getItem('cart'))
}
function initSite() {
   renderProduct();
}
function renderProduct(){
   var cart = getCartArray()
   for (var i = 0; i < cart.length; i++) {
       var productContainer = createProductcard(cart[i]);
       document.getElementById("mainContainer").appendChild(productContainer);
   }
}
function createProductcard(product) {
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
   buttonlistOfProducts.innerHTML = "Lägg till i kundvagnen";
   buttonlistOfProducts.onclick = function() {
       addProductToCart(product)
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
function addProductToCart(product) {
   var collectedCart = JSON.parse(localStorage.getItem('cart'));
   if(collectedCart) {
       collectedCart.push(product);
   } else {
       collectedCart = [];
       collectedCart.push(product);
   }
   document.getElementById("counter").innerHTML = collectedCart.length;
   localStorage.setItem('cart', JSON.stringify(collectedCart));
   console.log(collectedCart);
       // Hämta cart från localStorage.
   // Kolla om cartlistan du hämtat inte existerar.
   // Om ej existerar, skapa en ny lista & pusha in den nya produkten.
   // Om existerar, pusha in den nya produkten.
   // Spara upp listan till localStorage
   console.log(product)
}