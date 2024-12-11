import { useRef } from "react";

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    onAddTodo(enteredText);
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
