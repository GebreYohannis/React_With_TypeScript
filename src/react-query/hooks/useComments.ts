import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
}

export interface CommentQuery {
  page: number;
  pageSize: number;
}

const useComments = (query: CommentQuery) => {
  const fetchComments = () =>
    axios
      .get<Comment[]>("http://jsonplaceholder.typicode.com/comments", {
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((response) => response.data);
  return useQuery<Comment[], Error>({
    queryKey: ["comments", query],
    queryFn: fetchComments,
    placeholderData: keepPreviousData,
  });
};

export default useComments;
