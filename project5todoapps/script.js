const input=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function rendertodo(task){
    const li=document.createElement("li");
    li.textContent=task;
    taskList.appendChild(li);
    input.value="";
    let dltbtn=document.createElement("button");
     dltbtn.textContent="delete";
     li.appendChild(dltbtn);
     dltbtn.addEventListener("click",()=>{
        li.remove();
        todos=todos.filter(todo=>todo!==task)
        localStorage.setItem("todos",JSON.stringify(todos))
     })
}
todos.forEach(task=>{
    rendertodo(task);
});
addBtn.addEventListener("click",()=>{
    const task=input.value.trim();
    if(task===""){
        return;
    }
   todos.push(task)
    localStorage.setItem("todos",JSON.stringify(todos));
    rendertodo(task);

})

