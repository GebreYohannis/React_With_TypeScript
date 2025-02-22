import { Fragment } from "react";
import useComments from "./hooks/useComments";

function CommentList() {
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useComments({
      pageSize: pageSize,
    });

  if (isLoading) return <p className="spinner-border"></p>;

  if (error) return <p className="text-danger">{error.message}</p>;

  return (
    <div>
      <ul className="list-group">
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.map((comment) => (
              <li key={comment.id} className="list-group-item">
                <h3>{comment.name}</h3>
                <p>{comment.body}</p>
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
      <div className="m-3">
        <button
          onClick={() => fetchNextPage()}
          className="btn btn-primary mx-2"
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      </div>
    </div>
  );
}

export default CommentList;
