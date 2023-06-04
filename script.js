//Declaring Variables

let addTask = document.getElementById('addTask');
let container = document.getElementById('container');
let inputField = document.getElementById('inputField');
let toDoContains = document.getElementById('toDoContains');
let dueDateInput = document.getElementById('dueDateInput');
let notesInput = document.getElementById('notesInput');


addTask.addEventListener('click', function(){
    let task = inputField.value;
    let dueDate = dueDateInput.value;
   

    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = task + '(Due: ' + dueDate + ')';
    toDoContains.appendChild(paragraph);
    inputField.value = "";
    dueDateInput.value = "";
    
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContains.removeChild(paragraph);
    })
    
})


inputField.addEventListener('keypress', function(event){
    if (event.key === "Enter"){

        let task = inputField.value;
        let dueDate = dueDateInput.value;
      
        let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = task + '(Due: ' + dueDate + ')';
    toDoContains.appendChild(paragraph);
    inputField.value = "";
    dueDateInput.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContains.removeChild(paragraph);
    })
    
    };
})
