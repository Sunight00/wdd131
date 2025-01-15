

































/*Footer*/
const calendar = new Date()
const year= document.getElementById("currentyear").innerHTML = calendar.getFullYear();
const month = calendar.getMonth();
const day = calendar.getDay();
const hour = calendar.getHours();
const minute = calendar.getMinutes();
const second = calendar.getSeconds();

document.getElementById("lastModified").innerHTML = (month+1) + "/" + day + "/" + year +" "+ hour + ":" + minute + ":" + second;



function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById("nav").innerHTML=src="images/harm.jpg"
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 700px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });