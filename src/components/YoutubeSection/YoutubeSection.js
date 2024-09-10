import React from 'react';
import styles from './YoutubeSection.module.scss'; 

function YoutubeSection() {
  return (
    <div className={styles.PlaylistEmbedWrapper}>  
      <div className={styles.PlaylistEmbed}>
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLZhApeQFymxqHAIofGEAKCWtM8Z7tvtgg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default YoutubeSection;


