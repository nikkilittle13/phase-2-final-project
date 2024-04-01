import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ArtistForm from "../components/ArtistForm";

function Submission() {
  const [artists, setArtists] = useState([]);

  function handleAddArtists(newArtist) {
    setArtists([...artists, newArtist]);
  }

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>Submission</h1>
      <ArtistForm onAddArtist={handleAddArtists} />
    </div>
  );
}

export default Submission;