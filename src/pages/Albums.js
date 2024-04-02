import React, { useState } from "react";
import NavBar from "../components/NavBar";
import AlbumCard from "../components/AlbumCard";

function Albums() {
  const [albums, setAlbums] = useState([]);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>Albums</h1>
      <AlbumCard albums={albums} setAlbums={setAlbums} />
    </div>
  );
}

export default Albums;