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


  


let temperature = 6;
let speed = 4;
if (temperature <= 10 && speed <=4.8 )
{
    function calculateWindChill(temperature,speed)
    {

        // converting preference unit (celcuis)to fahrenheit because wind factor calculation is in fahrenheit
        let f= (temperature*9/5)+32;
        // coverting preference unit (miles) kilometres because wind factor calculation is in kph
        let s = speed*1.60934;



        const WindChill= 35.74 +0.6215*f - 35.75*(s ** 0.16) + 0.4275*f *(s**0.16);

        WindChill= (32*WindChill-32) * 5/9;
        //(32°F − 32) × 5/9 = 0°C

        return WindChill;

    }
    document.getElementById("open").innerHTML=calculateWindChill(temperature,speed)
}
else{
    document.getElementById("open").innerHTML= "N/A";
}


