import React, { useEffect, useState } from "react";

function AlbumCard() {
  const [albums, setAlbums] = useState([]);

useEffect(() => {
  fetch("http://localhost:3000/albums")
  .then(res => res.json())
  .then(data => {
     setAlbums(data);
   })
}, [])

return (
  <div>
    {albums.map(album => {
      return (
        <div key={album.id}>
          <h1>{album.title}</h1>
          <h4>Artist: {album.artist}</h4>
          <h3>Votes: {album.votes}</h3>
        </div>
      )
    })}
  </div>
)
}

export default AlbumCard;