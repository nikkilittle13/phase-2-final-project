import React from "react";
import NavBar from "../components/NavBar";
import AlbumCard from "../components/AlbumCard";

function Albums() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>Albums</h1>
      <AlbumCard />
    </div>
  );
}

export default Albums;