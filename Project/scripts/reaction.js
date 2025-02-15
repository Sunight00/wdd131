//First Audio
//audio1()
function audio1(){
const uthumb1 = document.getElementById("uthumb1");
//uthumb1.addEventListener("click",add1);
const dthumb1 = document.getElementById("dthumb1")
//dthumb1.addEventListener("click",remove1);
const like1 = document.getElementById("like1");
const dislike1 = document.getElementById("dislike1");

let rec1 = 0;
uthumb1.addEventListener("click",()=>
{
    if(rec1 == 0)
    {
        add1()
        rec1=rec1+1;
    }
    else if(rec1 == 1)
    {
        localStorage.removeItem("like1");
        like1.innerHTML=(JSON.parse(localStorage.getItem("like1")));
        rec1=rec1-1;
    }
}
);
dthumb1.addEventListener("click",()=>
    {
        if(rec1 == 1)
        {
            remove1()
            rec1=rec1-1;
        }
        else if (rec1==0)
        {
            localStorage.removeItem("dislike1");
            dislike1.innerHTML=(JSON.parse(localStorage.getItem("dislike1")));
            rec1=rec1+1;
        }
    }
    );
like1.innerHTML=(JSON.parse(localStorage.getItem("like1")));
dislike1.innerHTML=(JSON.parse(localStorage.getItem("dislike1")));
function add1()
{
    let initial=(JSON.parse(localStorage.getItem("like1")));
    localStorage.setItem("like1", JSON.stringify(initial+1));
    like1.innerHTML=(JSON.parse(localStorage.getItem("like1")));
    localStorage.removeItem("dislike1");
    dislike1.innerHTML=(JSON.parse(localStorage.getItem("dislike1")));
}

function remove1()
{
    let initial=(JSON.parse(localStorage.getItem("dislike1")));
    localStorage.setItem("dislike1", JSON.stringify(initial+1));
    dislike1.innerHTML=(JSON.parse(localStorage.getItem("dislike1")));
    localStorage.removeItem("like1");
    like1.innerHTML=(JSON.parse(localStorage.getItem("like1")));
}
}

//audio2()
function audio2(){


const uthumb2 = document.getElementById("uthumb2");
//uthumb2.addEventListener("click",add1);
const dthumb2 = document.getElementById("dthumb2")
//dthumb2.addEventListener("click",remove1);
const like2 = document.getElementById("like2");
const dislike2 = document.getElementById("dislike2");

let rec2 = 0;
uthumb2.addEventListener("click",()=>
{
    if(rec2 == 0)
    {
        add1()
        rec2=rec2+1;
    }
    else if(rec2 == 1)
    {
        localStorage.removeItem("like2");
        like2.innerHTML=(JSON.parse(localStorage.getItem("like2")));
        rec2=rec2-1;
    }
}
);
dthumb2.addEventListener("click",()=>
    {
        if(rec2 == 1)
        {
            remove1()
            rec2=rec2-1;
        }
        else if (rec2==0)
        {
            localStorage.removeItem("dislike2");
            dislike2.innerHTML=(JSON.parse(localStorage.getItem("dislike2")));
            rec2=rec2+1;
        }
    }
    );
like2.innerHTML=(JSON.parse(localStorage.getItem("like2")));
dislike2.innerHTML=(JSON.parse(localStorage.getItem("dislike2")));
function add1()
{
    let initial2=(JSON.parse(localStorage.getItem("like2")));
    localStorage.setItem("like2", JSON.stringify(initial2+1));
    like2.innerHTML=(JSON.parse(localStorage.getItem("like2")));
    localStorage.removeItem("dislike2");
    dislike2.innerHTML=(JSON.parse(localStorage.getItem("dislike2")));
}

function remove1()
{
    let initial2=(JSON.parse(localStorage.getItem("dislike2")));
    localStorage.setItem("dislike2", JSON.stringify(initial2+1));
    dislike2.innerHTML=(JSON.parse(localStorage.getItem("dislike2")));
    localStorage.removeItem("like2");
    like2.innerHTML=(JSON.parse(localStorage.getItem("like2")));
}


}

audio3()
function audio3(){


const uthumb3 = document.getElementById("uthumb3");
//uthumb3.addEventListener("click",add1);
const dthumb3 = document.getElementById("dthumb3")
//dthumb3.addEventListener("click",remove1);
const like3 = document.getElementById("like3");
const dislike3 = document.getElementById("dislike3");

let rec3 = 0;
uthumb3.addEventListener("click",()=>
{
    if(rec3 == 0)
    {
        add1()
        rec3=rec3+1;
    }
    else if(rec3 == 1)
    {
        localStorage.removeItem("like3");
        like3.innerHTML=(JSON.parse(localStorage.getItem("like3")));
        rec3=rec3-1;
    }
}
);
dthumb3.addEventListener("click",()=>
    {
        if(rec3 == 1)
        {
            remove1()
            rec3=rec3-1;
        }
        else if (rec3==0)
        {
            localStorage.removeItem("dislike3");
            dislike3.innerHTML=(JSON.parse(localStorage.getItem("dislike3")));
            rec3=rec3+1;
        }
    }
    );
like3.innerHTML=(JSON.parse(localStorage.getItem("like3")));
dislike3.innerHTML=(JSON.parse(localStorage.getItem("dislike3")));
function add1()
{
    let initial3=(JSON.parse(localStorage.getItem("like3")));
    localStorage.setItem("like3", JSON.stringify(initial3+1));
    like3.innerHTML=(JSON.parse(localStorage.getItem("like3")));
    localStorage.removeItem("dislike3");
    dislike3.innerHTML=(JSON.parse(localStorage.getItem("dislike3")));
}

function remove1()
{
    let initial3=(JSON.parse(localStorage.getItem("dislike3")));
    localStorage.setItem("dislike3", JSON.stringify(initial3+1));
    dislike3.innerHTML=(JSON.parse(localStorage.getItem("dislike3")));
    localStorage.removeItem("like3");
    like3.innerHTML=(JSON.parse(localStorage.getItem("like3")));
}
}

audio4()
function audio4(){
const uthumb4 = document.getElementById("uthumb4");
//uthumb4.addEventListener("click",add1);
const dthumb4 = document.getElementById("dthumb4")
//dthumb4.addEventListener("click",remove1);
const like4 = document.getElementById("like4");
const dislike4 = document.getElementById("dislike4");

let rec4 = 0;
uthumb4.addEventListener("click",()=>
{
    if(rec4 == 0)
    {
        add1()
        rec4=rec4+1;
    }
    else if(rec4 == 1)
    {
        localStorage.removeItem("like4");
        like4.innerHTML=(JSON.parse(localStorage.getItem("like4")));
        rec4=rec4-1;
    }
}
);
dthumb4.addEventListener("click",()=>
    {
        if(rec4 == 1)
        {
            remove1()
            rec4=rec4-1;
        }
        else if (rec4==0)
        {
            localStorage.removeItem("dislike4");
            dislike4.innerHTML=(JSON.parse(localStorage.getItem("dislike4")));
            rec4=rec4+1;
        }
    }
    );
like4.innerHTML=(JSON.parse(localStorage.getItem("like4")));
dislike4.innerHTML=(JSON.parse(localStorage.getItem("dislike4")));
function add1()
{
    let initial4=(JSON.parse(localStorage.getItem("like4")));
    localStorage.setItem("like4", JSON.stringify(initial4+1));
    like4.innerHTML=(JSON.parse(localStorage.getItem("like4")));
    localStorage.removeItem("dislike4");
    dislike4.innerHTML=(JSON.parse(localStorage.getItem("dislike4")));
}

function remove1()
{
    let initial4=(JSON.parse(localStorage.getItem("dislike4")));
    localStorage.setItem("dislike4", JSON.stringify(initial4+1));
    dislike4.innerHTML=(JSON.parse(localStorage.getItem("dislike4")));
    localStorage.removeItem("like4");
    like4.innerHTML=(JSON.parse(localStorage.getItem("like4")));
}
}

//audio5()
function audio5(){
const uthumb5 = document.getElementById("uthumb5");
//uthumb5.addEventListener("click",add1);
const dthumb5 = document.getElementById("dthumb5")
//dthumb5.addEventListener("click",remove1);
const like5 = document.getElementById("like5");
const dislike5 = document.getElementById("dislike5");

let rec5 = 0;
uthumb5.addEventListener("click",()=>
{
    if(rec5 == 0)
    {
        add5()
        rec5=rec5+1;
    }
    else if(rec5 == 1)
    {
        localStorage.removeItem("like5");
        like5.innerHTML=(JSON.parse(localStorage.getItem("like5")));
        rec5=rec5-1;
    }
}
);
dthumb5.addEventListener("click",()=>
    {
        if(rec5 == 1)
        {
            remove5()
            rec5=rec5-1;
        }
        else if (rec5==0)
        {
            localStorage.removeItem("dislike5");
            dislike5.innerHTML=(JSON.parse(localStorage.getItem("dislike5")));
            rec5=rec5+1;
        }
    }
    );
like5.innerHTML=(JSON.parse(localStorage.getItem("like5")));
dislike5.innerHTML=(JSON.parse(localStorage.getItem("dislike5")));
function add5()
{
    let initial5=(JSON.parse(localStorage.getItem("like5")));
    localStorage.setItem("like5", JSON.stringify(initial5+1));
    like5.innerHTML=(JSON.parse(localStorage.getItem("like5")));
    localStorage.removeItem("dislike5");
    dislike5.innerHTML=(JSON.parse(localStorage.getItem("dislike5")));
}

function remove5()
{
    let initial5=(JSON.parse(localStorage.getItem("dislike5")));
    localStorage.setItem("dislike5", JSON.stringify(initial5+1));
    dislike5.innerHTML=(JSON.parse(localStorage.getItem("dislike5")));
    localStorage.removeItem("like5");
    like5.innerHTML=(JSON.parse(localStorage.getItem("like5")));
}
}

//audio6()
function audio6(){
const uthumb6 = document.getElementById("uthumb6");
//uthumb6.addEventListener("click",add1);
const dthumb6 = document.getElementById("dthumb6")
//dthumb6.addEventListener("click",remove1);
const like6 = document.getElementById("like6");
const dislike6 = document.getElementById("dislike6");

let rec6 = 0;
uthumb6.addEventListener("click",()=>
{
    if(rec6 == 0)
    {
        add1()
        rec6=rec6+1;
    }
    else if(rec6 == 1)
    {
        localStorage.removeItem("like6");
        like6.innerHTML=(JSON.parse(localStorage.getItem("like6")));
        rec6=rec6-1;
    }
}
);
dthumb6.addEventListener("click",()=>
    {
        if(rec6 == 1)
        {
            remove1()
            rec6=rec6-1;
        }
        else if (rec6==0)
        {
            localStorage.removeItem("dislike6");
            dislike6.innerHTML=(JSON.parse(localStorage.getItem("dislike6")));
            rec6=rec6+1;
        }
    }
    );
like6.innerHTML=(JSON.parse(localStorage.getItem("like6")));
dislike6.innerHTML=(JSON.parse(localStorage.getItem("dislike6")));
function add1()
{
    let initial6=(JSON.parse(localStorage.getItem("like6")));
    localStorage.setItem("like6", JSON.stringify(initial6+1));
    like6.innerHTML=(JSON.parse(localStorage.getItem("like6")));
    localStorage.removeItem("dislike6");
    dislike6.innerHTML=(JSON.parse(localStorage.getItem("dislike6")));
}

function remove1()
{
    let initial6=(JSON.parse(localStorage.getItem("dislike6")));
    localStorage.setItem("dislike6", JSON.stringify(initial6+1));
    dislike6.innerHTML=(JSON.parse(localStorage.getItem("dislike6")));
    localStorage.removeItem("like6");
    like6.innerHTML=(JSON.parse(localStorage.getItem("like6")));
}
}

audio7()
function audio7(){
const uthumb7 = document.getElementById("uthumb7");
//uthumb7.addEventListener("click",add7);
const dthumb7 = document.getElementById("dthumb7")
//dthumb7.addEventListener("click",remove7);
const like7 = document.getElementById("like7");
const dislike7 = document.getElementById("dislike7");

let rec7 = 0;
uthumb7.addEventListener("click",()=>
{
    if(rec7 == 0)
    {
        add7()
        rec7=rec7+1;
    }
    else if(rec7 == 1)
    {
        localStorage.removeItem("like7");
        like7.innerHTML=(JSON.parse(localStorage.getItem("like7")));
        rec7=rec7-1;
    }
}
);
dthumb7.addEventListener("click",()=>
    {
        if(rec7 == 1)
        {
            remove7()
            rec7=rec7-1;
        }
        else if (rec7==0)
        {
            localStorage.removeItem("dislike7");
            dislike7.innerHTML=(JSON.parse(localStorage.getItem("dislike7")));
            rec7=rec7+1;
        }
    }
    );
like7.innerHTML=(JSON.parse(localStorage.getItem("like7")));
dislike7.innerHTML=(JSON.parse(localStorage.getItem("dislike7")));
function add7()
{
    let initial6=(JSON.parse(localStorage.getItem("like7")));
    localStorage.setItem("like7", JSON.stringify(initial6+1));
    like7.innerHTML=(JSON.parse(localStorage.getItem("like7")));
    localStorage.removeItem("dislike7");
    dislike7.innerHTML=(JSON.parse(localStorage.getItem("dislike7")));
}

function remove7()
{
    let initial6=(JSON.parse(localStorage.getItem("dislike7")));
    localStorage.setItem("dislike7", JSON.stringify(initial6+1));
    dislike7.innerHTML=(JSON.parse(localStorage.getItem("dislike7")));
    localStorage.removeItem("like7");
    like7.innerHTML=(JSON.parse(localStorage.getItem("like7")));
}
}

audio8()
function audio8(){
const uthumb8 = document.getElementById("uthumb8");
//uthumb8.addEventListener("click",add);
const dthumb8 = document.getElementById("dthumb8")
//dthumb8.addEventListener("click",remove7);
const like8 = document.getElementById("like8");
const dislike8 = document.getElementById("dislike8");

let rec8 = 0;
uthumb8.addEventListener("click",()=>
{
    if(rec8 == 0)
    {
        add()
        rec8=rec8+1;
    }
    else if(rec8 == 1)
    {
        localStorage.removeItem("like8");
        like8.innerHTML=(JSON.parse(localStorage.getItem("like8")));
        rec8=rec8-1;
    }
}
);
dthumb8.addEventListener("click",()=>
    {
        if(rec8 == 1)
        {
            remove()
            rec8=rec8-1;
        }
        else if (rec8==0)
        {
            localStorage.removeItem("dislike8");
            dislike8.innerHTML=(JSON.parse(localStorage.getItem("dislike8")));
            rec8=rec8+1;
        }
    }
    );
like8.innerHTML=(JSON.parse(localStorage.getItem("like8")));
dislike8.innerHTML=(JSON.parse(localStorage.getItem("dislike8")));
function add()
{
    let initial8=(JSON.parse(localStorage.getItem("like8")));
    localStorage.setItem("like8", JSON.stringify(initial8+1));
    like8.innerHTML=(JSON.parse(localStorage.getItem("like8")));
    localStorage.removeItem("dislike8");
    dislike8.innerHTML=(JSON.parse(localStorage.getItem("dislike8")));
}

function remove()
{
    let initial8=(JSON.parse(localStorage.getItem("dislike8")));
    localStorage.setItem("dislike8", JSON.stringify(initial8+1));
    dislike8.innerHTML=(JSON.parse(localStorage.getItem("dislike8")));
    localStorage.removeItem("like8");
    like8.innerHTML=(JSON.parse(localStorage.getItem("like8")));
}
}

audio9()
function audio9(){
const uthumb9 = document.getElementById("uthumb9");
//uthumb9.addEventListener("click",add);
const dthumb9 = document.getElementById("dthumb9")
//dthumb9.addEventListener("click",remove7);
const like9 = document.getElementById("like9");
const dislike9 = document.getElementById("dislike9");

let rec9 = 0;
uthumb9.addEventListener("click",()=>
{
    if(rec9 == 0)
    {
        add()
        rec9=rec9+1;
    }
    else if(rec9 == 1)
    {
        localStorage.removeItem("like9");
        like9.innerHTML=(JSON.parse(localStorage.getItem("like9")));
        rec9=rec9-1;
    }
}
);
dthumb9.addEventListener("click",()=>
    {
        if(rec9 == 1)
        {
            remove()
            rec9=rec9-1;
        }
        else if (rec9==0)
        {
            localStorage.removeItem("dislike9");
            dislike9.innerHTML=(JSON.parse(localStorage.getItem("dislike9")));
            rec9=rec9+1;
        }
    }
    );
like9.innerHTML=(JSON.parse(localStorage.getItem("like9")));
dislike9.innerHTML=(JSON.parse(localStorage.getItem("dislike9")));
function add()
{
    let initial9=(JSON.parse(localStorage.getItem("like9")));
    localStorage.setItem("like9", JSON.stringify(initial9+1));
    like9.innerHTML=(JSON.parse(localStorage.getItem("like9")));
    localStorage.removeItem("dislike9");
    dislike9.innerHTML=(JSON.parse(localStorage.getItem("dislike9")));
}

function remove()
{
    let initial9=(JSON.parse(localStorage.getItem("dislike9")));
    localStorage.setItem("dislike9", JSON.stringify(initial9+1));
    dislike9.innerHTML=(JSON.parse(localStorage.getItem("dislike9")));
    localStorage.removeItem("like9");
    like9.innerHTML=(JSON.parse(localStorage.getItem("like9")));
}
}

audio10()
function audio10(){
const uthumb10 = document.getElementById("uthumb10");
//uthumb10.addEventListener("click",add1);
const dthumb10 = document.getElementById("dthumb10")
//dthumb10.addEventListener("click",remove1);
const like10 = document.getElementById("like10");
const dislike10 = document.getElementById("dislike10");

let rec10 = 0;
uthumb10.addEventListener("click",()=>
{
    if(rec10 == 0)
    {
        add()
        rec10=rec10+1;
    }
    else if(rec10 == 1)
    {
        localStorage.removeItem("like10");
        like10.innerHTML=(JSON.parse(localStorage.getItem("like10")));
        rec10=rec10-1;
    }
}
);
dthumb10.addEventListener("click",()=>
    {
        if(rec10 == 1)
        {
            remove()
            rec10=rec10-1;
        }
        else if (rec10==0)
        {
            localStorage.removeItem("dislike10");
            dislike10.innerHTML=(JSON.parse(localStorage.getItem("dislike10")));
            rec10=rec10+1;
        }
    }
    );
like10.innerHTML=(JSON.parse(localStorage.getItem("like10")));
dislike10.innerHTML=(JSON.parse(localStorage.getItem("dislike10")));
function add()
{
    let initial6=(JSON.parse(localStorage.getItem("like10")));
    localStorage.setItem("like10", JSON.stringify(initial6+1));
    like10.innerHTML=(JSON.parse(localStorage.getItem("like10")));
    localStorage.removeItem("dislike10");
    dislike10.innerHTML=(JSON.parse(localStorage.getItem("dislike10")));
}

function remove()
{
    let initial6=(JSON.parse(localStorage.getItem("dislike10")));
    localStorage.setItem("dislike10", JSON.stringify(initial6+1));
    dislike10.innerHTML=(JSON.parse(localStorage.getItem("dislike10")));
    localStorage.removeItem("like10");
    like10.innerHTML=(JSON.parse(localStorage.getItem("like10")));
}
}

audio11()
function audio11(){
const uthumb11 = document.getElementById("uthumb11");
//uthumb11.addEventListener("click",add1);
const dthumb11 = document.getElementById("dthumb11")
//dthumb11.addEventListener("click",remove1);
const like11 = document.getElementById("like11");
const dislike11 = document.getElementById("dislike11");

let rec11 = 0;
uthumb11.addEventListener("click",()=>
{
    if(rec11 == 0)
    {
        add()
        rec11=rec11+1;
    }
    else if(rec11 == 1)
    {
        localStorage.removeItem("like11");
        like11.innerHTML=(JSON.parse(localStorage.getItem("like11")));
        rec11=rec11-1;
    }
}
);
dthumb11.addEventListener("click",()=>
    {
        if(rec11 == 1)
        {
            remove()
            rec11=rec11-1;
        }
        else if (rec11==0)
        {
            localStorage.removeItem("dislike11");
            dislike11.innerHTML=(JSON.parse(localStorage.getItem("dislike11")));
            rec11=rec11+1;
        }
    }
    );
like11.innerHTML=(JSON.parse(localStorage.getItem("like11")));
dislike11.innerHTML=(JSON.parse(localStorage.getItem("dislike11")));
function add()
{
    let initial11=(JSON.parse(localStorage.getItem("like11")));
    localStorage.setItem("like11", JSON.stringify(initial11+1));
    like11.innerHTML=(JSON.parse(localStorage.getItem("like11")));
    localStorage.removeItem("dislike11");
    dislike11.innerHTML=(JSON.parse(localStorage.getItem("dislike11")));
}

function remove()
{
    let initial11=(JSON.parse(localStorage.getItem("dislike11")));
    localStorage.setItem("dislike11", JSON.stringify(initial11+1));
    dislike11.innerHTML=(JSON.parse(localStorage.getItem("dislike11")));
    localStorage.removeItem("like11");
    like11.innerHTML=(JSON.parse(localStorage.getItem("like11")));
}
}

audio12()
function audio12(){
const uthumb12 = document.getElementById("uthumb12");
//uthumb12.addEventListener("click",add1);
const dthumb12 = document.getElementById("dthumb12")
//dthumb12.addEventListener("click",remove1);
const like12 = document.getElementById("like12");
const dislike12 = document.getElementById("dislike12");

let rec12 = 0;
uthumb12.addEventListener("click",()=>
{
    if(rec12 == 0)
    {
        add()
        rec12=rec12+1;
    }
    else if(rec12 == 1)
    {
        localStorage.removeItem("like12");
        like12.innerHTML=(JSON.parse(localStorage.getItem("like12")));
        rec12=rec12-1;
    }
}
);
dthumb12.addEventListener("click",()=>
    {
        if(rec12 == 1)
        {
            remove()
            rec12=rec12-1;
        }
        else if (rec12==0)
        {
            localStorage.removeItem("dislike12");
            dislike12.innerHTML=(JSON.parse(localStorage.getItem("dislike12")));
            rec12=rec12+1;
        }
    }
    );
like12.innerHTML=(JSON.parse(localStorage.getItem("like12")));
dislike12.innerHTML=(JSON.parse(localStorage.getItem("dislike12")));
function add()
{
    let initial11=(JSON.parse(localStorage.getItem("like12")));
    localStorage.setItem("like12", JSON.stringify(initial11+1));
    like12.innerHTML=(JSON.parse(localStorage.getItem("like12")));
    localStorage.removeItem("dislike12");
    dislike12.innerHTML=(JSON.parse(localStorage.getItem("dislike12")));
}

function remove()
{
    let initial11=(JSON.parse(localStorage.getItem("dislike12")));
    localStorage.setItem("dislike12", JSON.stringify(initial11+1));
    dislike12.innerHTML=(JSON.parse(localStorage.getItem("dislike12")));
    localStorage.removeItem("like12");
    like12.innerHTML=(JSON.parse(localStorage.getItem("like12")));
}
}

audio13()
function audio13(){
const uthumb13 = document.getElementById("uthumb13");
//uthumb13.addEventListener("click",add1);
const dthumb13 = document.getElementById("dthumb13")
//dthumb13.addEventListener("click",remove1);
const like13 = document.getElementById("like13");
const dislike13 = document.getElementById("dislike13");

let rec13 = 0;
uthumb13.addEventListener("click",()=>
{
    if(rec13 == 0)
    {
        add()
        rec13=rec13+1;
    }
    else if(rec13 == 1)
    {
        localStorage.removeItem("like13");
        like13.innerHTML=(JSON.parse(localStorage.getItem("like13")));
        rec13=rec13-1;
    }
}
);
dthumb13.addEventListener("click",()=>
    {
        if(rec13 == 1)
        {
            remove()
            rec13=rec13-1;
        }
        else if (rec13==0)
        {
            localStorage.removeItem("dislike13");
            dislike13.innerHTML=(JSON.parse(localStorage.getItem("dislike13")));
            rec13=rec13+1;
        }
    }
    );
like13.innerHTML=(JSON.parse(localStorage.getItem("like13")));
dislike13.innerHTML=(JSON.parse(localStorage.getItem("dislike13")));
function add()
{
    let initial13=(JSON.parse(localStorage.getItem("like13")));
    localStorage.setItem("like13", JSON.stringify(initial13+1));
    like13.innerHTML=(JSON.parse(localStorage.getItem("like13")));
    localStorage.removeItem("dislike13");
    dislike13.innerHTML=(JSON.parse(localStorage.getItem("dislike13")));
}

function remove()
{
    let initial13=(JSON.parse(localStorage.getItem("dislike13")));
    localStorage.setItem("dislike13", JSON.stringify(initial13+1));
    dislike13.innerHTML=(JSON.parse(localStorage.getItem("dislike13")));
    localStorage.removeItem("like13");
    like13.innerHTML=(JSON.parse(localStorage.getItem("like13")));
}
}//





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
       
    