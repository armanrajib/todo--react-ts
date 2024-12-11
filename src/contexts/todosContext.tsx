import { createContext, useState } from "react";

import Todo from "../models/todo";

type TodosContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

interface TodosContextProviderProps {
  children: React.ReactNode;
}

const TodosContext = createContext<TodosContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider: React.FC<TodosContextProviderProps> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    setTodos((prevTodos) => [...prevTodos, new Todo(text)]);
  }

  function removeTodo(id: string) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  const contextValue: TodosContextType = { todos, addTodo, removeTodo };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosContextProvider };
