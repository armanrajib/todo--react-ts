import { FC } from "react";

interface TodoProps {
  todo: string;
}

const TodoItem: FC<TodoProps> = ({ todo }) => {
  return <li>{todo}</li>;
};

export default TodoItem;
