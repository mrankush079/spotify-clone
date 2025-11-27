import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = ({ playlist }) => {
  const [trackIndex, setTrackIndex] = useState(0);

  const next = () => {
    setTrackIndex((trackIndex + 1) % playlist.length);
  };

  const prev = () => {
    setTrackIndex((trackIndex - 1 + playlist.length) % playlist.length);
  };

  return (
    <AudioPlayer
      src={playlist[trackIndex].src}
      onEnded={next}
      onClickNext={next}
      onClickPrevious={prev}
      // other props like autoPlay, customControls etc.
    />
  );
};

export default MusicPlayer;
