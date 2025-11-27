import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = ({ src }) => (
  <AudioPlayer autoPlay={false} src={src} onPlay={() => console.log('Playing')} />
);

export default MusicPlayer;