import React, { useEffect } from 'react';
import styles from './TourSection.module.scss';

const TourSection = ({ isFaded }) => {
  useEffect(() => {
    const layloScript = document.createElement('script');
    layloScript.src = "https://embed.laylo.com/laylo-sdk.js";
    layloScript.async = true;
    document.body.appendChild(layloScript);

    return () => {
      document.body.removeChild(layloScript);
    };
  }, []);

  return (
    <div id="tour" className={isFaded ? `${styles.faded} ${styles.tourSection}` : `${styles.tourSection}`}>
      <iframe
        id="laylo-drop-46c2fa69-4ca5-4e2c-ba7e-46e26d1b0b40"
        frameBorder="0"
        scrolling="no"
        allow="web-share"
        allowTransparency="true"
        style={{ width: '1px', minWidth: '100%', maxWidth: '1000px' }}
        src="https://embed.laylo.com?dropId=46c2fa69-4ca5-4e2c-ba7e-46e26d1b0b40&color=2f152f&minimal=true&theme=dark"
      ></iframe>
    </div>
  );
};

export default TourSection;
