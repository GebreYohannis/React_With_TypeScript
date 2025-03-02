import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Album {
  id: number;
  title: string;
  userId: number;
}

const AlbumList = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<Album[]>("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        setLoading(false);
        setAlbums(response.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      });
  }, []);

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
