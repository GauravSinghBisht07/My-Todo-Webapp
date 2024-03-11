const list = document.getElementById("list");
const button = document.getElementById("btn");
const lists = document.querySelector(".lists");

button.addEventListener("click",(e)=>{
    if(list.value == ""){
        alert("Please enter something")
    }
    else{
        let newli = document.createElement("li")
        newli.textContent = list.value;
        lists.appendChild(newli);
        let newspan = document.createElement("span")
        newspan.textContent = "\u00d7"
        newli.appendChild(newspan);

        list.value = "";
        setdata();
    }
})

lists.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        setdata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        setdata();
    }

})

function setdata(){
    localStorage.setItem("data",lists.innerHTML);
}

function getdata(){
    lists.innerHTML = localStorage.getItem("data")
}
getdata();