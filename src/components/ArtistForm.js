import React, { useState } from "react";

function ArtistForm({ onAddArtist }) {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const artistDate = {
      name: name,
      genre: genre,
      votes: 0
    };
    fetch("http://localhost:3000/artists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(artistDate)
    })
    .then(res => res.json())
    .then(newArtist => onAddArtist(newArtist))
  }
  
  return (
    <form onClick={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Genre:
        <input
          type="text"
          name="genre"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
  )

}

export default ArtistForm;

