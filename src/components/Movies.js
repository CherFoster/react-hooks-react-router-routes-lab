import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDetails = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time} </p>
        <p>Genres:</p>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Movies Page</h1>
      {movieDetails}
    </div>
  )
}

export default Movies;
