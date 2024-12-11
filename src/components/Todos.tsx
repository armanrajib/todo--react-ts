import { FC } from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

interface TodosProps {
  todos: Todo[];
}

const Todos: FC<TodosProps> = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
