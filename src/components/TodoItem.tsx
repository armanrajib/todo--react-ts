import { useContext } from "react";
import { TodosContext } from "../contexts/todosContext";

interface TodoProps {
  id: string;
  text: string;
}

const TodoItem: React.FC<TodoProps> = ({ id, text }) => {
  const { removeTodo } = useContext(TodosContext);

  return <li onClick={() => removeTodo(id)}>{text}</li>;
};

export default TodoItem;
