import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";
interface AddTodoContext {
  previousTodos: Todo[];
}
// This is all about data management

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);
      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      // Approache I : Invalidating the cache
      // queryClient.invalidateQueries({
      //   queryKey:CACHE_KEY_TODOS
      // })
      // console.log(savedTodo, newTodo);

      // Approach 2: Updating data in the cache
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) =>
        todos.map((todo) => (todo === newTodo ? savedTodo : todo))
      );

      onAdd();
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });

  return { addTodo };
};

export default useAddTodo;
