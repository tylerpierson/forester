import React from 'react';
import styles from './VideoBanner.module.scss';
import SocialMediaTop from '../SocialMedia/SocialMediaTop';

const VideoBanner = ({ isFaded }) => {
  return (
    <div id="videos" className={isFaded ? `${styles.faded} ${styles.videoBanner}` : `${styles.videoBanner}`}>
      <img className={styles.logo} src="/img/placehold-logo.png" alt="Forester Logo" />
      <video autoPlay loop muted playsInline className={styles.videoBannerVideo}>
        <source src="/video/forester-banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.videoBannerContent}>
        <SocialMediaTop />
      </div>
    </div>
  );
};

export default VideoBanner;
