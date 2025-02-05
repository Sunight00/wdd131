const products = ["Choose a Product...","Tooth Paste","Tooth Brush","Mouth Wash","CPU"];
function createList(){
    products.forEach(function(product){
        let item = document.createElement("option");
        item.innerHTML=product;
        document.querySelector("#products").appendChild( item.innerHTML=product);
    })
}

createList();