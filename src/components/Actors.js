import React from "react";
import { actors } from "../data";

function Actors() {
  const actorDetails = actors.map((actor) => {
    return (
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <p>Movies:</p>
        <ul>
          {actor.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorDetails}
    </div>
  )
}

export default Actors;
