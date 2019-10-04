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
    // This would also be a good place to initialize other parts of the UI
}


/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    var body =document.getElementsByTagName("body")[0]
    console.log(body);
    var continer = document.createElement("div");
    continer.classList = "container"

    for(var i = 0; i< listOfProducts.length; i++){
        var selectedProduct = listOfProducts[i]
        var productCard=document.createElement("div");
        var infoList=document.createElement("ul");
        var titlelistOfProducts = document.createElement("h3");
        var descriptionlistOfProducts = document.createElement("p");
        var imagelistOfProducts = document.createElement("img"); 
        var pricelistOfProducts = document.createElement("p");
      
     
        titlelistOfProducts.innerText = selectedProduct.title;
        descriptionlistOfProducts.innerText = selectedProduct.description;
        imagelistOfProducts.innerText = selectedProduct.image;
        pricelistOfProducts.innerText = selectedProduct.price;

        imagelistOfProducts.src= "./assets/" + selectedProduct.image;

        infoList.appendChild(titlelistOfProducts);
        infoList.appendChild(descriptionlistOfProducts);
        infoList.appendChild(imagelistOfProducts);
        infoList.appendChild(pricelistOfProducts);

        productCard.appendChild(infoList);
        continer.appendChild(productCard);
        
    }

    body.appendChild(continer);
}

    console.log(listOfProducts);

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.



