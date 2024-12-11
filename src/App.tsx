import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <h1>📃 Todo List</h1>
      <Todos />
      <h1>📝 Add New Todo to the List</h1>
      <NewTodo />
    </div>
  );
}

export default App;
