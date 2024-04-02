import React from "react";

function VoteButton() {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <button onClick={handleClick}>Vote Now</button>
  )
}

export default VoteButton;