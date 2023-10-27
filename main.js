import "./SCSS/main.scss";
class Listitem{
    name;
    done;
    removeTask;
    

    constructor(name,done,removeTask){
        this.name=name;
        this.done=done;
        this.removeTask=removeTask;
        
    }
}
function creatHtml(){//Skapar html för listan.
    const listOfTask=document.getElementById("list");
    listOfTask.innerHTML="";

    for (let i = 0; i < toDoList.length; i++){
        const listContainer=document.getElementById("list");
        const taskItem=document.createElement("li");
        const taskName=document.createElement("span");
        const finishedTask = document.createElement("button");
        const isDeleted=document.createElement("button");
        
        taskItem.className="listitem";
        taskName.className="itsDone";
        isDeleted.id="close";
        isDeleted.className="closeBtn";
        finishedTask.className="checkBtn";
        
        isDeleted.innerHTML="\u00D7";
        isDeleted.checked=toDoList[i].removeTask;
        finishedTask.value = toDoList[i].done;
        taskName.innerHTML = toDoList[i].name;
       
        
        taskItem.appendChild(finishedTask);
        taskItem.appendChild(taskName);
        taskItem.appendChild(isDeleted);
        listContainer.appendChild(taskItem);
        
        
        
        function deleteTask(task){          //Funktionen för att ta bort ett listobjekt
            task.removeTask=true;
            if (true) { 
                toDoList.splice(i,1);
                creatHtml(); 
            }      
        }
        finishedTask.addEventListener("click",() => {
           completedTask(finishedTask,toDoList[i]);
        });

        isDeleted.addEventListener("click",() => { //Anropa funktion
            deleteTask(toDoList[i]);
        });
    } 
    
    saveList(); 
        }
   
function completedTask (theTask,tasks){//Markerar listobjekt som klar
            tasks.done = !tasks.done;
               if (tasks.done) {
                console.log("yes");
                theTask.classList.add("checked");
               }
                else{
                theTask.classList.toggle("checked");
                console.log(tasks);
                console.log(theTask);
                }
               saveList();
                }
            
                
            
            
            

            
                
            
        
            
            
     
    
      
   
const addTask = (e)=>{ //Lägger till det användaren skriver i listan
    e.preventDefault();
    const addTaskUserinput=document.getElementById("userinput").value;

    if (addTaskUserinput==="") {
        alert("You forgot to write something to do.");
        
    }
    else{
    const newItem = new Listitem(addTaskUserinput,false,false);
    console.log(newItem);
    toDoList.push(newItem);
    
    creatHtml();
    
    document.getElementById("userinput").value="";
    }
    
    
}
function saveList(){
    localStorage.setItem("list",JSON.stringify(toDoList));
}
function loadList(){
    const listFromLs = JSON.parse(localStorage.getItem("list")||"[]");
    toDoList=listFromLs;
    creatHtml();
    
}

const item1=new Listitem("Städa",false,false);
const item2=new Listitem("Diska",false,false);
const item3=new Listitem("Handla",false,false);

let toDoList=[item1,item2,item3];

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click",addTask);

/*const taskContainer=document.getElementById("list")
taskContainer.addEventListener("click",(e)=>{
if (e.target.tagName==="input") {
    e.target.classList.toggle("checked");
    console.log("hje");
}
},false);
console.log(taskContainer);*/
loadList();
creatHtml();








