//First Audio
audio1()
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



audio2()
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













