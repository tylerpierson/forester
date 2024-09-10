import React from 'react';
import styles from './YoutubeSection.module.scss'; // Assuming you have styles

function YoutubeSection() {
  return (
    <div className={styles.PlaylistEmbed}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLZhApeQFymxqHAIofGEAKCWtM8Z7tvtgg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YoutubeSection;

