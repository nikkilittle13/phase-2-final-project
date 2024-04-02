import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import AlbumCard from "../components/AlbumCard";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error("Error fetching albums:", error));
  }, []);

  function handleClick(index) {
    const album = albums[index];
  
    fetch(`http://localhost:3000/albums/${album.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        votes: album.votes + 1,
      }),
    })
      .then((res) => res.json())
      .then((updatedAlbum) => {
        setAlbums((prevAlbums) => {
          const updatedAlbums = [...prevAlbums];
          updatedAlbums[index] = updatedAlbum;
          return updatedAlbums;
        });
      })
      .catch((error) => console.error("Error updating album:", error));
  }
  
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>Albums</h1>
      <AlbumCard albums={albums} handleClick={handleClick} />
    </div>
  );
}

export default Albums;