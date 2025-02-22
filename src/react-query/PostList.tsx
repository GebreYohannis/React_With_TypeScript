import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [userId, setUserId] = useState<number>();
  const {
    data: posts,
    error,
    isLoading,
  } = usePosts({
    page: page,
    pageSize: pageSize,
    userId: userId,
  });

  if (isLoading) return <p className="spinner-border" />;

  if (error) return <p className="text-danger">{error.message}</p>;

  return (
    <div className="container">
      <select
        onChange={(evnet) => setUserId(parseInt(evnet.target.value))}
        className="form-select mb-3"
        value={userId}
      >
        <option value="">Select user....</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            <h3 className="fs-2">{post.title}</h3>
            <p className="fs-5">{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="my-3">
        <button
          disabled={page === 1}
          className="btn btn-primary"
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <button
          className="btn btn-primary ms-2"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
