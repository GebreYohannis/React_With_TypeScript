import { Todo } from "../todo";

interface Props {
  todo: Todo;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleComplete, removeTodo }: Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <input className="ms-2 me-2" type="checkbox" id={`${todo.id}`} />
        <label
          htmlFor={`${todo.id}`}
          style={{
            textDecoration: todo.completed ? "line-through" : undefined,
          }}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.text}
        </label>
      </div>
      <span className="ms-2">{todo.dueDate.toLocaleString()}</span>
      <button
        className="btn btn-outline-danger ms-5"
        onClick={() => removeTodo(todo.id)}
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
