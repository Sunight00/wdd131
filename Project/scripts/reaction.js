//First Audio

const uthumb1 = document.getElementById("uthumb1");
uthumb1.addEventListener("click",add1);

const dthumb1 = document.getElementById("dthumb1")
dthumb1.addEventListener("click",remove1);

const like1 = document.getElementById("like1");
const dislike1 = document.getElementById("dislike1");





like1.innerHTML=(JSON.parse(localStorage.getItem("like1")));
function add1()
{
    let initial=(JSON.parse(localStorage.getItem("like1")));
    localStorage.setItem("like1", JSON.stringify(initial+1));
    like1.innerHTML=(JSON.parse(localStorage.getItem("like1")));
}

function remove1()
{
    let initial=(JSON.parse(localStorage.getItem("dislike1")));
    localStorage.setItem("dislike1", JSON.stringify(initial+1));
    dislike1.innerHTML=(JSON.parse(localStorage.getItem("dislike1")));
}
