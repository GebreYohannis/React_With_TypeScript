import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<Post[]>("http://jsonplaceholder.typicode.com/posts", {
        signal: controller.signal,
      })
      .then((response) => {
        setLoading(false);
        setPosts(response.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  if (isLoading) return <p className="spinner-border" />;

  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container">
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h3 className="fs-2">{post.title}</h3>
            <p className="fs-5">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
