import { useState } from "react";
import useComments from "./hooks/useComments";

function CommentList() {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const {
    data: comments,
    error,
    isLoading,
  } = useComments({
    page: page,
    pageSize: pageSize,
  });

  if (isLoading) return <p className="spinner-border"></p>;

  if (error) return <p className="text-danger">{error.message}</p>;

  return (
    <div>
      <ul className="list-group">
        {comments &&
          comments.map((comment) => (
            <li key={comment.id} className="list-group-item">
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </li>
          ))}
      </ul>
      <div className="m-3">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="btn btn-primary"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="btn btn-primary mx-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CommentList;
