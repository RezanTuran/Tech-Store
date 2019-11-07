var listOfProducts;
/**This function loads the objects form our json file declares them and runs another function */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
    
}
/**This function runs when the site is loaded and runs the two functions */
function initSite() {
    loadProducts();
    saveProductCount();
}
/**This function tells that we will render our product in body and then runs the function to render the content */
function addProductsToWebpage() {
    document.getElementsByTagName("body")[0]
    renderProduct();
}
/**This function creates a loop to so that we can reneder our content in the other function */
function renderProduct(){
    for (var i = 0; i < listOfProducts.length; i++) {
        var productContainer = createProductcard(listOfProducts[i]);
        document.getElementById("mainContainer").appendChild(productContainer);
    }
}
/**This function prints all our products on our body */
function createProductcard(product) {
    var productContainer = document.createElement("div");
    productContainer.classList = "productContainer"

    var infoList= document.createElement("ul");
    var titlelistOfProducts = document.createElement("h3");
    var descriptionlistOfProducts = document.createElement("p");
    var imagelistOfProducts = document.createElement("img"); 
    var pricelistOfProducts = document.createElement("p");
    var buttonlistOfProducts = document.createElement("button");
    
    imagelistOfProducts.classList = "imagelistOfProducts";
    titlelistOfProducts.innerText = product.title;
    descriptionlistOfProducts.innerText = product.description;
    imagelistOfProducts.innerText = product.image;
    buttonlistOfProducts.classList = "fas fa-cart-arrow-down btn btn-primary";
    pricelistOfProducts.innerText = product.price + " " + "KR";
    buttonlistOfProducts.innerHTML = " Lägg till i kundvagnen";

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
/**This function lets us save the selected product to localstorage */
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
 
}
/**This function lets our two pages keep the productcart in sync */
function saveProductCount() {
    var collectedCart = JSON.parse(localStorage.getItem('cart'));
    document.getElementById("counter").innerHTML = collectedCart.length;
}