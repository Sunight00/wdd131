
const menu = document.querySelector("#menu");
menu.addEventListener("click",displayMenu);
const xmenu = document.querySelector("#xmenu");
xmenu.addEventListener("click",closeMenu);





let n = document.getElementById("eg");



function displayMenu()
{
    n.style.display="block"
    menu.style.display="none"
    xmenu.style.display="inline"

}

function closeMenu()
{
    
   
   n.style.display="none"
   xmenu.style.display="none"
   menu.style.display="inline"
}





function reportWindowSize() {

  //heightOutput.textContent = window.innerHeight;
  let x = window.innerWidth;
  if(x>500)
  {
    xmenu.style.display="none"
    menu.style.display="none"
    n.style.display="none"
  }
  else {
    menu.style.display="display"
  }
}

window.onresize = reportWindowSize;

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;










/* Rough example
let n = document.getElementById("eg");
let oN = document.querySelector(".bt");
let oFF = document.querySelector(".btn");
function off()
{
    
    n.style.display="none"
    oN.style.display="block"
    oFF.style.display="none"

}




let a = 0;

document.querySelector(".btn").addEventListener("click",off)
document.querySelector(".bt").addEventListener("click",on)

    /*
    ()=> {
    if ( a==0) {
        let n = document.getElementById("eg");
        n.style.display="display"
        a=1
    }
    else if (a==1)
    {
         let n = document.getElementById("eg");
        n.style.display="none"
        a=0
    }
});
*/






/*var divs = document.querySelectorAll('.list-1 > div'); 
        var button = document.querySelector('button'); 
        button.addEventListener("click", () => { 
            var list_2 = document.querySelector('.list-2'); 
            divs.forEach((div) => { 
                list_2.appendChild(div.cloneNode(true)); 
            }) 
        }); */
