import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FormEvent, useRef } from "react";
import { Album } from "./hooks/useAlbum";

interface AlbumContext {
  previousAlbums: Album[];
}

const AlbumForm = () => {
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

      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    },
    onError: (error, newAlbum, context) => {
      if (!context) return;
      queryClient.setQueryData<Album[]>(["albums"], context.previousAlbums);
    },
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (inputRef.current && inputRef.current.value != null)
      addAlbum.mutate({
        id: 0,
        title: inputRef.current.value,
        userId: 1,
      });
  };

  if (addAlbum.error)
    return <p className="alert alert-album">{addAlbum.error.message}</p>;

  return (
    <form className="row" onSubmit={onSubmit}>
      <div className="mb-3 col">
        <input ref={inputRef} type="text" className="form-control px-3" />
      </div>
      <div className="mb-3 col">
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default AlbumForm;
