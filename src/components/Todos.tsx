import { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../contexts/todosContext";

const Todos: React.FC = () => {
  const { todos } = useContext(TodosContext);

  if (todos.length === 0)
    return <p>There is no todos. Start adding to your todo list.</p>;

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
