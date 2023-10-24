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
const item2=new Listitem("Diska",false);
const item3=new Listitem("Handla",false);

const toDoList=[item1,item2,item3];

let listContainer=document.getElementById("list");


function printList(newTask){
    
    for (let i = 0; i < toDoList.length; i++) { 
        
        let listItem=document.getElementById("listitem");
        const finishedTask = document.createElement("input");
        console.log(newTask);
        

        finishedTask.type="checkbox";
        finishedTask.className="checked";
        finishedTask.checked=toDoList[i].done;
        listItem.innerHTML=toDoList[i].name;
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
    else{
    console.log("det funkar");
    const newTask=document.createElement("li");
    document.getElementById("list").appendChild(newTask);
    
    document.getElementById("userinput").value="";
    console.log(newTask);
    return newTask();
    }
    
}
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click",addTask);
printList();

