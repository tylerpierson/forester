import React, { useEffect } from 'react';
import styles from './VideoBanner.module.scss';
import SocialMediaTop from '../SocialMedia/SocialMediaTop';

const VideoBanner = ({ isFaded }) => {

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.play().catch(error => {
        console.log('Autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div id="video-banner" className={isFaded ? `${styles.faded} ${styles.videoBanner}` : `${styles.videoBanner}`}>
      <img className={styles.logo} src="/img/DROPSHADOW 2.png" alt="Forester Logo" />
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
