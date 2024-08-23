import React, { useEffect } from 'react';
import styles from './TourSection.module.scss';

const TourSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.seated.com/app.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="tour" className={styles.tourSection}>
      <div id="seated-55fdf2c0" className={styles.seatedEmbed} data-artist-id="ba27e0de-7b7e-4885-854a-87b49f4d12a1" data-css-version="3"></div>
    </div>
  );
};

export default TourSection;
