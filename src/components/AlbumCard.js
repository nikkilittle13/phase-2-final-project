import React from "react";
import "../index.css";

function AlbumCard({ handleClick, albums }) {
  return (
    <div>
      {albums.map((album, index) => {
        return (
          <div className="container" key={album.id}>
          <div>
            <h1 className="title-artist">{album.title}</h1>
            <h4 className="artist-genre ">Artist: {album.artist}</h4>
            <h3 className="votes">Votes: {album.votes}</h3>
            <button className="button" onClick={() => handleClick(index)}>Vote Now</button>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default AlbumCard;