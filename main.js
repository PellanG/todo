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
    
    for (let i = 0; i < toDoList.length; i++) { 
        
        const listItem=document.createElement("li");
        const finishedTask = document.createElement("input");
        const isDeleted=document.createElement("span");
        const closeBtn=document.createTextNode("\u00D7");
        
        isDeleted.className="closeItem";
        finishedTask.type="checkbox";
        finishedTask.className="checked";
    
        finishedTask.checked=toDoList[i].done;
        listItem.innerHTML=toDoList[i].name;
        
        listItem.appendChild(finishedTask);
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
        
        newlistItem.appendChild(inputValue);
        newlistItem.appendChild(newfinishedTask);
        newisDeleted.appendChild(newcloseBtn);
        newlistItem.appendChild(newisDeleted);
        listContainer.appendChild(newlistItem);
    
    }
const addTask = (e)=>{ //Lägger till det användaren skriver i listan
    e.preventDefault();
    const addTaskUserinput=document.getElementById("userinput").value;

    if (addTaskUserinput==="") {
        alert("You forgot to write something to do.");
        
    }
    else{
    console.log("det funkar");
    creatHtmlNewItem(addTaskUserinput);
    
    document.getElementById("userinput").value="";
    }
    
}
const item1=new Listitem("Städa",false);
const item2=new Listitem("Diska",false);
const item3=new Listitem("Handla",false);

const toDoList=[item1,item2,item3];

let listContainer=document.getElementById("list");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click",addTask);
creatHtml();
