import React, { useEffect } from "react";
import MovieCard from "../Carding/Carding";
import "./Grid.css";

const MovieGrid = ({ song, setPlayIndex, playIndex }) => {
  console.log(song)
  const list = song.map((music, index) => (
    <MovieCard
      music={music}
      key={music.id}
      setPlayIndex={setPlayIndex}
      index={index}
      key={index}
      playIndex={playIndex}

    />
  ));
  return (
    <div className="movie-grid">
      <div className="movie-type">
        <label><h3>Dengarkan dan Rasakan</h3> </label>
      </div>
      <div className="movie-list">{list} </div>
    </div>
  );
};

export default MovieGrid;
