import { useQueryClient, useMutation } from "@tanstack/react-query";

import albumService, { Album } from "../services/albumService";
import { CACHE_KEY_ALBUMS } from "../constants";

interface AlbumContext {
  previousAlbums: Album[];
}

const useAddAlbum = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  const addAlbum = useMutation<Album, Error, Album, AlbumContext>({
    mutationFn: albumService.post,
    onMutate: (newAlbum: Album) => {
      const previousAlbums =
        queryClient.getQueryData<Album[]>(CACHE_KEY_ALBUMS) || [];
      queryClient.setQueryData<Album[]>(CACHE_KEY_ALBUMS, (albums = []) => [
        newAlbum,
        ...albums,
      ]);
      return { previousAlbums };
    },
    onSuccess: (savedAlbum, newAlbum) => {
      queryClient.setQueryData<Album[]>(CACHE_KEY_ALBUMS, (albums = []) =>
        albums.map((album) => (newAlbum === album ? savedAlbum : album))
      );

      onAdd();
    },
    onError: (error, newAlbum, context) => {
      if (!context) return;
      queryClient.setQueryData<Album[]>(
        CACHE_KEY_ALBUMS,
        context.previousAlbums
      );
    },
  });
  return { addAlbum };
};

export default useAddAlbum;
