import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAddTodo(todoText: string) {
    setTodos((prevTodos) => [...prevTodos, new Todo(todoText)]);
  }

  function handleRemoveTodo(todoId: string) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div>
      <h1>📃 Todo List</h1>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
      <h1>📝 Add New Todo to the List</h1>
      <NewTodo onAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
