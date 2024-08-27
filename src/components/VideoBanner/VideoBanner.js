import React from 'react';
import styles from './VideoBanner.module.scss';
import SocialMediaTop from '../SocialMedia/SocialMediaTop';

const VideoBanner = () => {
  return (
    <div id="videos" className={styles.videoBanner}>
      <img className={styles.logo} src="/img/logo_placehold.png" alt="Forester Logo" />
      <video autoPlay loop muted playsInline className={styles.videoBannerVideo}>
        <source src="/video/moonlight_test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.videoBannerContent}>
        <SocialMediaTop />
      </div>
    </div>
  );
};

export default VideoBanner;
