import "./SCSS/main.scss";
class Listitem{
    name;
    done;
    

    constructor(name,done){
        this.name=name;
        this.done=done;
        
    }
}
function creatHtml(){//Skapar html för listan.
    const listOfTask=document.getElementById("list");
    listOfTask.innerHTML="";
    for (let i = 0; i < toDoList.length; i++) { 
        
        const listItem=document.createElement("li");
        const taskName=document.createElement("span");
        const finishedTask = document.createElement("input");
        const isDeleted=document.createElement("span");
        const closeBtn=document.createTextNode("\u00D7");
        

        isDeleted.className="closeItem";
        finishedTask.type="checkbox";
        finishedTask.className="checked";
        
        finishedTask.checked=toDoList[i].done;
        taskName.innerHTML=toDoList[i].name;
        
        
        listItem.appendChild(finishedTask);
        listItem.appendChild(taskName);
        isDeleted.appendChild(closeBtn);
        listItem.appendChild(isDeleted);
        listContainer.appendChild(listItem);
        }
        
    
    }  
function creatHtmlNewItem(){//Skapar html för nya listobjekt(ej pushat till lista)
        const newUserInput=document.getElementById("userinput").value;
        const newlistItem=document.createElement("li");
        const inputValue = document.createTextNode(newUserInput);
        const newfinishedTask = document.createElement("input");
        const newisDeleted=document.createElement("span");
        const newcloseBtn=document.createTextNode("\u00D7");
        
        newisDeleted.className="closeItem";
        newfinishedTask.type="checkbox";
        newfinishedTask.className="checked";
        
        newlistItem.appendChild(newfinishedTask);
        newlistItem.appendChild(inputValue);
        newisDeleted.appendChild(newcloseBtn);
        newlistItem.appendChild(newisDeleted);
        listContainer.appendChild(newlistItem);
    
    }

function closeTask(){
    const close=document.getElementsByClassName("closeItem");
    console.log(close);
    
}

const item1=new Listitem("Städa",false);
const item2=new Listitem("Diska",false);
const item3=new Listitem("Handla",false);

const toDoList=[item1,item2,item3];

const addTask = (e)=>{ //Lägger till det användaren skriver i listan
    e.preventDefault();
    const addTaskUserinput=document.getElementById("userinput").value;

    if (addTaskUserinput==="") {
        alert("You forgot to write something to do.");
        
    }
    else{
    const newItem = new Listitem(addTaskUserinput,false);
    console.log(newItem);
    toDoList.push(newItem);
    creatHtml();
    
    
    
    document.getElementById("userinput").value="";
    }
    
}

let listContainer=document.getElementById("list");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click",addTask);
creatHtml();


