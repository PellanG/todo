import "./SCSS/main.scss";
class Listitem{
    name;
    done;

    constructor(name,done){
        this.name=name;
        this.done=done;
    }
}

const item1=new Listitem("Städa",false);
const item2=new Listitem("Diska",true);
const item3=new Listitem("Handla",true);

const toDoList=[item1,item2,item3];

let listContainer=document.getElementById("list");


function printList(taskFromUser){
    
    for (let i = 0; i < toDoList.length; i++) { 
        
        let listItem=document.getElementById("listitem");
        const finishedTask = document.createElement("input");
        toDoList.push=taskFromUser;
        
         if (true) {
            listItem.innerHTML=(toDoList[i]).name;
            finishedTask.type="checkbox";
            finishedTask.className="checkbox";
            finishedTask.checked=(toDoList[i]).done;

              
         }
            listItem.innerHTML=(toDoList[i]).name;
            console.log(toDoList[i]);
            listItem.appendChild(finishedTask);
            listContainer.appendChild(listItem);
            
        }
    
    }

const addTask = (e)=>{
    e.preventDefault();

    const addTaskUserinput=document.getElementById("userinput").value;

    if (addTaskUserinput==="") {
        alert("You forgot to write something to do.");
        
    }
    console.log("du klickade");
    const taskFromUser=document.getElementById("userinput").value;
    document.getElementById("userinput").value="";
}


document.getElementById("input-container-form").addEventListener("submit",addTask);

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click",addTask);
printList();

