let addbtn=document.querySelector("#addbtn")
let inputbox=document.querySelector("#input-box")
let listcontainer=document.querySelector("#list-container")

const addNote=()=>{
    if(inputbox.value==='')
    {
        alert("You must write something!")
    }
    else
    {
        let tasks=inputbox.value
        let list=document.createElement("li")
        list.innerText=tasks
        listcontainer.append(list)
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        list.append(span)
        inputbox.value=""
    }
}


addbtn.addEventListener("click",()=>{
    addNote()
})

let count=0

listcontainer.addEventListener("click",(event)=>
{
    if(event.target.tagName==='LI' && count===0)
    {
        event.target.classList.add("checked")
        count=1
    }
    else if(event.target.tagName==='LI' && count===1)
    {
        event.target.classList.remove("checked")
        count=0
    }
    else if(event.target.tagName==='SPAN')
    {
        event.target.parentElement.remove()
    }
})