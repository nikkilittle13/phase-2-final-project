import React, {useState, useEffect }from'react';
import { Route, Routes } from'react-router-dom';
import Home from '../pages/Home';
import Artists from '../pages/Artists';
import Albums from '../pages/Albums';
import Submission from '../pages/Submission';

function App() {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/artists")
     .then((res) => res.json())
     .then((data) => setArtists(data))
     .catch((error) => console.error("Error fetching artists:", error));

     fetch("http://localhost:3000/albums")
     .then((res) => res.json())
     .then((data) => setAlbums(data))
     .catch((error) => console.error("Error fetching albums:", error));
  }, []);

  function handleAddArtist(newArtist) {
    setArtists(prevArtists => [...prevArtists, newArtist]);
  };

  function handleAddAlbums(newAlbum) {
    setAlbums(prevAlbums => [...albums, newAlbum]);
  };

  function handleClickArtist(index) {
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
    .then((res) => res.json())
     .then((updatedArtist) => {
        setArtists((prevArtist) => {
          const updatedArtists = [...prevArtist];
          updatedArtists[index] = updatedArtist;
          return updatedArtists;
        });
      })
     .catch((error) => console.error("Error updating artist:", error));
  }

  function handleClickAlbum(index) {
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
        <Routes>
          <Route exact path="/"
            element={<Home />}
          />
          <Route
            path="/artists"
            element={<Artists
            artists={artists}
            handleClick={handleClickArtist}
            />}
          /> 
          <Route
            path="/albums"
            element={<Albums
            albums={albums}
            handleClick={handleClickAlbum}
            />}
          />
          <Route
            path="/submission"
            element={<Submission
            onAddArtist={handleAddArtist}
            onAddAlbum={handleAddAlbums}
            />}
          />
        </Routes>
    </div>
  );
}

export default App;
