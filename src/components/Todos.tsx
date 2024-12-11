import TodoItem from "./TodoItem";
import Todo from "../models/todo";

interface TodosProps {
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
}

const Todos: React.FC<TodosProps> = ({ todos, onRemoveTodo }) => {
  if (todos.length === 0)
    return <p>There is no todos. Start adding to your todo list.</p>;

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
