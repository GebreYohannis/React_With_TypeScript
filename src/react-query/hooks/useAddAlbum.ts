import { useQueryClient, useMutation } from "@tanstack/react-query";

import albumService, { Album } from "../services/albumService";

interface AlbumContext {
  previousAlbums: Album[];
}

const useAddAlbum = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  const addAlbum = useMutation<Album, Error, Album, AlbumContext>({
    mutationFn: albumService.post,
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
