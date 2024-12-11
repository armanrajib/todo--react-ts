import Todos from "./components/Todos";
import Todo from "./models/todo";

const todos = [
  new Todo("Learn React"),
  new Todo("Learn TypeScript"),
  new Todo("Learn Redux"),
  new Todo("Learn Next.js"),
  new Todo("Learn GraphQL"),
  new Todo("Learn Node.js"),
];

function App() {
  return (
    <div>
      <h1>📃 Todo List</h1>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
