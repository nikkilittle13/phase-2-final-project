import React, { useState } from "react";
import '../index.css';

function ArtistForm({ onAddArtist }) {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const artistData = {
      name: name,
      genre: genre,
      votes: 0
    };
    fetch("http://localhost:3000/artists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(artistData)
    })
    .then(res => res.json())
    .then(newArtist => onAddArtist(newArtist))
    .then(() => {
      setName("");
      setGenre("");
      alert("Successful! Please check the Artists page to see your submission.")})
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">
        Name:
        <input
          className="input-artist"
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className="label">
        Genre:
        <input
          className="input-artist"
          type="text"
          name="genre"
          placeholder="Enter genre"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
      </label>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  )

}

export default ArtistForm;

