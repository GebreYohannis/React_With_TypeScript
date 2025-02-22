import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
}

function CommentList() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<Comment[]>("http://jsonplaceholder.typicode.com/comments", {
        signal: controller.signal,
      })
      .then((response) => {
        setLoading(false);
        // console.log(response.data);
        setComments(response.data);
      })
      .catch((error) => {
        // console.log(error);
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  if (isLoading) return <p className="spinner-border"></p>;

  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <ul className="list-group">
        {comments.map((comment) => (
          <li key={comment.id} className="list-group-item">
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
