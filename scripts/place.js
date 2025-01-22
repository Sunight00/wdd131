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


  


let temperature = 10;
//let speed = 5;

function calculateWindChill(temperature,speed)
{
    if (temperature <= 10)
    {
        // converting preference unit (celcuis)to fahrenheit because wind factor calculation is in fahrenheit
        let f= (temperature*9/5)+32
        // coverting preference unit (miles) kilometres because wind factor calculation is in kph
        let s = speed*1.60934

        return s





        let WindChill= 35.74 +0.6215*f - 35.75(speed)


        //35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16


    }
}
document.getElementById("open").innerHTML=calculateWindChill(10,8)
