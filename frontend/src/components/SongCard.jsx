import React from 'react';

const SongCard = ({ song }) => {
  return (
    <div className="card">
      <img src={song.coverUrl} alt={song.title} className="card-img" />
      <p className="Card-Title">{song.title}</p>
      <p className="Card-Info">{song.artist}</p>
    </div>
  );
};

export default SongCard;