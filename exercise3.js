fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompletedTodos = [];

    json.forEach((todo) => {
      if (!todo.completed) {
        const uncompletedTodo = {
        userId: todo.userId,
          title: todo.title,
        };

        uncompletedTodos.push(uncompletedTodo);
      }
    });


    console.log(uncompletedTodos);
  })
  .catch(function(err) { 
    console.log(err);
  });