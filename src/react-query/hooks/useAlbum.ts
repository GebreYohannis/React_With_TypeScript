import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export interface Album {
  id: number;
  title: string;
  userId: number;
}

const useAlbum = () => {
  return useQuery<Album[], Error>({
    queryKey: ["albums"],
    queryFn: () =>
      axios
        .get<Album[]>("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.data),
  });
};

export default useAlbum;
