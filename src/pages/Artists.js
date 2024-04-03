import React from "react";
import NavBar from "../components/NavBar";
import ArtistCard from "../components/ArtistCard";
import "../index.css";

function Artists({ artists, handleClick }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1 className="header">ARTISTS</h1>
      <ArtistCard artists={artists} handleClick={handleClick} />
    </div>
  );
}

export default Artists;