import { FormEvent, useRef } from "react";
import useAddTodo from "./hooks/useAddTodo";

function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useAddTodo(() => {
    if (inputRef.current && inputRef.current.value) inputRef.current.value = "";
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (inputRef.current && inputRef.current.value) {
      addTodo.mutate({
        id: 0,
        title: inputRef.current.value,
        completed: false,
        userId: 1,
      });
    }
  };

  // if (addTodo.isPending)
  //   return <div className="text-success">Adding todo....</div>;
  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form className="row mb-3" onSubmit={onSubmit}>
        <div className="col">
          <input type="text" className="form-control" ref={inputRef} />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addTodo.isPending}>
            {addTodo.isPending ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
