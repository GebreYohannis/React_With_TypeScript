import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function usePosts(userId: number | undefined) {
  const fetchePosts = () =>
    axios
      .get<Post[]>("http://jsonplaceholder.typicode.com/posts/", {
        params: {
          userId,
        },
      })
      .then((response) => response.data);
  return useQuery<Post[], Error>({
    queryKey: userId ? ["users", { userId: userId }, "posts"] : ["posts"],
    queryFn: fetchePosts,
    staleTime: 1000 * 10, // 10s
  });
}

export default usePosts;
