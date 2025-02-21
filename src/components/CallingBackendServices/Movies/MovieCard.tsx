interface Props {
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
}

const MovieCard = ({ poster_path, title, overview, vote_average }: Props) => {
  return (
    <div className="card">
      <img src={poster_path} alt="" className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{overview}</p>
        <p>Rating: {vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
