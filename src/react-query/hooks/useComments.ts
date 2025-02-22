import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
}

export interface CommentQuery {
  pageSize: number;
}

const useComments = (query: CommentQuery) => {
  return useInfiniteQuery<Comment[], Error>({
    queryKey: ["comments", query],
    queryFn: ({ pageParam = 0 }) =>
      axios
        .get<Comment[]>("http://jsonplaceholder.typicode.com/comments", {
          params: {
            _start: <number>pageParam * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((response) => response.data),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === query.pageSize
        ? allPages.length + 1
        : undefined;
    },
    getPreviousPageParam: (firstPage, pages) => {
      return firstPage.length > 1 ? pages.length - 1 : undefined;
    },
  });
};

export default useComments;
