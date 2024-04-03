import React from "react";
import NavBar from "../components/NavBar";
import ArtistForm from "../components/ArtistForm";
import AlbumForm from "../components/AlbumForm";

function Submission({ onAddAlbum, onAddArtist }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>Submission</h1>
      <ArtistForm onAddArtist={onAddArtist} />
      <AlbumForm onAddAlbum={onAddAlbum} />
    </div>
  );
}

export default Submission;