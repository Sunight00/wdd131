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


  


let temperature = 9;
document.getElementById("temperature").innerHTML=temperature;
let speed = 4.8;
document.getElementById("speed").innerHTML=speed;
if (temperature <= 10 && speed <=4.8 )
{
    function calculateWindChill(temperature,speed)
    {





        const WindChill= 35.74 +0.6215*temperature - 35.75*speed ** 0.16 + 0.4275*temperature *speed**0.16;

        return WindChill;

    }
    document.getElementById("windchill").innerHTML=calculateWindChill(temperature,speed).toFixed(1)
}
else{
    document.getElementById("windchill").innerHTML= "N/A";
}


