import React from "react";
import _ from "underscore";

const SpotifyPlaylist = ({ value }) => {
  const stars = [];
  _.times(5, idx => stars.push(idx < value ? "★" : "☆"));

  return (
    <div className="Rating">
      <h2>Find912 Rating: </h2>
      {stars.map(star => (
        <span role="img" aria-label="rating star">
          {star}
        </span>
      ))}{" "}
    </div>
  );
};

export default SpotifyPlaylist;
