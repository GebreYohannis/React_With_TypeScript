import { useState } from "react";
import TodoList from "./components/TodoList";
import { Todo } from "./todo";
import TodoForm from "./components/TodoForm";

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: Date.now(),
      text: "Watching movies",
      dueDate: new Date(),
      completed: false,
    },
    {
      id: Date.now() + 1,
      text: "Reading books",
      dueDate: new Date(),
      completed: false,
    },
    {
      id: Date.now() + 2,
      text: "Playing Music",
      dueDate: new Date(),
      completed: false,
    },
  ]);

  const addTodo = (text: string, dueDate: Date): void => {
    setTodos([
      ...todos,
      { id: Date.now(), text: text, dueDate: dueDate, completed: false },
    ]);
  };
  const toggleComplete = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default TodoApp;
