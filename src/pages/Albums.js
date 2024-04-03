import React from "react";
import NavBar from "../components/NavBar";
import AlbumCard from "../components/AlbumCard";
import "../index.css";

function Albums({ albums, handleClick }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1 className="header">ALBUMS</h1>
      <AlbumCard albums={albums} handleClick={handleClick} />
    </div>
  );
}

export default Albums;