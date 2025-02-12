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
}