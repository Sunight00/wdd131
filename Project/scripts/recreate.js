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