import React from "react";
import { useHistory } from "react-router-dom";
import "./CardMovie.css";
import playIcon from "../../../images/iconplay.png";

const Carding = ({
  music: {
    id,
    title,
    year,
    thumbnail,
    artist: { name },
  },
  setPlayIndex,
  index,
  playIndex,
}) => {
  const text_truncate = (str, length, ending) => {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
  return (
    <div className="card-backround">
      <div
        className={`playIcon${index === playIndex ? " current" : " "}`}
      ></div>
      <div>
        <img
          className="card"
          src={`https://apidumbsound.herokuapp.com/uploads/${thumbnail}`}
          style={{ height: "auto" }}
          onClick={() => setPlayIndex(index)}
        />
        <span className="movie-title">{text_truncate(title, 15)}</span>
        <span className="movie-kanan">{year}</span>
        <span className="movie-artis">{name}</span>
      </div>
    </div>
  );
};

export default Carding;
