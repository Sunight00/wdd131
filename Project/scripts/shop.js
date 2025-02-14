/*let shoplist =[
    { name:"Headphone",
        image:"https://cdn.pixabay.com/photo/2016/11/19/16/01/audio-1840073_640.jpg",
        price:80
    },
    {
        name:"Boombox",
        image:"https://cdn.pixabay.com/photo/2020/10/28/11/24/ghetto-blaster-5693151_640.jpg",
        price:100
    },
    {
        name:"Microphone",
        image:"https://cdn.pixabay.com/photo/2016/11/21/11/32/audio-1844798_640.jpg",
        price:110
    },
    {
        name:"Midi Keyboard",
        image:"https://cdn.pixabay.com/photo/2019/06/16/11/55/midi-4277580_1280.jpg",
        price:100
    }
]


//shopTemplate()
function shopTemplate()
{
    shoplist.forEach(item => {
        let card = document.createElement("section");
        card.setAttribute("class","happy")

        let name = document.createElement("h3");
        let image = document.createElement("img")
        let price = document.createElement("p");

        name.innerHTML=item.name;
        image.setAttribute("src",item.image)
        image.setAttribute("class","i")
        price.innerHTML=item.price;

        
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(price);

        document.querySelector("#card").appendChild(card);
    });
}
*/

