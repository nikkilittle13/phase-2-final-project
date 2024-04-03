import React from "react";
import NavBar from "../components/NavBar";
import ArtistForm from "../components/ArtistForm";
import AlbumForm from "../components/AlbumForm";
import "../index.css";

function Submission({ onAddAlbum, onAddArtist }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1 className="header">Submission</h1>
      <ArtistForm onAddArtist={onAddArtist} />
      <AlbumForm onAddAlbum={onAddAlbum} />
    </div>
  );
}

export default Submission;