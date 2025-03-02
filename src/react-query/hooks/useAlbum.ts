import { useQuery } from "@tanstack/react-query";
import albumService, { Album } from "../services/albumService";
import { CACHE_KEY_ALBUMS } from "../constants";

const useAlbum = () => {
  return useQuery<Album[], Error>({
    queryKey: CACHE_KEY_ALBUMS,
    queryFn: albumService.getAll,
  });
};

export default useAlbum;
