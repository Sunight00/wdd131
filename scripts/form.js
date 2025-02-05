const products = ["Choose a Product...","Tooth Paste","Tooth Brush","Mouth Wash","CPU"];
function createList(){
    products.forEach(function(product){
        let item = document.createElement("option");
        item.textContent=product;
    })
}