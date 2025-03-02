import { FormEvent, useRef } from "react";
import useAddAlbum from "./hooks/useAddAlbum";

const AlbumForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { addAlbum } = useAddAlbum(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
  });

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
