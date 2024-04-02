import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ArtistCard from "../components/ArtistCard";

function Artists() {
  const [artists, setArtists] = useState([]);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>Artists</h1>
      <ArtistCard artists={artists} setArtists={setArtists} />
    </div>
  );
}

export default Artists;