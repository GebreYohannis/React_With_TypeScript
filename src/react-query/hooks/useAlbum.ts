import { useQuery } from "@tanstack/react-query";
import albumService, { Album } from "../services/albumService";

const useAlbum = () => {
  return useQuery<Album[], Error>({
    queryKey: ["albums"],
    queryFn: albumService.getAll,
  });
};

export default useAlbum;
