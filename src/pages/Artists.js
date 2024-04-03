import React from "react";
import ArtistCard from "../components/ArtistCard";
import "../index.css";

function Artists({ artists, handleClick }) {
  return (
    <div>
      <h1 className="header">ARTISTS</h1>
      <ArtistCard artists={artists} handleClick={handleClick} />
    </div>
  );
}

export default Artists;