import { useContext, useRef } from "react";

import { TodosContext } from "../contexts/todosContext";

const NewTodo: React.FC = () => {
  const { addTodo } = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    addTodo(enteredText);
    todoTextInputRef.current!.value = "";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
