import React from "react";
import NavBar from "../components/NavBar";
import AlbumCard from "../components/AlbumCard";

function Albums({ albums, handleClick }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>Albums</h1>
      <AlbumCard albums={albums} handleClick={handleClick} />
    </div>
  );
}

export default Albums;