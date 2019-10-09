var listOfProducts;

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

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
function initSite() {
    loadProducts();
}

function addProductsToWebpage() {
    var body =document.getElementsByTagName("body")[0]
    console.log(body);
<<<<<<< Updated upstream
    renderProduct();
}

function renderProduct(){
    for (var i = 0; i < listOfProducts.length; i++) {
        var productContainer = createProductcard(listOfProducts[i]);
        document.getElementById("mainContainer").appendChild(productContainer);
    }
}

function createProductcard(product) {
    var productContainer = document.createElement("div");
    productContainer.classList = "productContainer"
=======
    var continer = document.createElement("div");
    continer.classList = "container";


    for(var i = 0; i< listOfProducts.length; i++){
        var selectedProduct = listOfProducts[i]
        var productCard=document.createElement("div");
        productCard.classList = "productCard"; /** Gör en class till Div och Styla Diven */
        var infoList=document.createElement("ul");
        var titlelistOfProducts = document.createElement("h3");
        var descriptionlistOfProducts = document.createElement("p");
        var imagelistOfProducts = document.createElement("img");
        imagelistOfProducts.classList = "imagelistOfProducts"; /** Gör en class till Img-tag och Styla Img-tagen */
        var pricelistOfProducts = document.createElement("h5");
        var buttonlistOfProducts = document.createElement("button");
        buttonlistOfProducts.classList = "fas fa-cart-arrow-down btn btn-primary"; /** Gör en class till button och Styla Buttonen */
    

        titlelistOfProducts.innerText = selectedProduct.title;
        descriptionlistOfProducts.innerText = selectedProduct.description;
        imagelistOfProducts.innerText = selectedProduct.image;
        pricelistOfProducts.innerText = selectedProduct.price + " " + " "+  "KR";
        buttonlistOfProducts.innerHTML = " " + "Lägg till i kundvagnen";
        
        
        imagelistOfProducts.src= "./assets/" + selectedProduct.image;
>>>>>>> Stashed changes

    var infoList= document.createElement("ul");
    var titlelistOfProducts = document.createElement("h3");
    var descriptionlistOfProducts = document.createElement("p");
    var imagelistOfProducts = document.createElement("img"); 
    var pricelistOfProducts = document.createElement("p");
    var buttonlistOfProducts = document.createElement("button");
     
    titlelistOfProducts.innerText = product.title;
    descriptionlistOfProducts.innerText = product.description;
    imagelistOfProducts.innerText = product.image;
    pricelistOfProducts.innerText = product.price + " " + "KR";
    buttonlistOfProducts.innerHTML = "Lägg till i kundvagnen";

        

    buttonlistOfProducts.onclick = function() {
    renderSelectedProduct(product)
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

<<<<<<< Updated upstream
function renderSelectedProduct(product) {
    console.log(product)   
}
=======




// ### Shoppong cart .html  ### ///
>>>>>>> Stashed changes
