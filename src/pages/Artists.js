import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ArtistCard from "../components/ArtistCard";

function Artists() {

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>Artists</h1>
      <ArtistCard />
    </div>
  );
}

export default Artists;