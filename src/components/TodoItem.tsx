interface TodoProps {
  id: string;
  text: string;
  onRemoveTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoProps> = ({ id, text, onRemoveTodo }) => {
  return <li onClick={() => onRemoveTodo(id)}>{text}</li>;
};

export default TodoItem;
