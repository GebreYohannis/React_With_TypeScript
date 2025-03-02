import axios from "axios";
import { useEffect, useState } from "react";

interface Album {
  id: number;
  title: string;
  userId: number;
}

const AlbumList = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    axios
      .get<Album[]>("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        // console.log(response.data);
        setAlbums(response.data);
      });
  }, []);
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
