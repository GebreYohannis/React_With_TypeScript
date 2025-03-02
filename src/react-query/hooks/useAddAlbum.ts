import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Album } from "./useAlbum";

interface AlbumContext {
  previousAlbums: Album[];
}

const useAddAlbum = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  const addAlbum = useMutation<Album, Error, Album, AlbumContext>({
    mutationFn: (album: Album) =>
      axios
        .post<Album>("https://jsonplaceholder.typicode.com/albums", album)
        .then((response) => response.data),
    onMutate: (newAlbum: Album) => {
      const previousAlbums =
        queryClient.getQueryData<Album[]>(["albums"]) || [];
      queryClient.setQueryData<Album[]>(["albums"], (albums = []) => [
        newAlbum,
        ...albums,
      ]);
      return { previousAlbums };
    },
    onSuccess: (savedAlbum, newAlbum) => {
      queryClient.setQueryData<Album[]>(["albums"], (albums = []) =>
        albums.map((album) => (newAlbum === album ? savedAlbum : album))
      );

      onAdd();
    },
    onError: (error, newAlbum, context) => {
      if (!context) return;
      queryClient.setQueryData<Album[]>(["albums"], context.previousAlbums);
    },
  });
  return { addAlbum };
};

export default useAddAlbum;
