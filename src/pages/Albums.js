import React from "react";
import AlbumCard from "../components/AlbumCard";
import "../index.css";

function Albums({ albums, handleClick }) {
  return (
    <div>
      <h1 className="header">ALBUMS</h1>
      <AlbumCard albums={albums} handleClick={handleClick} />
    </div>
  );
}

export default Albums;