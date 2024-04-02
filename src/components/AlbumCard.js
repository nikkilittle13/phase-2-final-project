import React from "react";

function AlbumCard({ handleClick, albums }) {
  return (
    <div>
      {albums.map((album, index) => {
        return (
          <div key={album.id}>
            <h1>{album.title}</h1>
            <h4>Artist: {album.artist}</h4>
            <h3>Votes: {album.votes}</h3>
            <button onClick={() => handleClick(index)}>Vote Now</button>
          </div>
        );
      })}
    </div>
  );
}

export default AlbumCard;