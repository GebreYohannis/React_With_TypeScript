import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
}

const useComments = () =>
  useQuery<Comment[], Error>({
    queryKey: ["comments"],
    queryFn: () =>
      axios
        .get<Comment[]>("http://jsonplaceholder.typicode.com/comments")
        .then((response) => response.data),
  });

export default useComments;
