import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Album {
  id: number;
  title: string;
  userId: number;
}

const useAlbum = () => {
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

  return { albums, error, isLoading };
};

export default useAlbum;
