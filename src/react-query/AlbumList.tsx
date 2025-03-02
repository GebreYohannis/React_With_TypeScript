import useAlbum from "./hooks/useAlbum";

const AlbumList = () => {
  const { albums, error, isLoading } = useAlbum();
  if (isLoading) return <p className="spinner-border"></p>;

  if (error) return <p className="alert alert-danger">{error}</p>;

  return (
    <ul className="list-group">
      {albums.map((album) => (
        <li key={album.id} className="list-group-item">
          {album.title}
        </li>
      ))}
    </ul>
  );
};

export default AlbumList;
