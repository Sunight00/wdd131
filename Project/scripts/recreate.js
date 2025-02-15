
const to = [
    {num:"",song:"Song",artist:"Artist",album:"Album",time:"Time"},
    {num:"1",song:"Baby (Is It A Crime)", artist:"Rema", album:"Baby (Is It A Crime) Single", time:"2:44"},
    {num:"2", song:"PITY THIS BOY", artist:"ODUMOBUBLVCK, Victony", album:"PITY THIS BOY- Single", time:"2:45"}

]


able()
function able(){
    to.forEach(element => {
        let table= document.createElement("table");
        let row=document.createElement("tr");
        let num = document.createElement("td")
        let song=document.createElement("td");
        let artist=document.createElement("td");
        let album=document.createElement("td");
        let time=document.createElement("td");
       


        num.innerHTML=element.num;
        song.innerHTML=element.song;
        artist.innerHTML=element.artist;
        album.innerHTML=element.album;
        time.innerHTML=element.time;


        row.appendChild(num);
        row.appendChild(song);
        row.appendChild(artist);
        row.appendChild(album);
        row.appendChild(time);
    
        table.appendChild(row);
        let  n = document.querySelector(".chart");
        n.appendChild(table)
    });
}