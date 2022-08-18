import React, { FC } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import styles from './VideoPage.module.scss';

interface VideoPageProps {}

const VideoPage: FC<VideoPageProps> = () => {
  const params = useParams();
  let playerRef: ReactPlayer | null;

  const ref: React.LegacyRef<ReactPlayer> | undefined = (player) => {
    playerRef = player;
  };

  const handleClick = () => {
    if (playerRef) {
      playerRef.seekTo(0);
    }
  };

  return (
    <div className={styles.VideoPage} onClick={handleClick}>
      <ReactPlayer ref={ref} url={`/assets/video/${params.id}.mp4`} playing={true} />
    </div>
  );
};

export default VideoPage;
