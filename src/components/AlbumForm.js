import React, { useState } from "react";

function AlbumForm({ onAddAlbum }) {
  const[title, setTitle] = useState("");
  const[artist, setArtist] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const albumData = {
      title: title,
      artist: artist,
      votes: 0
    };
    fetch("http://localhost:3000/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(albumData)
    })
   .then(res => res.json())
   .then(newAlbum => onAddAlbum(newAlbum))
  }

  return (
    <form onClick={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="name"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <label>
        Artist:
        <input
          type="text"
          name="genre"
          value={artist}
          onChange={e => setArtist(e.target.value)}
        />
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
  )

}

export default AlbumForm;