import useComments from "./hooks/useComments";

function CommentList() {
  const { data: comments, error, isLoading } = useComments();

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
    </div>
  );
}

export default CommentList;
