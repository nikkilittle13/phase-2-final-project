import React, { useState } from "react";
import "../index.css";

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
    <form className="form" onClick={handleSubmit}>
      <label className="label">
        Title:
        <input
          className="input-album"
          type="text"
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <label className="label">
        Artist:
        <input
          className="input-album"
          type="text"
          name="artist"
          placeholder="Enter artist"
          value={artist}
          onChange={e => setArtist(e.target.value)}
        />
      </label>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  )

}

export default AlbumForm;