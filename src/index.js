document.addEventListener("DOMContentLoaded", () => {
  //prevent the default behaviour of redirecting the browser after the form is submitted
  //create an event listener for create-task-form when submitted
  let taskForm= document.getElementById("create-task-form");//create-task-form
  taskForm.addEventListener("submit", function(event){
      event.preventDefault();

      //get the "tasks" unordered list
      let tasks= document.getElementById("tasks");
      //get the "new-task-description" input field
      let newTask= document.getElementById("new-task-description").value;
      //error msg for when input field is empty
      if(newTask== "" || newTask== null){
          alert("Task description must be filled!!");
          return;
      }


      //Create li element for the addedContent...make it a child element for the " tasks ul" 
      let content= document.createElement("li");
      content.classList.add("content");
      tasks.appendChild(content);//class name

      //create an input/ span element and make it a child of the "content" li element
      //let addedTask= document.createElement("span");
      let addedTask= document.createElement("input");
      addedTask.classList.add("addedTask");
      addedTask.type= "text";
      addedTask.setAttribute("readonly","readonly");//make it readonly
      content.appendChild(addedTask);

      //append data from user in the "tasks" list
      addedTask.value = newTask;
      //addedTask.textContent = newTask;

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
              //make the addedTask editable
              addedTask.removeAttribute("readonly");
              addedTask.focus();
              editBtn.innerText= "Save";
          }else{
              //change the addedTask back to a readonly element
              addedTask.setAttribute("readonly","readonly");
              addedTask.blur();
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
