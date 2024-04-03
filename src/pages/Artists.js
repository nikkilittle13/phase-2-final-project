import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ArtistCard from "../components/ArtistCard";

function Artists({ artists, handleClick }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>Artists</h1>
      <ArtistCard artists={artists} handleClick={handleClick} />
    </div>
  );
}

export default Artists;