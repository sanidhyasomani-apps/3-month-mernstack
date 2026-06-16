const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    const task=input.value.trim();
    if(task==="") return;
    const li=document.createElement("li");
    li.textContent=task;
    const deletbtn=document.createElement("button");
    deletbtn.textContent="delete";
    deletbtn.addEventListener("click",()=>{
        li.remove();
    })
    li.appendChild(deletbtn);
    

    taskList.appendChild(li);
    input.value="";

});
