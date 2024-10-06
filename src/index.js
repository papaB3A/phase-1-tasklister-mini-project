document.addEventListener("DOMContentLoaded", () => {
    //prevent the default behaviour of redirecting the browser after the form is submitted

    //create an event listener for create-task-form when submitted
    //let taskForm= document.getElementById("create-task-form");//create-task-form
    //taskForm.addEventListener("submit", function(event)

    //Create an event listener for myBtn
    let myBtn= document.getElementById("myBtn");
    myBtn.addEventListener("click", function(event){
        event.preventDefault();

        //get the "tasks" unordered list
        let tasks= document.getElementById("tasks");
        //get the "new-task-description", priority and "date" input values 
        let newTask= document.getElementById("new-task-description").value;
        let date= document.getElementById("date").value;
        let priority = document.getElementById("priority").value;

        //error msg for when input field is empty
        if(newTask== "" || newTask== null || date== "" || date== null){
            alert("Populate all the input fields!!");
            return;
        }


        //Create li element for the addedContent...make it a child element for the " tasks ul" 
        let content= document.createElement("li");
        content.classList.add("content");
        tasks.appendChild(content);//class name

        //create an input element and make it a child of the "content" li element
        let addedTask= document.createElement("input");
        addedTask.classList.add("addedTask");
        addedTask.type= "text";
        addedTask.setAttribute("readonly","readonly");//make it readonly
        content.appendChild(addedTask);

        // Set text color for the addedTask based on priority level
        if(priority === "high"){
            addedTask.style.color = "red";
        }else if(priority === "medium"){
            addedTask.style.color= "orange";
        }else{
            addedTask.style.color= "green";
        }

        //create an input element of type "date" and make it a child of the "content" li element
        let addedDate= document.createElement("input");
        addedDate.classList.add("addedDate");
        addedDate.type= "date";
        addedDate.setAttribute("readonly","readonly");//make it readonly
        content.appendChild(addedDate);

        //append data from user in the "tasks" list
        addedTask.value = newTask;
        addedDate.value = date;

        //create a button element and make it a child of the "content" li element
        let deleteBtn= document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.innerHTML= "Delete";
        content.appendChild(deleteBtn);

        //create event listener for deleteBtn...if clicked delete the content
        deleteBtn.addEventListener("click", function(){
            tasks.removeChild(content);
        });

        //create another button element and make it a child of the "content" li element
        let editBtn= document.createElement("button");
        editBtn.classList.add("editBtn");
        editBtn.innerHTML= "Edit";
        content.appendChild(editBtn);

        //create event listener for editBtn...if clicked edit the content
        editBtn.addEventListener("click", function(){
            if(editBtn.innerText=== "Edit"){
                //make the addedTask and addedDate editable
                addedTask.removeAttribute("readonly");
                addedTask.focus();

                addedDate.removeAttribute("readonly");
                addedDate.focus();
                editBtn.innerText= "Save";
            }else{
                //change the addedTask and addedDate back to a readonly element
                addedTask.setAttribute("readonly","readonly");
                addedTask.blur();

                addedDate.setAttribute("readonly","readonly");
                addedDate.blur();
                editBtn.innerText= "Edit";
            }
        });
        // tasks.innerHTML += `
        //     <li class="content">
        //         <span class="addedTask">${newTask}</span>
        //         OR
        //         <input type="text" class="addedTask" value="${newTask}">
        //         <button type="button" class="deleteBtn">x</button>
        //     </li>
        //     <br>
        // `;
    });

    //Create New Task
    //let myBtn= document.getElementById("myBtn");

    // myBtn.addEventListener("click", function(event){
    // event.preventDefault();
    // });
});
