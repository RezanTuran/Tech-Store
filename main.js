var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
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

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {

    var body =document.getElementsByTagName("body")[0]
    var continer = document.createElement("div");
    continer.classList = "container";

    for(var i = 0; i< listOfProducts.length; i++){
    var selectedProduct = listOfProducts[i];

    var productCard = document.createElement("div");
    var infoList = document.createElement("ul");
    var titlelistOfProducts = document.createElement("h4");
    var descriptionlistOfProduct = document.createElement("p");
    var imagelistOfProduct = document.createElement("img");
    var pricelistOfProduct = document.createElement("li");

    imagelistOfProduct.src = "./assets/" + selectedProduct.image;

    titlelistOfProducts.innerText = selectedProduct.title;
    descriptionlistOfProduct.innerText = selectedProduct.description;
    imagelistOfProduct.innerText = selectedProduct.image;
    pricelistOfProduct.innerText = selectedProduct.price;


    infoList.appendChild(titlelistOfProducts);
    infoList.appendChild(descriptionlistOfProduct);
    infoList.appendChild(imagelistOfProduct);
    infoList.appendChild(pricelistOfProduct);

    productCard.appendChild(infoList);
    continer.appendChild(productCard);
}

body.appendChild(continer);
}