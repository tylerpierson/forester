import React, { useEffect } from 'react';
import styles from './Subscribe.module.scss';

function Subscribe() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.laylo.com/laylo-sdk.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', margin: '2rem 0 5rem' }}>
      <iframe
        id="laylo-drop-WUaiI"
        frameBorder="0"
        scrolling="no"
        allow="web-share"
        allowTransparency="true"
        style={{ width: '1px', minWidth: '100%', maxWidth: '1000px' }}
        src="https://embed.laylo.com?dropId=WUaiI&color=2d186d&minimal=false&theme=dark"
        title="Laylo Drop"
      ></iframe>
    </div>
  );
}

export default Subscribe;


