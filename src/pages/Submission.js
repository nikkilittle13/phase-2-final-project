import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ArtistForm from "../components/ArtistForm";
import AlbumForm from "../components/AlbumForm";

function Submission() {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  function handleAddAlbums(newAlbum) {
    setAlbums([...albums, newAlbum]);
  }

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
      <AlbumForm onAddAlbum={handleAddAlbums} />
    </div>
  );
}

export default Submission;