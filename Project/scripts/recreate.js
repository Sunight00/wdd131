
const to = [
    {num:"",song:"Song",artist:"Artist",album:"Album",time:"Time"},
    {num:"1. ",song:"Baby (Is It A Crime)", artist:"Rema", album:"Baby (Is It A Crime) Single", time:"2:44"},
    {num:"2. ", song:"PITY THIS BOY", artist:"ODUMODUBLVCK, Victony", album:"PITY THIS BOY- Single", time:"2:45"},
    {num:"3.",song:"WHY LOVE", artist:"Asake", album:"WHY LOVE - Single", time:"3:30"},
    {num:"4.", song:"MMS",artist:"Askae, Wizkid", album:"Lungu Boy", time:"3:39"},
    {num:"5.", song:"Funds", artist:"Davido feat ODUMODUBLVK & Chike", album:"5ive", time:"3:26"}


]


able()
function able(){
    let  n = document.querySelector(".chart");
        let toptitle = document.createElement("h4");
        toptitle.innerHTML="Top 5 Nigeria Apple Music";
        n.appendChild(toptitle)
    to.forEach(element => {
        let table= document.createElement("table");
        let row=document.createElement("tr");
        let num = document.createElement("td")
        let song=document.createElement("td");
        let artist=document.createElement("td");
        let album=document.createElement("td");
        let time=document.createElement("td");
        let dash = document.createElement("td")
        let dash2 = document.createElement("td")
        let dash3 = document.createElement("td")
       
        num.setAttribute("class","data");
        song.setAttribute("class","data")
        artist.setAttribute("class","data")
        album.setAttribute("class","data")
        time.setAttribute("class","data")
        


        num.innerHTML=element.num;
        song.innerHTML=element.song;
        dash.innerHTML="-----";
        artist.innerHTML=element.artist;
        dash2.innerHTML="-----";
        album.innerHTML=element.album;
        dash3.innerHTML="-----";
        time.innerHTML=element.time;



        row.appendChild(num);
        row.appendChild(song);
        row.appendChild(dash);
        row.appendChild(artist);
        row.appendChild(dash2);
        row.appendChild(album);
        row.appendChild(dash3);
        row.appendChild(time);
    
        table.appendChild(row);
        
        n.appendChild(table)
    });
}