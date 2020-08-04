var todos = [];
window.setTimeout(function () {
  while (true) {
    var input = prompt("What would you like to do?");

    if (input === "list") {
      listTodos();
    } else if (input === "new") {
      addTodo();
    } else if (input === "delete") {
      deleteTodo();
    } else if (input === "quit") {
      break;
    }
  }
  alert("Okay! You quit the App");
}, 500);

function listTodos() {
  console.log("**********");
  todos.forEach(function (todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("**********");
}

function addTodo() {
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Todo Added!");
}

function deleteTodo() {
  var idx = prompt("Enter index of todo to delete");
  todos.splice(idx, 1);
  console.log("Todo Deleted!");
}
