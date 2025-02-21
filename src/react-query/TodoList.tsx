import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const TodoList = () => {
  const { data: todos, error } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () =>
      axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.data),
  });

  if (error) return <div className="text-danger">{error.message}</div>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
