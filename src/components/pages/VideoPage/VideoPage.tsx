import React, { FC, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import styles from './VideoPage.module.scss';
import Button from '../../HomeButton/Button';
import { useNavigate } from 'react-router-dom';

interface VideoPageProps {}

const VideoPage: FC<VideoPageProps> = () => {
  const [isSlow, setIsSlow] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  let playerRef: ReactPlayer | null;

  const ref: React.LegacyRef<ReactPlayer> | undefined = (player) => {
    playerRef = player;
  };

  const handleVideoClick = () => {
    if (playerRef) {
      playerRef.seekTo(0);
    }
  };

  return (
    <div className={styles.VideoPage} onClick={handleVideoClick}>
      <ReactPlayer
        ref={ref}
        url={`${import.meta.env.BASE_URL}/assets/video/${params.id}.mp4`}
        playing={true}
        playbackRate={isSlow ? 0.5 : 1}
        volume={0}
      />
      <div className={styles.ButtonsContainer}>
        <Button onClick={() => setIsSlow(!isSlow)}>{isSlow ? 'x1.0' : 'x0.5'}</Button>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
  );
};

export default VideoPage;
