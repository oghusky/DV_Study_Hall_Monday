// load event listener waits until document is fully loaded to run function 
window.addEventListener("load", () => {
  // using DOM to set document title
  document.title = "Cool Todo List";
  const todoList = [];
  let isDone = false;
  // when submit button is clicked
  document.querySelector(".btn-primary").addEventListener("click", (e) => {
    // keeps page from reloading after each todo submission
    e.preventDefault();
    const todoInput = document.querySelector("#todo_input");
    // makes sure submission only works when input has text in it
    if (todoInput.value !== "") {
      document.querySelector("#todo_list").innerHTML = "";
      // console.log(todoInput.value);
      pushTodo(todoInput.value);
      showArrInHtml(todoList);
      clearInput(todoInput);
    }
  });
  // grabs input value and pushes to todolist array
  function pushTodo(todo) {
    todoList.push(todo);
    return todoList
  }
  // grabs input value
  function clearInput(input) {
    input.value = "";
  }
  // create div for each todo
  function showArrInHtml(arr) {
    arr.map(todo => {
      // takes in array from parameter and accesses each element
      // then for each element create a div
      const todoItem = document.createElement('div');
      // after div is created add class
      todoItem.classList.add('todo_div');
      // set data attribute equal todo
      // HINT this is for when we want to delete todo from not just UI but from array created
      todoItem.setAttribute("data-todo_id", todo)
      // this is what the HTML for each todo will look like
      todoItem.innerHTML = `
        <button class="btn btn-outline-success p-0"><i class="far fa-check-square"></i></button>
        <p class="p-3" id="todo_item">${todo}</p>
        <button class="btn btn-outline-danger p-0"><i class="far fa-trash-alt"></i></button>
      `;
      // after todo HTML is created append to div with ID of todo_list in HTML
      document.querySelector("#todo_list").append(todoItem);
    });
  }
  // when trash button is clicked
  $("#todo_list").on("click", ".btn-outline-danger", (e) => {
    e.target.parentElement.parentElement.remove();
    const todo_id = e.target.parentElement.parentElement.getAttribute("data-todo_id");
    // splice deletes from array at specific position
    todoList.splice(todoList.indexOf(todo_id), 1)
  });
  // check button is clicked
  // toggles done class
  $("#todo_list").on("click", ".btn-outline-success", (e) => {
    // checks if NOT done when clicked
    if (!isDone) {
      // if not done when clicked add these classes
      const todo_text = e.target.parentElement.nextElementSibling;
      todo_text.classList.add("done");
      e.target.parentElement.parentElement.classList.add("done-div");
      isDone = true;
    } else {
      // else if is done when clicked remove classes
      const todo_text = e.target.parentElement.nextElementSibling;
      todo_text.classList.remove("done");
      e.target.parentElement.parentElement.classList.remove("done-div");
      isDone = false;
    }
  });
});