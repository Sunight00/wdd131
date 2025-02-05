const roducts = ["Tooth Paste","Tooth Brush","Mouth Wash","CPU"];
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];




function countReview(){
    
    let initial=(JSON.parse(localStorage.getItem("Reviews")));
    localStorage.setItem("Reviews", JSON.stringify(initial+1));
}

function createList(){
    products.forEach(function(product)
    {
        let list = document.createElement("option");
        list.innerHTML=product.name;
        document.querySelector("#products").appendChild(list)
        
    });
};
function change(){
   
}
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
