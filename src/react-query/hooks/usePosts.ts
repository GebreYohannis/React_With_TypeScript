import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostQuery {
  page: number;
  pageSize: number;
  userId: number | undefined;
}

function usePosts(query: PostQuery) {
  const fetchePosts = () =>
    axios
      .get<Post[]>("http://jsonplaceholder.typicode.com/posts/", {
        params: {
          userId: query.userId,
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((response) => response.data);
  return useQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: fetchePosts,
    staleTime: 10 * 60 * 1000, // 1m
    placeholderData: keepPreviousData,
  });
}

export default usePosts;
