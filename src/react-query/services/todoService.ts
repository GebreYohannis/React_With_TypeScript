import createAPIClient from "./api-client";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export default createAPIClient<Todo>("/todos");
