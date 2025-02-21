import usePosts from "./hooks/usePosts";

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts();

  if (isLoading) return <p className="spinner-border" />;

  if (error) return <p className="text-danger">{error.message}</p>;

  return (
    <div className="container">
      <ul className="list-group">
        {posts?.map((post) => (
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
