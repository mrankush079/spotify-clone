import React from 'react';

const SongCard = ({ song, onClick }) => {
  const { coverUrl, title, artist } = song || {};

  return (
    <div className="card" onClick={onClick}>
      <img
        src={coverUrl || '/assets/default-cover.jpg'}
        alt={title ? `Cover art for ${title}` : 'Song cover art'}
        className="card-img"
      />
      <p className="card-title">{title || 'Unknown Title'}</p>
      <p className="card-info">{artist || 'Unknown Artist'}</p>
    </div>
  );
};

export default SongCard;
