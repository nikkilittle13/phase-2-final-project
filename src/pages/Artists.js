import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ArtistCard from "../components/ArtistCard";

function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/artists")
    .then(res => res.json())
    .then(data => setArtists(data))
    .catch((error) => console.error("Error fetching albums:", error));
  }, [])

  function handleClick(index) {
    const artist = artists[index];

    fetch(`http://localhost:3000/artists/${artist.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        votes: artist.votes + 1,
      }),
    })
   .then(res => res.json())
   .then(updatedArtist => {
    setArtists((prevArtists) => {
      const updatedArtists = [...prevArtists];
      updatedArtists[index] = updatedArtist;
      return updatedArtists;
    })
   })
   .catch((error) => console.error("Error updating album:", error));
  }

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