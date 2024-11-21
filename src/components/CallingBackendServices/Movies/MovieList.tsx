import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
}

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<Movie[]>(
          "https://api.moviesdatabase.org/v1/movie/popular"
        );
        setMovies(response.data);
      } catch (error) {
        // console.log("Fetching error...", error);
        setError((error as AxiosError).message);
      }
    };
    fetchMovies();
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <div className="container d-flex flex-wrap">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            overview={movie.overview}
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;
