import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

function TodoForm() {
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);
  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((response) => response.data),
    onSuccess: (savedTodo, newTodo) => {
      // Approache I : Invalidating the cache
      // queryClient.invalidateQueries({
      //   queryKey:["todos"]
      // })
      // console.log(savedTodo, newTodo);

      // Approach 2: Updating data in the cache
      queryClient.setQueryData<Todo[]>(["todos"], (todos = []) => [
        savedTodo,
        ...todos,
      ]);

      if (inputRef.current && inputRef.current.value)
        inputRef.current.value = "";
    },
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
