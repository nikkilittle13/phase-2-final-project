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
      <h1 className="header">SUBMISSION</h1>
      <h2 className="submit-header">Submit Your Favorite Artist:</h2>
      <ArtistForm onAddArtist={onAddArtist} />
      <h2 className="submit-header">Submit Your Favorite Album:</h2>
      <AlbumForm onAddAlbum={onAddAlbum} />
    </div>
  );
}

export default Submission;