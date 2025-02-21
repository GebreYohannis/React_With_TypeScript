import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: string;
}

function usePosts() {
  const fetchePosts = () =>
    axios
      .get<Post[]>("http://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data);
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchePosts,
    staleTime: 1000 * 10, // 10s
  });
}

export default usePosts;
