const products = ["Choose a Product...","Tooth Paste","Tooth Brush","Mouth Wash","CPU"];

function createList(){
    products.forEach(product =>
    {
        let list = document.createElement("option");
        list.innerHTML=product;
        document.querySelector("#products").appendChild(list)

    });
};

createList();







/*Footer*/
const calendar = new Date()
const year= document.getElementById("currentyear").innerHTML = calendar.getFullYear();
const month = calendar.getMonth();
const day = calendar.getDay();
const hour = calendar.getHours();
const minute = calendar.getMinutes();
const second = calendar.getSeconds();
const winWidth = window.innerWidth;
document.getElementById("lastModified").innerHTML = (month+1) + "/" + day + "/" + year +" "+ hour + ":" + minute + ":" + second;
