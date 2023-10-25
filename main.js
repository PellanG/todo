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
        const listItem=document.createElement("li");
        const taskName=document.createElement("span");
        const finishedTask = document.createElement("input");
        const isDeleted=document.createElement("button");
        
        
        isDeleted.id="close";
        isDeleted.className="closeBtn";
        finishedTask.type="checkbox";
        finishedTask.name="itsDone";
        
        
        isDeleted.innerHTML="\u00D7";
        isDeleted.checked=toDoList[i].removeTask;
        finishedTask.checked = toDoList[i].done;
        taskName.innerHTML = toDoList[i].name;
        
        
        listItem.appendChild(finishedTask);
        listItem.appendChild(taskName);
        listItem.appendChild(isDeleted);
        listContainer.appendChild(listItem);

        isDeleted.addEventListener("click",() => { //Anropa funktion
            deleteTask(toDoList[i]);
        });
        function deleteTask(task){          //Funktionen för att ta bort ett listobjekt
            console.log(task);
            task.removeTask=true;
            if (true) { 
                toDoList.splice(i,1);
                creatHtml(); 
            }      
        }
        finishedTask.addEventListener("change",() => {
            completedTask(toDoList[i]);
        });
    } 
        
        }

function completedTask(theTask){
    if (theTask.done=true) {
        theTask.className ="checked";
    console.log(theTask);  
    creatHtml();
    } else {
        theTask=!theTask;
        creatHtml();  
    }
    
    
    
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

const item1=new Listitem("Städa",false,false);
const item2=new Listitem("Diska",false,false);
const item3=new Listitem("Handla",false,false);

const toDoList=[item1,item2,item3];

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click",addTask);

creatHtml();







