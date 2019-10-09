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

function initSite() {
    loadProducts();
}

function addProductsToWebpage() {
    var body =document.getElementsByTagName("body")[0]
    console.log(body);
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

function renderSelectedProduct(product) {
    console.log(product)   
}