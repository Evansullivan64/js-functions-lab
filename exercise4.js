fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completedCount = json.reduce((count, todo) => {
      return count + (todo.completed ? 1 : 0);
    }, 0);


    console.log(`Number of completed todos: ${completedCount}`);
  })

  
  .catch(function(err) { 
    console.log(err);

  });