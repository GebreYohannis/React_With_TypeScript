import { useEffect, useState } from "react";

interface Album {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Card = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    // console.log(data);
    setAlbums(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="d-flex flex-wrap">
        {albums.map((album) => (
          <div className="card m-4" key={album.id} style={{ width: "18rem" }}>
            <img src={album.thumbnailUrl} alt="" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">{album.title}</h3>
              {/* <p className="card-text">{album.title}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
